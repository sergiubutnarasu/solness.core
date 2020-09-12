export interface UserContext {
  id: number;
  email: string;
  role: string | number;
  data: object | undefined;
}
