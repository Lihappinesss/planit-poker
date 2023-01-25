import Block from '../../modules/Block';

import { TError } from './types';

import styles from './index.module.sass';

class Error extends Block {
  constructor(props: TError) {
    super('div', {
      ...props,
    });
  }

  static getName() {
    return 'Error';
  }

  render(): DocumentFragment {
    return this.compile(
      `
        <div class=${styles.wrapper}>
          <div class=${styles.error}>{{err}}</div>
          <div class=${styles.text}>{{text}}</div>
          <a class=${styles.link} href='/chat'>Назад к чатам</a>
        </div>
      `,
      this.props,
    );
  }
}

export default Error;
