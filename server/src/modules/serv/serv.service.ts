import {Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizRepository } from "./quiz.repository";
import { CreateServDto } from "./dto/CreateServ.dto";
import { Quiz } from "../../entity/quiz.entity";

@Injectable()
export class ServService{
  constructor(
    private readonly quizRepository: QuizRepository,
  ) {}

  getAllServers(){
    return [1,2,3,4,5];
  }

  async qetQuizById(id: number): Promise<Quiz>{
    return await this.quizRepository.findOneById(id);
  }

  async createNewQuiz(quiz: CreateServDto){
    const newQuiz =this.quizRepository.create({
      ...quiz,
    });
    return await this.quizRepository.save(newQuiz);
  }
}