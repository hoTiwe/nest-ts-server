import { Module } from '@nestjs/common';
import { ServController } from "./serv.controller";
import { ServService } from "./serv.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuizRepository } from "./quiz.repository";
import { Quiz } from "../../entity/quiz.entity";
import { QuestionController } from "../question/question.controller";
import { QuestionRepository } from "../question/question.repository";
import { QuestionService } from "../question/question.service";

@Module({
  imports:[TypeOrmModule.forFeature([QuizRepository,QuestionRepository])],
  controllers:[ServController,QuestionController],
  providers:[ServService,QuestionService,QuizRepository,QuestionRepository]
})
export class ServModule {}
