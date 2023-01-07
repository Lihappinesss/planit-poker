import styles from './index.module.sass';


const signin = () => {
  return (
    `
    <div class=${styles.wrapper}>
      <div class=${styles.title}>Вход</div>
      <form class=${styles.form}>
        <div class=${styles.input}>
          {{{login}}}
        </div>
        <div>
          {{{pass}}}
        </div>
        <div class=${styles.btn}>
        {{{button}}}
        </div>
        <a href='/signup' class=${styles.link}>Нет аккаунта?</a>
      </form>
    </div>
    `
  );
}

export default signin;
