import Block from '../../modules/Block';

import styles from './index.module.sass';

class Chats extends Block {
  constructor(props) {
    super('div', {
      ...props,
    });
  }

  render(): DocumentFragment {
    return this.compile(
      `
        <div class=${styles.contact}>
          <div class=${styles.avatar}></div>
          <div class=${styles.userInfo}>
            <div class=${styles.name}>{{title}}</div>
            <div class=${styles.lastMessage}>{{last_message}}</div>
          </div>
          <div class=${styles.messageInfo}>
            <div class=${styles.unread}>{{unread_count}}</div>
          </div>
        </div>
      `,
    );
  }
}

export default Chats;
