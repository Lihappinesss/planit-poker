import UserApi from '../modules/Api/UserApi';

import store from '../store';
import { setUser } from '../store/actions';

class UserController {
  private api: UserApi;

  constructor() {
    this.api = new UserApi();
  }

  async search(data) {
    try {
      await this.api.search(data)
        .then((users) => {
          return users;
        });
    } catch (e) {
      console.log(e);
    }
  }

  async updateProfile(data) {
    try {
      await this.api.updateProfile(data)
        .then((user) => {
          store.dispatch(setUser(user));
          return user;
        });
    } catch (e) {
      console.log(e);
    }
  }

  async updateAvatar(data) {
    try {
      await this.api.updateAvatar(data)
        .then((res) => {
          store.dispatch(setUser(res));
          return res;
        });
    } catch (e) {
      console.log(e);
    }
  }
}

export default new UserController();
