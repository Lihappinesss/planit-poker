import ChatAPI from '../modules/Api/ChatApi';
// import router from '../modules/Router';
import store from '../store';
import { getChats, addChat } from '../store/actions';

class ChatController {
  private api: ChatAPI;

  constructor() {
    this.api = new ChatAPI();
  }

  async create(data) {
    try {
      await this.api.create(data)
        .then((chat) => {
          store.dispatch(addChat(chat.id));
          console.log('чат создан');
        });
    } catch (e) {
      console.log(e);
    }
  }

  async request() {
    try {
      await this.api.request()
        .then((chats) => {
          store.dispatch(getChats(chats));
        });
    } catch (e) {
      console.log(e);
    }
    // .catch(this.handleError);
    // try {
    //   return await this.api.request()
    //     .then((chats) => {
    //       store.dispatch(getChats(chats));
    //       return chats;
    //     });
    // } catch (e) {
    //   console.log(e);
    //   // router.go('/sign-in');
    // }
  }

  async removeChat() {
    // return this.api.removeChat(store.state.chatId)
    //   .then(() => {
    //     this.request();
    //   });
  }

  async addUserChat(data) {
    try {
      await this.api.addUserChat(data)
        .then(() => {
          console.log('Пользователи добавлены', 'success');
        });
    } catch (e) {
      console.log(e);
    }
  }

  async deleteUserChat(data) {
    try {
      await this.api.deleteUserChat(data)
        .then(() => {
          console.log('Пользователи удалены', 'success');
        });
    } catch (e) {
      console.log(e);
    }
  }

  async requestMessageToken(chatId: number) {
    try {
      await this.api.requestMessageToken(chatId);
      // .then((auth) => {
      //   store.dispatch({ token });
      // });
    } catch (e) {
      console.log(e);
    }
  }

  async requestChatUsers(chatId: number) {
    try {
      await this.api.requestChatUsers(chatId)
        .then((users) => {
          return users;
        });
    } catch (e) {
      console.log(e);
    }
  }

  handleError() {
    console.log('оши');
  }
}

export default new ChatController();
