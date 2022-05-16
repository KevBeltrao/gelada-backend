import {
  Req,
  Controller,
  Get,
  Post,
  UseGuards,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiCreatedResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateMatchDto } from './dtos/update-match.dto';
import { Match } from './interfaces/match.interface';
import { MatchesService } from './matches.service';

@ApiTags('matches')
@Controller('matches')
export class MatchesController {
  constructor(private matchesService: MatchesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiOperation({ summary: 'List matches' })
  @ApiBearerAuth('access-token')
  @ApiOkResponse({ description: 'Matches listed', type: [Match] })
  public async list(@Req() req: { user: { email: string } }): Promise<Match[]> {
    return await this.matchesService.listMatches(req.user.email);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiOperation({ summary: 'Register match' })
  @ApiBearerAuth('access-token')
  @ApiCreatedResponse({ description: 'Match registered', type: Match })
  public async create(@Req() req: { user: { email: string } }): Promise<Match> {
    return await this.matchesService.createMatch(req.user.email);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get match by id' })
  @ApiOkResponse({ description: 'Match detailed', type: Match })
  public async detail(@Param('id') id: string): Promise<Match> {
    return await this.matchesService.detailMatch(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/:id')
  @ApiOperation({ summary: 'Update match' })
  @ApiBearerAuth('access-token')
  @ApiOkResponse({ description: 'Match updated', type: UpdateMatchDto })
  public async update(
    @Param('id') id: string,
    @Body() body: UpdateMatchDto,
    @Req() req: { user: { email: string } },
  ): Promise<UpdateMatchDto> {
    return await this.matchesService.updateMatch(id, body, req.user.email);
  }
}
