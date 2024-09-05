import { UserRole } from "../enums/userRole.enum";

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: UserRole; // Menggunakan enum dari enums/userRole.enum.ts
  createdAt: Date;
  updatedAt: Date;
}
