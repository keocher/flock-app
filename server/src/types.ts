// defines user roles and authentication user interface

export type Role = 'student' | 'tutor' | 'admin';

export interface AuthUser {
  id: string;
  role: Role;
}
