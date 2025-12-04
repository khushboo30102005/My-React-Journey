import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <h3>KHUSHBOO</h3>
      <button className={styles.btn}>Login</button>
    </div>
  );
};
