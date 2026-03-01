import { Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigService';

@Injectable()
export class AppService {
  constructor(private devConfigService: DevConfigService, private configService: ConfigService) {}

  getHello(): string {
    const environment
    return `Hello World! ${this.devConfigService.getDBHOST()}`;
  }
}
