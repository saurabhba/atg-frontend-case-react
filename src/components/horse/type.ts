export interface Horse {
  name: string;
  owner: Owner;
  trainer: Person;
}

export interface Owner {
  id: number;
  name: string;
}

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
}
