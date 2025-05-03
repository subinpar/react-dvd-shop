import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import QueryStringTest from "./pages/QueryStringTest";
import Tv from "./pages/Tv";
import Search from "./pages/Search";

import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import CheckoutSuccess from "./pages/CheckoutSuccess";

import { CartProvider } from "./contexts/CartContext";
import { FavoriteProvider } from "./contexts/FavoriteContext"; // ✅ 찜 기능 추가

function App() {
  return (
    <div className="root-wrap relative min-h-screen">
      <BrowserRouter>
        <CartProvider>
          <FavoriteProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie" element={<Movies />} />
              <Route path="/movie/:title" element={<MovieDetail />} />
              <Route path="/test" element={<QueryStringTest />} />
              <Route path="/tv" element={<Tv />} />
              <Route path="/person" element={<Celebrity />} />
              <Route path="/search" element={<Search />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout-success" element={<CheckoutSuccess />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </FavoriteProvider>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
