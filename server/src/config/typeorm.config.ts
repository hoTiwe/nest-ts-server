import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSource } from "typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'qwerty12',
    database: 'servTest',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
}

export const PostgresDataSource = new DataSource({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'qwerty12',
    database: 'servTest',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
})