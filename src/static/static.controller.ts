import { Controller, Get } from '@nestjs/common';
import { MarquesService } from '../marques.service';
import { TypeVehiculeService } from '../typeVehicule.service';

@Controller()
export class StaticController {
  constructor(
    private readonly marquesService: MarquesService,
    private readonly dogsService: TypeVehiculeService,
  ) {}

  @Get()
  getIndex(): string {
    return 'Welcome to the static module!';
  }

  @Get('/marques')
  getCats(): string[] {
    return this.marquesService.findAll();
  }

  @Get('/typeVehicule')
  getDogs(): string[] {
    return this.dogsService.findAll();
  }
}
