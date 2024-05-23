export type ProfileType = 'pink' | 'blue';

export interface Profile {
  type: ProfileType;
  role: string;
  name: string;
  position: string;
  company: string;
}
