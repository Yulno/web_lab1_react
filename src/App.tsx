import Header from "./components/header";
import ServiceCard from "./components/servicecard";
import styles from "./App.module.css";
import {Providers, Mobile} from "./components/infocard";
import Slider from "./components/slider";

function App() {
 
  return (
    <>
      <Header className = {styles.header_content}/>
      <ServiceCard className = {styles.margins}/>
      <Providers className = {styles.margins}/>
      <Mobile className = {styles.margins}/>
      <Slider className = {styles.margins}/>
    </>
  );
}

export default App
