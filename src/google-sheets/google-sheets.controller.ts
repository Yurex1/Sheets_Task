import { Controller, Get } from '@nestjs/common';
import { GoogleSheetsService } from './google-sheets.service';

@Controller('google-sheets')
export class GoogleSheetsController {
  constructor(private readonly google_sheets_service: GoogleSheetsService) {}

  // @Get(':id')
  // getRowWithId(@Param('id') id: number) {
  // return this.google_sheets_service.getRowWithId(id);
  // }

  @Get()
  async getAllData() {
    return 'A';
    // return this.google_sheets_service.fetchSheetData('A1:E10');
  }
}
