import BaseAPI from './BaseApi';

export default class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  public create(data) {
    return this.post('/', {
      data: JSON.stringify(data),
    });
  }

  public request() {
    return this.get('/', {});
  }

  public removeChat(chatId: number) {
    return this.delete('/', {
      data: chatId,
    });
  }

  public addUserChat(data) {
    return this.put('/users', {
      data,
    });
  }

  public deleteUserChat(data) {
    return this.delete('/users', {
      data,
    });
  }

  public requestMessageToken(chatId: number) {
    return this.post(`/token/${chatId}`, {});
  }

  public requestChatUsers(chatId: number) {
    return this.get(`/${chatId}/users`, {});
  }
}
