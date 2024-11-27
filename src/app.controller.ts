import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GoogleSheetsService } from './google-sheets/google-sheets.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly googleSheetsService: GoogleSheetsService,
  ) {}

  @Get()
  async getHello() {
    const range = 'Sheet1!A1:E10'; // Adjust as needed
    const data = await this.googleSheetsService.fetchSheetData(range);
    return { data };
  }
}
