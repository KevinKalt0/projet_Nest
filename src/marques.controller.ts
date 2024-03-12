import { Controller, Get } from '@nestjs/common';
import { MarquesService } from './marques.service';

@Controller('marques')
export class MarquesController {
  constructor(private readonly marquesService: MarquesService) {}

  @Get()
  findAll(): string[] {
    return this.marquesService.findAll();
  }
}
