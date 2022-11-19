import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { UserMockService } from '@core/services';
import { AuthToken, User } from '@core/models';
import { _mockAuthToken } from '@core/services/utils';
import { take } from 'rxjs';

const data: { authToken: AuthToken; user: User } = {
  authToken: _mockAuthToken,
  user: {
    userId: 123,
    login: 'laurent@bigsool.com',
    name: 'Laurent Wozniak',
  },
};

describe('UserService', () => {
  let service: UserService;
  let serviceWithPromise: UserMockService;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
    serviceWithPromise = TestBed.inject(UserMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get login', done => {
    let actualUser: { authToken: AuthToken; user: User };
    spy = spyOn(serviceWithPromise, 'login').and.returnValues(
      Promise.resolve(data)
    );

    const user$ = service.login('foo', 'bar');
    user$.pipe(take(1)).subscribe({
      next: value => {
        actualUser = value;
      },
      complete: () => {
        expect(actualUser).toEqual(data);
        done();
      },
    });

    expect(serviceWithPromise.login).toHaveBeenCalled();
  });
});
