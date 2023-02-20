import Block, { TProps } from '../../modules/Block';

import userController from '../../controllers/UserController';
import auth from '../../controllers/Auth';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Avatar from '../../components/Avatar';

import validateForm from '../../utils/validateForm';
import connect from '../../hoc/connect';

import template from './template';

class Profile extends Block {
  constructor(props: TProps) {
    const { user } = props;

    const nameProfile = user.first_name;

    const email = new Input({
      type: 'email',
      placeholder: 'Почта',
      name: 'email',
      value: user.email,
      onInput: (value) => console.log(value),
      onValidate:
        (
          element: HTMLInputElement | null,
        ) => validateForm(element.value, element.name, element),
    });

    const login = new Input({
      type: 'text',
      placeholder: 'Логин',
      name: 'login',
      value: user.login,
      onInput: (value) => console.log(value),
      onValidate:
        (
          element: HTMLInputElement | null,
        ) => validateForm(element.value, element.name, element),
    });

    const name = new Input({
      type: 'text',
      placeholder: 'Имя',
      name: 'first_name',
      value: user.first_name,
      onInput: (value) => console.log(value),
      onValidate:
        (
          element: HTMLInputElement | null,
        ) => validateForm(element.value, element.name, element),
    });

    const sername = new Input({
      type: 'text',
      placeholder: 'Фамилия',
      name: 'second_name',
      value: user.second_name,
      onInput: (value) => console.log(value),
      onValidate:
        (
          element: HTMLInputElement | null,
        ) => validateForm(element.value, element.name, element),
    });

    const tel = new Input({
      type: 'tel',
      placeholder: 'Телефон',
      name: 'phone',
      value: user.phone,
      onInput: (value) => console.log(value),
      onValidate:
        (
          element: HTMLInputElement | null,
        ) => validateForm(element.value, element.name, element),
    });

    const pass = new Input({
      type: 'password',
      placeholder: 'Пароль',
      name: 'password',
      onInput: (value) => console.log(value),
      onValidate:
        (
          element: HTMLInputElement | null,
        ) => validateForm(element.value, element.name, element),
    });

    const displayName = new Input({
      type: 'text',
      placeholder: 'Имя в чате',
      name: 'display_name',
      value: user.display_name,
      onInput: (value) => console.log(value),
      onValidate:
        (
          element: HTMLInputElement | null,
        ) => validateForm(element.value, element.name, element),
    });

    const avatar = new Avatar({
      ...props,
      onInput: (file) => {
        const formData = new FormData();
        formData.append('avatar', file);
        userController.updateAvatar(formData);
      },
    });

    const changeData = new Button({
      attr: {
        type: 'submit',
      },
      text: 'Сохранить',
      onClick: () => {
        console.log(props);
      },
    });

    const exit = new Button({
      attr: {
        type: 'button',
      },
      text: 'Выйти',
      onClick: () => {
        auth.logout();
      },
    });

    super('form', {
      ...props,
      changeData,
      login,
      pass,
      email,
      name,
      sername,
      tel,
      avatar,
      nameProfile,
      exit,
      displayName,
      events: {
        submit: (event) => {
          event.preventDefault();
        },
      },
    });
  }

  getStateFromProps(props) {
    this.state = {
      ...props,
    };
  }

  render(): DocumentFragment {
    return (
      this.compile(template)
    );
  }
}

const withChats = connect((state) => {
  return {
    user: state.user,
  };
});

const ProfilePage = withChats(Profile);
export default ProfilePage;
