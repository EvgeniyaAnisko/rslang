import { UserRepository } from './user.repository';
import { ISignIn } from '../models';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  // Edit user
  public editUser(data: ISignIn) {
    return this.userRepository.editUser(data);
  }

  // Get user by id
  public getUser() {
    return this.userRepository.getUser();
  }
}
