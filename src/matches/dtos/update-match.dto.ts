import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateMatchDto {
  @ApiPropertyOptional({ type: Number, description: 'goalsA' })
  goalsA?: number;
  @ApiPropertyOptional({ type: Number, description: 'goalsB' })
  goalsB?: number;
  @ApiPropertyOptional({ type: Boolean, description: 'isActive' })
  isActive?: boolean;
}
