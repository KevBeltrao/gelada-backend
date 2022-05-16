import { Req, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiCreatedResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { Match } from './interfaces/match.interface';
import { MatchesService } from './matches.service';

@Controller('matches')
export class MatchesController {
  constructor(private matchesService: MatchesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiOperation({ summary: 'Register match' })
  @ApiBearerAuth('access-token')
  @ApiCreatedResponse({ description: 'Match registered', type: Match })
  public async create(@Req() req: { user: { email: string } }): Promise<Match> {
    return await this.matchesService.createMatch(req.user.email);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiOperation({ summary: 'List matches' })
  @ApiBearerAuth('access-token')
  @ApiOkResponse({ description: 'Matches listed', type: [Match] })
  public async list(@Req() req: { user: { email: string } }): Promise<Match[]> {
    return await this.matchesService.listMatches(req.user.email);
  }
}
