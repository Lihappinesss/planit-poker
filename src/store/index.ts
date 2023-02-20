import EventBus from '../modules/EventBus';
import reducers from './reducers';

export interface Action {
  type: string;
  payload?: any;
}

export const defaultState = {
  isLoading: false,
  loginFormError: '',
  signupFormError: '',
  addUserError: '',
  deleteUserError: '',
  user: null,
  searchResult: [],
  chatUsers: [],
  appIsInited: false,
  chats: [],
  messages: [],
  socket: null,
  chatId: null,
  screen: null,
};

export type Indexed = {[key: string]: any};

class Store extends EventBus {
  private state: Indexed = {};

  static _instance: any;

  reducer: any;

  constructor(defaultParams) {
    if (Store._instance) {
      return Store._instance;
    }

    super();

    this.state = defaultParams;
  }

  public getState() {
    return this.state;
  }

  public dispatch(action) {
    this.state = reducers(this.state, action);

    this.emit('changed', this.getState());
  }
}

const store = new Store(defaultState);

export default store;
