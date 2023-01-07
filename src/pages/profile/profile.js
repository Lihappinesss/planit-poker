import styles from './index.module.sass';


const profile = () => {
  return (
    `
    <form>
      <table class=${styles.table}>
        <tbody>
          <tr class=${styles.profileImg}>
            <td>
              <div class=${styles.name}>{{nameProfile}}</div>
            </td>
            <td>
              <div class=${styles.avatar}>
                <img src={{avatar}} alt='avatar' class=${styles.img}>
                <input type="file" class=${styles.upload} />
              </div>
            </td>
          </tr>
          
            <tr>
              <td><span>Почта</span></td>
              <td><span>{{{email}}}</span></td>
            </tr>
            <tr>
              <td><span>Имя</span></td>
              <td><span>{{{name}}}</span></td>
            </tr>
            <tr>
              <td><span>Фамилия</span></td>
              <td><span>{{{sername}}}</span></td>
            </tr>
            <tr>
              <td><span>Телефон</span></td>
              <td><span>{{{tel}}}</span></td>
            </tr>
            <tr>
              <td><span>Пароль</span></td>
              <td><span>{{{pass}}}</span></td>
            </tr>
            <tr>
              <td />
              <td>
                <div>{{{changeData}}}</div>
              </td>
            </tr>
            <tr>
              <td />
              <td>
                {{{exit}}}
              </td>
            </tr>
        </tbody>
      </table>
    </form>
    `
  );
}

export default profile;

