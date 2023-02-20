import BaseAPI from './BaseApi';

class UserApi extends BaseAPI {
  constructor() {
    super('/user');
  }

  public search(data) {
    return this.post('/search', {
      data,
    });
  }

  public updateProfile(data) {
    return this.put('/profile', {
      data,
    });
  }

  public updateAvatar(data) {
    return this.put('/profile/avatar', {
      headers: {},
      data,
    });
  }
}

export default UserApi;
