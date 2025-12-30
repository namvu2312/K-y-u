
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateInvitationMessage = async (recipient: string, school: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Hãy viết một lời nhắn gửi ngắn gọn, mang phong cách tương lai (cyberpunk, futuristic) và đầy cảm hứng dành cho Huyền Trang nhân dịp chụp ảnh kỉ yếu lớp 12 tại trường ${school}. Lời nhắn nên kịch tính nhưng ấm áp, gợi nhắc về hành trình thanh xuân và thế giới công nghệ tương lai. Chỉ lấy 1-2 câu ngắn gọn. Ngôn ngữ: Tiếng Việt.`,
      config: {
        temperature: 0.9,
        topP: 0.95,
        maxOutputTokens: 200,
      }
    });

    return response.text || "Hãy cùng ghi lại những khoảnh khắc cuối cùng của thời học sinh trong một thực tại rực rỡ nhất.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hành trình nghìn năm bắt đầu từ những khoảnh khắc này. Hẹn gặp bạn tại tương lai.";
  }
};
