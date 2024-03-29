import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import { CartProvider } from './storage/cartContext';
import ProductsPage from './pages/ProductsPage';
import CartContainer from './components/CartContainer/CartContainer';
import ItemListWithFilter from './pages/ProductsPage';
import HeaderSlider from './components/HeaderSlider/HeaderSlider';
import Footer from './components/Footer/Footer';
import { exportArray } from './services/firebase';
import PurchaseCompleted from './components/PurchaseCompleted/PurchaseCompleted';
import NavNavigation from './components/NavBar/NavNavigation';
import FilteredItemList from './components/FilteredItemList/FilteredItemList';
import FilteredProductsPage from './pages/FilteredProductsPage';
import ScrollToTop from './components/ScrollToTop';
import MapContainer from './components/StoresList/MapContainer';
import MpPurchase from './components/CartContainer/MpPurchase';
import { UserDataProvider } from './storage/userDataContext';

function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <UserDataProvider>
        <ScrollToTop/>
        <HeaderSlider/>
        <NavNavigation/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='details/:productid' element={<ItemDetailContainer/>}/>
          <Route path='category/:categoryid' element={<ProductsPage/>}/>
          <Route path=':genero/:generocategory' element={<FilteredProductsPage/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='/sucursales' element={<MapContainer/>}/>
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='/productos' element={<ItemListWithFilter/>}/>
          <Route path='/purchase' element={<MpPurchase></MpPurchase>}/>
          <Route path='/completed-purchase/:orderid' element={<PurchaseCompleted/>}/>
      </Routes>
      <Footer/>
      </UserDataProvider>
    </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
