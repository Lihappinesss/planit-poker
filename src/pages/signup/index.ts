import Block from '../../modules/Block';

import Button from '../../components/Button';
import Input from '../../components/Input';

import template from './template';

class SignUp extends Block {
  constructor(props: Record<string, any> = {}) {
    const email = new Input({
      type: 'email',
      placeholder: 'Почта',
      name: 'email',
    });

    const login = new Input({
      type: 'text',
      placeholder: 'Логин',
      name: 'login',
    });

    const name = new Input({
      type: 'text',
      placeholder: 'Имя',
      name: 'first_name',
    });

    const sername = new Input({
      type: 'text',
      placeholder: 'Фамилия',
      name: 'second_name',
    });

    const tel = new Input({
      type: 'tel',
      placeholder: 'Телефон',
      name: 'phone',
    });

    const pass = new Input({
      type: 'password',
      placeholder: 'Пароль',
      name: 'password',
    });

    const button = new Button({
      type: 'submit',
      text: 'Зарегистрироваться',
    });

    // const handleSubmit = () => {

    // };

    super('div', {
      ...props,
      button,
      login,
      pass,
      email,
      name,
      sername,
      tel,

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
    return this.compile(template);
  }
}

export default SignUp;
