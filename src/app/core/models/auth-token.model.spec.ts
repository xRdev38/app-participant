import { AuthToken } from './auth-token.model';
import { faker } from '@faker-js/faker';

describe('AuthToken model', () => {
  let auth: string;

  beforeEach(() => {
    auth = faker.datatype.uuid();
  });

  it('has a valid model', () => {
    let authToken: AuthToken = {
      auth,
    };

    expect(authToken.auth).toEqual(auth);
  });
});
