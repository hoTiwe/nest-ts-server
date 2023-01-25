import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!!!!!!!';
  }

  getLol():string{
    return 'No way. No mercy. No mercy';
  }
}
