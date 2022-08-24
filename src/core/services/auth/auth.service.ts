import { AuthRepository } from './auth.repository';
import { ISignUp, ISignIn } from '../models';

export class AuthService {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  // SignUp
  public signUp(data: ISignUp) {
    return this.authRepository.signUp(data);
  }

  // SignIn
  public signIn(data: ISignIn) {
    return this.authRepository.signIn(data);
  }
}
