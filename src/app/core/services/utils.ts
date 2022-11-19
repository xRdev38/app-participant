import { AuthToken } from '@core/models';

export const _mockAuthToken: AuthToken = {
  auth: 'de2c038a-6105-4722-9838-0cdb11eb6602',
};

export function mockSendResult<T>(result: T): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!result) {
        reject(new Error('Invalid result'));
      }
      resolve(result);
    }, 1000);
  });
}
