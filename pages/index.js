import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function Homepage(props) {
  return (
    <div>
      {/*<h1>The Home Page</h1>*/}
      <Header/>
      <Banner />
      <br />
      <Footer />
    </div>
  );
}

export default Homepage;