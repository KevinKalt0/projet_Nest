import { Injectable } from '@nestjs/common';

@Injectable()
export class MarquesService {
  private readonly cats: string[] = ['BMW', 'Mercedes', 'Peugeot','Lamborghini'];

  findAll(): string[] {
    return this.cats;
  }
}
