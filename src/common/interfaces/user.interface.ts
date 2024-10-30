export interface IUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  subscriptionStatus?: string;
  createdAt: Date;
}