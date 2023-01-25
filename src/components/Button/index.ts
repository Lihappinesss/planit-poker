import Block from '../../modules/Block';

import { Ibutton } from './types';

import styles from './index.module.sass';

class Button extends Block {
  constructor(props: Ibutton) {
    const onBlur = () => {
      console.log('blur');
    };

    const onClick = (e: MouseEvent) => {
      e.preventDefault();
    };

    super('div', {
      ...props,
      events: {
        click: onClick,
        blur: onBlur,
      },
    });
  }

  static getName() {
    return 'Button';
  }

  render(): DocumentFragment {
    return this.compile(
      `<button type="{{type}}" class=${styles.btn}>{{text}}</button>`,
      this.props,
    );
  }
}

export default Button;
