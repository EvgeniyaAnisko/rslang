import AuthRepository from './auth.repository';
import { ISignUp } from '../models/ISignUp';
import { ISignIn } from '../models/ISignIn';

export default class AuthService {
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
