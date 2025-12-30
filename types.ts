
export interface InvitationData {
  recipient: string;
  location: string;
  school: string;
  date: string;
  time: string;
  dressCode: string;
  aiMessage?: string;
}

export enum AppStage {
  INTRO = 'INTRO',
  INVITATION = 'INVITATION'
}
