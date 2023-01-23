import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';
import { CartContextProvider } from './Components/Context/CartContext';
import { Cart } from './Components/Cart/Cart';
import ItemCount from './Components/ItemCount/ItemCount';
import Contacts from './Components/Contacts/Contacts';
function App() {
  return (
    <HashRouter>
    <CartContextProvider>
       <div className="App">
      <NavBar></NavBar>
      <Routes>
      <Route path='/' element={<ItemListContainer/>}></Route>
      <Route path='/categories/:nameCategorie' element={<ItemListContainer/>}></Route>
      <Route path='/detalle/:id' element={<ItemDetailContainer/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/count' element={<ItemCount/>}></Route>
      <Route path='/contacts' element={<Contacts/>}></Route>
      </Routes>
    </div>
    </CartContextProvider>
    
    </HashRouter>
   
  );
}

export default App;
