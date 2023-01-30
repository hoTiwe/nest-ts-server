import { Question } from "../../entity/question.entity";
import { DataSource, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class QuestionRepository extends Repository<Question>{
  constructor(private dataSource: DataSource) {
    super(Question, dataSource.createEntityManager());
  }
}