import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CronModule } from './cron/cron.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { QueueModule } from './queue/queue.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { StatusGateway } from './gateway/status.gateway';
import { TranslationsModule } from './translations/translations.module';
import { UploadModule } from './upload/upload.module';
import { UsersModule } from './users/users.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'),
      serveRoot: '/uploads',
    }),
    UploadModule,
    QueueModule,
    UsersModule,
    AuthModule,
    DashboardModule,
    TranslationsModule,
    CronModule,
    PaymentsModule,
  ],
  controllers: [],
  providers: [StatusGateway],
})
export class AppModule {}
