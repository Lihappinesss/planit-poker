import Block from '../../modules/Block';

import Button from '../../components/Button';
import Input from '../../components/Input';

import styles from './index.module.sass';

class Signin extends Block {
  constructor(props: Record<string, any> = {}) {
    const login = new Input({
      type: 'text',
      placeholder: 'Логин',
      name: 'login',
    });

    const pass = new Input({
      type: 'password',
      placeholder: 'Пароль',
      name: 'password',
    });

    const button = new Button({
      type: 'submit',
      text: 'Авторизоваться',
    });

    super('div', {
      ...props,
      button,
      login,
      pass,
    });
  }

  // componentDidUpdate(oldProps, newProps) {
  //   // Заменяем пропсы
  //   this.children.button.setProps(newProps.button.props);

  //   // Заменяем весь компонент
  //   this.children.button = newProps.image;

  //   return true;
  // }

  static getName() {
    return 'SignIn';
  }

  render(): DocumentFragment {
    const template = `
      <div class='wrapper'>
        <h1 class='title'>Вход</h1>
        <form class='form'>
          <div class='input'>
            {{{login}}}
          </div>
          <div>
            {{{pass}}}
          </div>
          <div class=${styles.btn}>
            {{{button}}}
          </div>
          <a href='/signup' class='link'>Нет аккаунта?</a>
        </form>
      </div>
    `;
    return this.compile(template);
  }
}

export default Signin;
