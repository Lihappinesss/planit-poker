import styles from './index.module.sass';


const signup = () => {
  return (
    `
      <div class=${styles.wrapper}>
        <div class=${styles.title}>Регистрация</div>
        <form class=${styles.form}>
          <div class=${styles.input}>
            {{{email}}}
          </div>
          <div class=${styles.input}>
            {{{login}}}
          </div>
          <div class=${styles.input}>
            {{{name}}}
          </div>
          <div class=${styles.input}>
            {{{sername}}}
          </div>
          <div class=${styles.input}>
            {{{tel}}}
          </div>
          <div class=${styles.input}>
            {{{pass}}}
          </div>
          <div class=${styles.btn}>
          {{{button}}}
          </div>
          <a href='/signin' class=${styles.link}>Войти</a>
        </form>
      </div>
    `
  );
}

export default signup;
