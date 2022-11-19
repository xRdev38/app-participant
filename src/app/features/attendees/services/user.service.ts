import { Injectable } from '@angular/core';
import { AuthToken, User } from '@core/models';
import { Observable } from 'rxjs';
import { UserMockService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly user: UserMockService) {}

  login(
    login: string,
    password: string
  ): Observable<{ authToken: AuthToken; user: User }> {
    return new Observable(observer => {
      this.user
        .login(login, password)
        .then((user: { authToken: AuthToken; user: User }) => {
          observer.next(user);
          observer.complete();
        })
        .catch((error: Error) => {
          observer.error(error);
        })
        .finally(() => {
          observer.complete();
        });
    });
  }
}
