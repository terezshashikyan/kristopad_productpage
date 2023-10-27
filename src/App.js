import Header from "./Components/Header";
import Footer from './Components/Footer';
import ProductPage from "./Pages/ProductPage";

import './App.scss';

const App = () => {
  return (
    <div className="App">
       <Header/>
       <ProductPage/>
       <Footer/>  
    </div>
  );
}

export default App;
