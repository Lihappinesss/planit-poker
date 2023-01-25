import Block from '../../modules/Block';

import Button from '../../components/Button';
import Input from '../../components/Input';

import avatar from '../../images/avatar.jpg';

import styles from './index.module.sass';

class Profile extends Block {
  constructor(props: Record<string, any> = {}) {
    const nameProfile = 'name';
    const email = new Input({
      type: 'email',
      placeholder: 'Почта',
      name: 'email',
      value: '',
    });

    const login = new Input({
      type: 'text',
      placeholder: 'Логин',
      name: 'login',
      value: '',
    });

    const name = new Input({
      type: 'text',
      placeholder: 'Имя',
      name: 'first_name',
      value: '',
    });

    const sername = new Input({
      type: 'text',
      placeholder: 'Фамилия',
      name: 'second_name',
      value: '',
    });

    const tel = new Input({
      type: 'tel',
      placeholder: 'Телефон',
      name: 'phone',
      value: '',
    });

    const pass = new Input({
      type: 'password',
      placeholder: 'Пароль',
      name: 'password',
      value: '',
    });

    const changeData = new Button({
      type: 'submit',
      text: 'Сохранить',
    });

    const exit = new Button({
      type: 'button',
      text: 'Выйти',
    });

    super('div', {
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
    });
  }

  render(): DocumentFragment {
    return (
      this.compile(
        `
          <form>
            <div class=${styles.wrapper}>
              <div class=${styles.profileImg}>
                <div class=${styles.name}>{{nameProfile}}</div>
                <div class=${styles.avatar}>
                  <img src={{avatar}} alt='avatar' class=${styles.img} />
                  <input type="file" class=${styles.upload} name='avatar' />
                </div>
              </div>

              <div class=${styles.columns}>
                <div class=${styles.left}>
                  <div>Почта</div>
                  <div>Имя</div>
                  <div>Фамилия</div>
                  <div>Телефон</div>
                  <div>Пароль</div>
                </div>
                <div>
                  <div>{{{email}}}</div>
                  <div>{{{name}}}</div>
                  <div>{{{sername}}}</div>
                  <div>{{{tel}}}</div>
                  <div>{{{pass}}}</div>
                </div>
              </div>

              <div class=${styles.btn}>
                <div class=${styles.change}>{{{changeData}}}</div>
                <div>{{{exit}}}</div>
              </div>
            </div>
          </form>
        `,
      )
    );
  }
}

export default Profile;
