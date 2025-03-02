import { z } from 'zod';

const authSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    password_confirmation: z.string(),
});

type Auth = z.infer<typeof authSchema>;
export type UserLoginForm = Pick<Auth, "email" | "password">;
export type UserRegistrationForm = Pick<Auth, "name" | "email" | "password" | "password_confirmation">;

export const userSchema = z.number();

export type User = z.infer<typeof userSchema>;

export const taskSchema = z.object({
  id: z.number(),
  name: z.string(),
  completed: z.boolean(),
});

export const dashboardTaskSchema = z.array(
  taskSchema.pick({ 
    id: true, 
    name: true, 
    completed: true }),
);

export type Task = z.infer<typeof taskSchema>;
export type TaskFormData = Pick<Task, 'name' | 'completed'>;