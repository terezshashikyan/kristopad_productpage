import Header from "./components/Header";
import Footer from './components/Footer';
import ProductPage from "./pages/ProductPage";

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
