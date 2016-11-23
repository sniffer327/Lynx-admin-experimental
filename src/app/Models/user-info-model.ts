// Модель для информации о пользователе
export class UserInfoModel {
  public id: number;
  public email: string;
  public name: string;
  public login: string;
  public role: string;
  public photoUrl: string;
  public phone: string;
  public company: string;
  public profileBgUrl: string;
  public subUser?: number;
  public userHash: string;
  public dateActivation: Date;
  public password: string;
}
