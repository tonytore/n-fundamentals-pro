import { Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigService';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private devConfigService: DevConfigService,
    private readonly configService: ConfigService,
  ) {}

  getHello(): string {
    const environment = this.configService.get<string>('environment');
    // const host = this.configService.get<string>('database.host');
    console.log(environment);
    // console.log(host);

    return `Hello World! ${this.devConfigService.getDBHOST()}`;
  }
}
