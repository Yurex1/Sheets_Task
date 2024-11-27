import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { GoogleSheetsModule } from './google-sheets/google-sheets.module';

@Module({
  imports: [UsersModule, DatabaseModule, GoogleSheetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
