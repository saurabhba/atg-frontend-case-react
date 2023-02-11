export interface Horse {
  id: number;
  name: string;
  owner: Owner;
  trainer: Person;
}

export interface Owner {
  id: number;
  name: string;
}

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
}
