import Block from '../../modules/Block';

import { TInput } from './types';

import styles from './index.module.sass';

class Input extends Block {
  constructor(props: TInput) {
    const onBlur = (e: FocusEvent) => {
      console.log('blur', e);
      e.preventDefault();
    };

    const onClick = (e: MouseEvent) => {
      console.log('click', e);
      e.preventDefault();
    };

    const onChange = (e: Event) => {
      console.log('change', e);
      e.preventDefault();
    };

    super('div', {
      ...props,
      events: {
        click: onClick,
        blur: onBlur,
        change: onChange,
      },
    });
  }

  static getName() {
    return 'Input';
  }

  render(): DocumentFragment {
    return this.compile(
      `
        <div class=${styles.wrapper}>
          <input
            class=${styles.input}
            type="{{type}}"
            placeholder="{{placeholder}}"
            value="{{value}}"
            name="{{name}}"
          />
          <label for="{{name}}" class=${styles.label}>{{placeholder}}</label>
        </div>
      `,
      this.props,
    );
  }
}

export default Input;
