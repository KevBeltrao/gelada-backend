import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { Match } from './interfaces/match.interface';
import { MatchesService } from './matches.service';

@Controller('matches')
export class MatchesController {
  constructor(private matchesService: MatchesService) {}

  @Post()
  @ApiOperation({ summary: 'Register match' })
  @ApiCreatedResponse({ description: 'Match registered', type: Match })
  @ApiBody({ type: Match })
  public async create(@Body() matchData: Match): Promise<Match> {
    return await this.matchesService.createMatch(matchData);
  }

  @Get()
  @ApiOperation({ summary: 'List matches' })
  @ApiOkResponse({ description: 'Matches listed', type: [Match] })
  public async list(): Promise<Match[]> {
    return await this.matchesService.listMatches();
  }
}
