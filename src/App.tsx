import Header from "./components/header";
import ServiceCard from "./components/servicecard";
import styles from "./App.module.css";
import './App.module.css'

function App() {
 
  return (
    <>
      <Header/>
      <ServiceCard className = {styles.margins}/>
    </>
  );
}

export default App
