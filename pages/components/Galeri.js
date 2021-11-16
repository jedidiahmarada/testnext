import styles from '../../styles/galeri.module.css'
// export default function Users(props) {
//   const {data} = props;
//
//   console.log(data)
//
//   return (
//     <>
//       {data.map(foto => {
//         return (
//           <>
//           </>
//         )
//       })}
//     </>
//   )
// }


// export async function getStaticProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/photos')
//   const data = await res.json()
//
//   return {
//     props: {
//       data
//     }
//   }
// }



export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await res.json();

  return {
    props: { fotofoto: {data} }
  }
}

const Galeri = ({ fotofoto }) => {
  return (
    <div className={styles.galeri}>
      {fotofoto.map(foto => (
        <div key={foto.id}>
          <img src={foto.url}/>
        </div>
      ))}
    </div>
  );
};

export default Galeri;