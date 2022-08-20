import { ISignUp } from '../models/ISignUp';
import { ISignIn } from '../models/ISignIn';
import Endpoints from '../../constants';
import { ISignInResponse } from '../models/ISignInResponse';

export default class AuthRepository {
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
