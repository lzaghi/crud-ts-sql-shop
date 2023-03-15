export interface ICredentials {
  username: string;
  password?: string;
}

export interface IUser extends ICredentials {
  id?: number;
  vocation: string;
  level: number;
}