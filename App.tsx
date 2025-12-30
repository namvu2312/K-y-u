
import React, { useState } from 'react';
import { DramaticIntro } from './components/DramaticIntro';
import { InvitationCard } from './components/InvitationCard';
import { AppStage, InvitationData } from './types';

/**
 * HƯỚNG DẪN THAY ĐỔI NỘI DUNG:
 * Bạn có thể thay đổi các thông tin bên dưới trong biến `initialInvitationData`.
 * Các thông tin này sẽ hiển thị trực tiếp trên web.
 */
const initialInvitationData: InvitationData = {
  recipient: "Huyền Trang",
  location: "THPT LÊ VĂN THỊNH",
  school: "THPT LÊ VĂN THỊNH",
  date: "03/01/2026",
  time: "9:00 AM",
  dressCode: "White & Black",
  aiMessage: "Lên đồ thật đẹp để sánh vai cùng bộ vest đen của tớ nhé! 🕴️"
};

const App: React.FC = () => {
  const [stage, setStage] = useState<AppStage>(AppStage.INTRO);
  // Dữ liệu thiệp mời
  const [data] = useState<InvitationData>(initialInvitationData);

  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-cyan-500/30">
      {stage === AppStage.INTRO && (
        <DramaticIntro onComplete={() => setStage(AppStage.INVITATION)} />
      )}
      
      {stage === AppStage.INVITATION && (
        <div className="animate-[fadeIn_1.5s_ease-out] pb-10">
          <InvitationCard data={data} />
          
          <div className="text-center pb-8 opacity-40">
            <p className="text-[10px] tracking-[0.5em] uppercase">See you in the future</p>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
            to { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
        `}
      </style>
    </div>
  );
};

export default App;
