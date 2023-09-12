import { ConfigService } from '@nestjs/config';

export class DatabaseConfig {
  constructor(private readonly configService: ConfigService) {}
  get host(): string {
    return this.configService.get<string>('POSTGRES_HOST');
  }
  get port(): number {
    return this.configService.get<number>('POSTGRES_PORT');
  }
  get username(): string {
    return this.configService.get<string>('POSTGRES_USER');
  }
  get password(): string {
    return this.configService.get<string>('POSTGRES_PASSWORD');
  }
  get database(): string {
    return this.configService.get<string>('POSTGRES_DB');
  }
}
