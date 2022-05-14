import { Controller, Get } from '@nestjs/common';
import { MatchesService } from './matches.service';

@Controller('matches')
export class MatchesController {
  constructor(private matchesService: MatchesService) {}
  @Get()
  hello() {
    return this.matchesService.hello();
  }
}
