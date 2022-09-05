import { Endpoints } from '../../constants';
import { IStatistics } from '../models/IStatistics';

export class StatisticRepository {
  // Get
  public async get(): Promise<IStatistics | null> {
    try {
      const token = <string>localStorage.getItem('token');
      const id = <string>localStorage.getItem('userId');
      const res = await fetch(`${Endpoints.AppHost}/users/${id}/statistics`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return await (<Promise<IStatistics>>res.json());
    } catch {
      return null;
    }
  }

  // Put
  public async put(data: IStatistics): Promise<IStatistics | null> {
    try {
      const token = <string>localStorage.getItem('token');
      const id = <string>localStorage.getItem('userId');
      const res = await fetch(`${Endpoints.AppHost}/users/${id}/statistics`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      return await (<Promise<IStatistics>>res.json());
    } catch {
      return null;
    }
  }
}
