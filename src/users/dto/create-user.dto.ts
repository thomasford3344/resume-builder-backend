export class CreateUserDto {
  email: string;
  name: string;
  password: string;
  role?: 'user' | 'admin';
  template?: 'template1';
  instructions?: string;
  questionsPrompt?: string;
}
