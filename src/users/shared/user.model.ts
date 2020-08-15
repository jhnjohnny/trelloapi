import { Document } from 'mongoose';
import { ApiProperty } from "@nestjs/swagger";

export class UserModel extends Document {

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}