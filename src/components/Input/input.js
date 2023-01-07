import styles from './index.module.sass';

const input = () => {
  return (
    `<input
      class=${styles.input}
      type="{{type}}"
      placeholder="{{placeholder}}"
      value="{{value}}"
    >`
  );
};

export default input;