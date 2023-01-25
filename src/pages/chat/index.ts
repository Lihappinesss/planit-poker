import Block from '../../modules/Block';

import Input from '../../components/Input';

import data from '../../data/chats.json';
import messages from '../../data/messages.json';

import template from './template';

class Chat extends Block {
  constructor(props: Record<string, any> = {}) {
    const inputField = new Input({
      type: 'text',
      placeholder: 'Сообщение',
      name: 'message',
    });

    super('div', {
      ...props,
      chat: {
        users: data,
        messages,
        companion: 'Павел',
        inputField,
      },
    });
  }

  render(): DocumentFragment {
    return (
      this.compile(template)
    );
  }
}

export default Chat;
