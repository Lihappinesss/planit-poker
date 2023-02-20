import Block from '../../modules/Block';

import chatController from '../../controllers/ChatController';

import connect from '../../hoc/connect';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Chats from '../../components/Chats';

import validateForm from '../../utils/validateForm';

import template from './template';
import styles from './index.module.sass';

class Chat extends Block {
  constructor(props: Record<string, any> = {}) {
    let chatName = '';

    const inputField = new Input({
      type: 'text',
      placeholder: 'Сообщение',
      name: 'message',
      onInput: (value) => console.log(value),
      onValidate:
        (
          element: HTMLInputElement | null,
        ) => validateForm(element.value, element.name, element),
    });

    const sendBtn = new Button({
      text: 'Отправить',
      attr: {
        type: 'button',
      },
      onClick: () => {
      },
    });

    const inputNewChat = new Input({
      type: 'text',
      placeholder: 'Название чата',
      name: 'chatName',
      onInput: (value) => { chatName = value; },
    });

    const createChat = new Button({
      text: 'Создать чат',
      attr: {
        type: 'button',
      },
      onClick: () => {
        chatController.create({
          title: chatName,
        });
      },
    });

    const chatsCard = new Chats({
      ...props,
    });

    super('div', {
      ...props,
      className: styles.wrapper,
      createChat,
      inputNewChat,
      inputField,
      sendBtn,
      chatsCard,
    });
  }

  requestMessages() {
  }

  handleChats() {
    return this.props.chats;
  }

  requestChat(chatId: number) {
    if (!chatId) {
      return;
    }
    chatController.requestMessageToken(chatId);
    // .then(({ token }) => {
    //   console.log(token);
    //   this.requestMessages(token);
    // });
  }

  requestChatList() {
    chatController.request()
      .then(() => {
        // this.requestChat(store.state.chatId);
      });
  }

  componentDidMount() {
    this.requestChatList();
  }

  render(): DocumentFragment {
    return (
      this.compile(template())
    );
  }
}

const withChats = connect((state) => {
  return {
    chats: [...state.chats],
    messages: [...(state.messages || [])],
  };
});

const ChatPage = withChats(Chat);
export default ChatPage;
