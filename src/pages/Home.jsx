import Banner from "../components/Banner";
import Logements from "../components/Logements";
import Main from "../components/Main";

import bannerHome from "../assets/banner-home.png";
import "../styles/index.css";

function App() {
  return (
    <div>
      <Banner banner={bannerHome} text="Chez vous, partout et ailleurs" />
      <Main>
        <Logements />
      </Main>
    </div>
  );
}

export default App;
