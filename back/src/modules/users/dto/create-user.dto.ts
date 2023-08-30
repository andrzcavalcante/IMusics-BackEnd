import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do usuário',
    default: 'André Cavalcante',
  })
  name: string;

  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  @ApiProperty()
  password: string;
}
