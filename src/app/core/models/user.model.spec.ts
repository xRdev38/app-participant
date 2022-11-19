import { User } from './user.model';
import { faker } from '@faker-js/faker';

describe('User model', () => {
  let userId: number;
  let login: string;
  let name: string;

  beforeEach(() => {
    userId = faker.datatype.number();
    name = faker.name.fullName();
    login = faker.company.name();
  });

  it('has a valid model', () => {
    let user: User = {
      userId,
      name,
      login,
    };

    expect(user.userId).toEqual(userId);
    expect(user.name).toEqual(name);
    expect(user.login).toEqual(login);
  });
});
