import { Endpoints } from '../../constants';
import { IWord } from '../models';

function getResponse(response: Response, result?: Promise<Array<IWord>> | Promise<IWord>): Promise<any> {
  const isNotSuccess = !response.ok;

  if (isNotSuccess) {
    throw new Error();
  }

  return result || response.json();
}

export class WordsRepository {
  public async getWords(page: number, group: number): Promise<Array<IWord>> {
    return fetch(`${Endpoints.AppHost}/words?page=${page}&group=${group}`, { method: 'GET' }).then((res) =>
      getResponse(res)
    );
  }

  public async getWord(id: number): Promise<IWord> {
    return fetch(`${Endpoints.AppHost}/words/${id}`, { method: 'GET' }).then((res) => getResponse(res));
  }
}
