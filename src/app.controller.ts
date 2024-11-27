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
    // this.onModuleInit();
    return { data };
  }

  // onModuleInit() {
  //   console.log('AppController initialized');
  //   setInterval(async () => {
  //     console.log('Checking for new data...');
  //     const data =
  //       await this.googleSheetsService.fetchSheetData('Sheet1!A1:E10');
  //     console.log('Data fetched:', data);
  //   }, 1000);
  // }
}
