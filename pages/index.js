import Header from "./components/Header";
import Banner from "./components/Banner";

function Homepage(props) {
  return (
    <div>
      {/*<h1>The Home Page</h1>*/}
      <Header/>
      <Banner />
    </div>
  );
}

export default Homepage;