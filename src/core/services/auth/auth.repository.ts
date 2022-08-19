import { ISignUp } from '../models/ISignUp';
import { ISignIn } from '../models/ISignIn';
import Endpoints from '../../constants';
import { ISignInResponse } from '../models/ISignInResponse';

export default class AuthRepository {
  // SignUp
  public signUp(data: ISignUp) {
    return fetch(`${Endpoints.AppHost}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }

  // SignIn
  public signIn(data: ISignIn): Promise<ISignInResponse> {
    return fetch(`${Endpoints.AppHost}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json() as Promise<ISignInResponse>);
  }
}
