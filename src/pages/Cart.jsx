import { useCart } from "../contexts/CartContext";
import { useFavorites } from "../contexts/FavoriteContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const { cart, dispatch } = useCart();
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const increaseQty = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", id });
  };

  const decreaseQty = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", id });
  };

  return (
    <div className="cart-container">
      {/* 🛒 장바구니 영역 */}
      <div className="section-box">
        <h2 className="cart-title">🛒 장바구니</h2>
        {cart.length === 0 ? (
          <p className="cart-empty">장바구니가 비었습니다.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <h3 className="item-title">{item.title}</h3>
                <p>가격: ₩{item.price.toLocaleString()}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <p>합계: ₩{(item.price * item.quantity).toLocaleString()}</p>
                <button
                  className="remove-btn"
                  onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}
                >
                  삭제
                </button>
              </div>
            ))}
            <p className="cart-total">총 합계: ₩{total.toLocaleString()}</p>
            <button
              className="checkout-btn"
              onClick={() => {
                dispatch({ type: "CLEAR_CART" });
                navigate("/checkout-success");
              }}
            >
              결제하기
            </button>
          </>
        )}
      </div>

      {favorites.length > 0 && (
        <div className="section-box">
          <h3 className="favorites-title">찜한 상품</h3>
          <div className="favorites-list">
            {favorites.map((item) => (
              <div key={item.id} className="favorite-card">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.title}
                  className="favorite-image"
                />
                <div className="favorite-info">
                  <h4>{item.title}</h4>
                  <p>₩{item.price.toLocaleString()}</p>
                  <button
                    onClick={() => dispatch({ type: "ADD_ITEM", item })}
                    className="favorite-add-btn"
                  >
                    장바구니 담기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
