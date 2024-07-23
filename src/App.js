// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/css/style.css';
import '../src/css/font.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import Home from './pages/home';
import Category from './pages/category';
import Singleproduct from './pages/singleproduct'
import Checkout from './pages/checkout';
import Address from './pages/address';
import Payment from './pages/payment';
import Myaccount from './pages/myaccount';
import Orderhistory from './pages/orderhistory';
import Addaddress from './pages/addaddress';
import Credits from './pages/credits';
import Wishlist from './pages/wishlist';
import Settings from './pages/settings';
import Giftcards from './pages/giftcards';
import Mobilefooter from '../src/components/mobilefooter'
import Products from './pages/Products';


function App() {
  return (
    // <Router >
    <Router  basename="/orat">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="/singleproduct" element={<Singleproduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/orderhistory" element={<Orderhistory />} />
        <Route path="/addaddress" element={<Addaddress />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/giftcards" element={<Giftcards />} />
      </Routes>
      <Footer />
      <Mobilefooter/>
    </Router>

  );
}

export default App;
