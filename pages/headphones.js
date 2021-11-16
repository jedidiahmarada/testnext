import styles from '../styles/Headphones.module.css'
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Galeri from "./components/Galeri";

const Headphones = () => {
  return (
    <div className={styles.Headphones}>
      <Header/>
      <div className={styles.isi}>
        <h1 className={styles.banner}>HEADPHONES</h1>
        <div className={styles.atas}>
          <img className={styles.imgXX99} src='https://pbs.twimg.com/media/FEU7-peaAAMwUTv?format=jpg&name=orig'/>
          <div className={styles.kanan}>
            <h5 className={styles.new}>NEW PRODUCT</h5>
            <h1 className={styles.title}>XX99 MARK II HEADPHONES</h1>
            <p className={styles.desc}>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines
              your premium headphone experience by reproducing the balanced depth and precision of studio-quality
              sound.</p>
            <a className={styles.allPhotos}>ALL PHOTOS</a>
          </div>
        </div>
        <div className={styles.galeri}>
          <Galeri />
        </div>
      </div>
      <Banner/>
      <Footer/>
    </div>
  );
};

export default Headphones;