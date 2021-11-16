import styles from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.kiri}>
        <h4 className={styles.logo}>audiophile</h4>
        <p className={styles.text}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <br/>
        <br/>
        <p className={styles.cr}>Copyright 2021. All Rights Reserved</p>
      </div>
      <div className={styles.kanan}>
        <ul className={styles.listNavbar}>
          <li className={styles.listNav}><a href='/'>HOME</a></li>
          <li className={styles.listNav}><a href='/headphones'>HEADPHONES</a></li>
          <li className={styles.listNav}><a href='/'>SPEAKERS</a></li>
          <li className={styles.listNav}><a href='/'>EARPHONES</a></li>
        </ul>
        <div className={styles.socmed}>
          <img className={styles.icon} src='https://pbs.twimg.com/media/FEU2pnNUYAYxPfu?format=png&name=orig' />
          <img className={styles.icon} src='https://pbs.twimg.com/media/FEU2pnKVgAgyI4B?format=png&name=orig'/>
          <img className={styles.icon} src='https://pbs.twimg.com/media/FEU2pnMVcAQUhle?format=png&name=orig'/>
        </div>
      </div>
    </div>
  );
};

export default Footer;