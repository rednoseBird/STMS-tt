import { Coordinates } from './coordinates.class';

export class User {
  username: string;
  name: string;
  firstName: string;
  lastName: string;
  age: number;
  hometown: string;
  image: string;
  imagePosition: Coordinates;
  textPosition: Coordinates;
  passwordHash: string;
}
