import styles from '../../styles/Banner.module.css'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.tulisan}>
        <h3 className={styles.title}>BRINGING YOU THE BEST AUDIO GEAR</h3>
        <p className={styles.text}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
      <img className={styles.img} src='https://pbs.twimg.com/media/FEUj1ZRVEAYh-a7?format=jpg&name=orig' />
    </div>
  );
};

export default Banner;