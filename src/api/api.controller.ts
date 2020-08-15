import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { ApiService } from './shared/api.service';
import { ApiModel } from './shared/api.model';
import { JwtAuthGuard } from './../auth/shared/jwt-auth.guard';

@ApiTags('ApiController')
@Controller('api')
export class ApiController {

    constructor(private apiService: ApiService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll() : Promise<ApiModel[]> {
        return this.apiService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string) : Promise<ApiModel> {
        return this.apiService.getById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() inputDados: ApiModel) : Promise<ApiModel> {
        //console.log(inputDados);
        return this.apiService.create(inputDados);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() inputDados : ApiModel) : Promise<ApiModel> {
        inputDados.id = id;
        return this.apiService.update(id, inputDados);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.apiService.delete(id);
    }
}
