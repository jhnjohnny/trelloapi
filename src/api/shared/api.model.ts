import { Document } from 'mongoose';
import { ApiProperty } from "@nestjs/swagger";

export class ApiModel extends Document {
    //@ApiProperty()  
    //id: number;

    @ApiProperty()
    descricao: string;

    @ApiProperty()
    completo: boolean;
}
