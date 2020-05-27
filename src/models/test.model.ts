import {Entity, model, property} from '@loopback/repository';

@model()
export class Test extends Entity {

  constructor(data?: Partial<Test>) {
    super(data);
  }
}

export interface TestRelations {
  // describe navigational properties here
}

export type TestWithRelations = Test & TestRelations;
