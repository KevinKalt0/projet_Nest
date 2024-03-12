import { Module } from '@nestjs/common';
import { MarquesController } from '../marques.controller';
import { MarquesService } from '../marques.service';
import { TypeVehiculeService } from '../typeVehicule.service';

@Module({
  controllers: [MarquesController],
  providers: [MarquesService, TypeVehiculeService],
})
export class DynamicModule {}
