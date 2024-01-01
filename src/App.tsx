import Header from "./components/header";
import ServiceCard from "./components/servicecard";
import styles from "./App.module.css";
import {Providers, Mobile} from "./components/infocard";
import './App.module.css'

function App() {
 
  return (
    <>
      <Header/>
      <ServiceCard className = {styles.margins}/>
      <Providers className = {styles.margins}/>
      <Mobile className = {styles.margins}/>
    </>
  );
}

export default App
