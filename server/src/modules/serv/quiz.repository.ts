import { DataSource, EntityRepository, Repository } from "typeorm";
import { Quiz } from "../../entity/quiz.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class QuizRepository extends Repository<Quiz>{
  constructor(private dataSource: DataSource) {
    super(Quiz, dataSource.createEntityManager());
  }
}