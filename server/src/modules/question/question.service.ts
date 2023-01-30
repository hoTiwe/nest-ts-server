import { Injectable } from "@nestjs/common";
import { QuestionRepository } from "./question.repository";
import { CreateQuestionDto } from "./dto/createQuestion.dto";
import { Question } from "../../entity/question.entity";

@Injectable()
export class QuestionService{
  constructor(
    private readonly questionRepository: QuestionRepository,
  ) {}


  async createQuestion(question: CreateQuestionDto): Promise<Question>{
    return await this.questionRepository.save(question);
  }

}