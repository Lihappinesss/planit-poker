// import clip from '../../images/clip.svg';
// import arrow from '../../images/rightArrow.svg';
import more from '../../images/more.svg';

import styles from './index.module.sass';

const template = () => {
  return `
    <div class=${styles.sidebar}>
      <input
        type='search'
        placeholder='Поиск'
        class=${styles.inputSearch}
      />
      <div class=${styles.chats}>
      {{#each chats}}
        {{{chatsCard}}}
      {{/each}}
      </div>
    </div>
    <div class=${styles.chat}>
      <div class=${styles.shapka}>
        <div class=${styles.companion}>
          <img src='' class=${styles.avatarComp} />
          <div class=${styles.nameComp}>{{companion}}</div>
        </div>
        <button class=${styles.moreBtn}>
          <img src=${more} alt="more" />
        </button>
      </div>
      <div class=${styles.history}>
      {{#each messages}}
        <div class=${styles.message}>
          <div class=${styles.messageTime}>{{getDate time}}</div>
          {{text}}
        </div>
      {{/each}}
      </div>
      <div class=${styles.send}>
        <div class=${styles.field}>
          {{{inputField}}}
        </div>
        {{{sendBtn}}}
      </div>
    </div>
    `;
};

export default template;
