import { Injectable } from '@angular/core';
import { AuthToken, User } from '@core/models';
import { _mockAuthToken, mockSendResult } from '@core/services/utils';

@Injectable({
  providedIn: 'root',
})
export class UserMockService {
  login(
    login: string,
    password: string
  ): Promise<{ authToken: AuthToken; user: User }> {
    return mockSendResult({
      authToken: _mockAuthToken,
      user: {
        userId: 123,
        login: 'laurent@bigsool.com',
        name: 'Laurent Wozniak',
      },
    });
  }
}
