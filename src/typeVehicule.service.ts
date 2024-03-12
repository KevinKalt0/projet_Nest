import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeVehiculeService {
  private readonly typeVehicule: string[] = ['Moto', 'Berline', '4x4','Camion'];

  findAll(): string[] {
    return this.typeVehicule;
  }
}
