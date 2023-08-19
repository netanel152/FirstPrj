import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class UserDTO {
  @IsEmail()
  email: string;

  @IsNumber()
  age: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  country: string;
}
