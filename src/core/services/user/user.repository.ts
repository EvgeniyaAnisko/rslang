import { ISignIn, ISignUp } from '../models';
import { Endpoints } from '../../constants';

export class UserRepository {
  // Get user by id
  public async getUser(): Promise<ISignUp | null> {
    try {
      const id = <string>localStorage.getItem('userId');
      const token = <string>localStorage.getItem('token');
      const res = await fetch(`${Endpoints.AppHost}/users/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return await (<Promise<ISignUp>>res.json());
    } catch {
      return null;
    }
  }

  // Edit
  public async editUser(data: ISignIn): Promise<ISignUp | null> {
    try {
      const id = <string>localStorage.getItem('userId');
      const token = <string>localStorage.getItem('token');
      const res = await fetch(`${Endpoints.AppHost}/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      return await (<Promise<ISignUp>>res.json());
    } catch {
      return null;
    }
  }
}
