import './App.css';
import ProductPage from "./Pages/ProductPage";
import Header from "./Components/Header";
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
       <ProductPage/>
      {/* <Footer/>  */}
    </div>
  );
}

export default App;
