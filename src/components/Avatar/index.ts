import Block from '../../modules/Block';

import Input from '../Input';

import styles from './index.module.sass';

class Avatar extends Block {
  constructor(props) {
    const input = new Input({
      type: 'file',
      name: 'avatar',
      placeholder: '',
      onInput: (_, e) => {
        const { files }: { files: FileList | null } = e.target as HTMLInputElement;
        if (!files?.length) {
          return;
        }
        const [file] = files;
        this.props.onInput(file);
      },
    });
    super('form', {
      ...props,
      input,
    });
  }

  getStateFromProps(props) {
    this.state = {
      ...props,
    };
  }

  render() {
    const {
      user: {
        avatar,
      },
    } = this.state;

    const path = `https://ya-praktikum.tech/api/v2/resources/${avatar}`;

    return this.compile(`
      <div class=${styles.avatar}>
        <img src=${path} class=${styles.img} />
        <label for='avatar' class=${styles.upload} >
          {{{input}}}
        </label>
      </div>
  `);
  }
}

export default Avatar;
