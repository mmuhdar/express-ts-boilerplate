// src/services/user.service.ts
import { IUser } from '../interfaces/user.interface';
import { UserRole } from '../enums/userRole.enum';

const users: IUser[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: UserRole.USER, createdAt: new Date(), updatedAt: new Date() },
];

export const getAllUsers = async (): Promise<IUser[]> => {
  // Logika untuk mengambil semua pengguna
  return users;
};

export const createUser = async (userData: IUser): Promise<IUser> => {
  // Logika untuk membuat pengguna baru
  const newUser = { ...userData, id: String(users.length + 1), createdAt: new Date(), updatedAt: new Date() };
  users.push(newUser);
  return newUser;
};
