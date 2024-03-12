import { Module } from '@nestjs/common';
import { MarquesService } from '../marques.service';
import { TypeVehiculeService } from '../typeVehicule.service';
import { StaticController } from './static.controller';

@Module({
  controllers: [StaticController],
  providers: [MarquesService, TypeVehiculeService], 
})
export class StaticModule {}
