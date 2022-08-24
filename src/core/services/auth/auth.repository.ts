import { ISignUp, ISignIn, ISignInResponse } from '../models';
import { Endpoints } from '../../constants';

export class AuthRepository {
  // SignUp
  public async signUp(data: ISignUp): Promise<ISignUp | null> {
    try {
      const res = await fetch(`${Endpoints.AppHost}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return await (<Promise<ISignUp>>res.json());
    } catch {
      return null;
    }
  }

  // SignIn
  public async signIn(data: ISignIn): Promise<ISignInResponse | null> {
    try {
      const res = await fetch(`${Endpoints.AppHost}/signin`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return await (<Promise<ISignInResponse>>res.json());
    } catch {
      return null;
    }
  }
}
