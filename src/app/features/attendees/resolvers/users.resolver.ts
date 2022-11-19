import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { distinctUntilChanged, Observable, shareReplay } from 'rxjs';
import { AuthToken, User } from '@core/models';
import { UserService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class UsersResolver
  implements Resolve<{ authToken: AuthToken; user: User }>
{
  constructor(private readonly userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<{ authToken: AuthToken; user: User }> {
    return this.userService
      .login('laurent@bigsool.com', '12345')
      .pipe(distinctUntilChanged(), shareReplay(1));
  }
}
