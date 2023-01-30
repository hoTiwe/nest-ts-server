import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ServService } from "./serv.service";
import { CreateServDto } from "./dto/CreateServ.dto";
import { Quiz } from "../../entity/quiz.entity";
import { PostgresDataSource } from "../../config/typeorm.config";


@Controller('serv')
export class ServController {
  constructor(private servService: ServService) {}

  @Get('/')
  getAllServers(){
    return this.servService.getAllServers();
  }
  //
  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createServ(@Body() servData: CreateServDto){
    return await this.servService.createNewQuiz(servData);
  }

}
