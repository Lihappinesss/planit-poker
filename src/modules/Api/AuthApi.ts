import BaseAPI from './BaseApi';

export interface SigninData{
  email: string;
  password: string;
}

export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string,
  phone: string;
}

export interface signInData {
  email: string,
  password: string
}

class AuthApi extends BaseAPI {
  constructor() {
    super('/auth');
  }

  public signIn(user: SigninData) {
    return this.post('/signin', {
      data: JSON.stringify(user),
    });
  }

  public signUp(user: SignupData) {
    return this.post('/signup', {
      data: JSON.stringify(user),
    });
  }

  public checkAuth() {
    return this.get('/user');
  }

  public signOut() {
    return this.post('/logout');
  }
}

export default AuthApi;
