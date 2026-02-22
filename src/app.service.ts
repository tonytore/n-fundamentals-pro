import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('APP_CONFIG') private config: { port: string }) {}
  getHello(): string {
    return `Hello World! ${this.config.port}`;
  }
}
