import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
// import { BetfairService } from './betfair/betfair.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private betfairService: BetfairService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(JwtAuthGuard)
  @Get('account-funds/:refresh')
  async getAccountFunds(@Param('refresh') refresh: string) {
    // const accountFunds = await this.betfairService.getAccountFunds(
    //   refresh === 'true' ? true : false,
    // );
    return true;
  }
}
