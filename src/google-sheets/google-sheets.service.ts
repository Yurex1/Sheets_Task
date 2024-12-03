import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';

@Injectable()
export class GoogleSheetsService {
  private readonly spreadsheetId =
    '1WACs-GH1XMvpK1cmWgihgjtwUBZKrPGtPjOxVkX0r9s';

  async fetchSheetData(range: string) {
    console.log('ABRACADABRA', range);
    // return 'ASD';
    // const auth = new google.auth.GoogleAuth({
    //   credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT),
    //   scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    // });
    // const sheets = google.sheets({ version: 'v4', auth });
    // try {
    //   const response = await sheets.spreadsheets.values.get({
    //     spreadsheetId: this.spreadsheetId,
    //     range,
    //     majorDimension: 'ROWS',
    //   });
    //   return response.data.values || [];
    // } catch (error) {
    //   console.error('Error fetching Google Sheet data:', error.message);
    //   throw error;
    // }
  }

  async getRowWithId(id: number) {
    return id;
    // const range = `A${id}:Z${id}`;
    // const result = await this.fetchSheetData(range);
    // return result[0] || null;
  }
}
