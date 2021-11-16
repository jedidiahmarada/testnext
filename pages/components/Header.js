import styles from '../../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.Header}>
      <h2 className={styles.logo}>audiophile</h2>
      <div className={styles.navbar}>
        <ul className={styles.listNavbar}>
          <li className={styles.listNav}>HOME</li>
          <li className={styles.listNav}>HEADPHONES</li>
          <li className={styles.listNav}>SPEAKERS</li>
          <li className={styles.listNav}>EARPHONES</li>
        </ul>
      </div>
      <img className={styles.img} src='https://pbs.twimg.com/media/FEUZ1UCVIAcq2OP?format=png&name=orig'/>
    </div>
  );
};

export default Header;