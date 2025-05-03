import { useParams } from "react-router-dom";
import { dummy } from "../movieDummy";
import { useCart } from "../contexts/CartContext";
import "./ProductDetail.css"; // CSS import

export default function ProductDetail() {
  const { id } = useParams();
  const movie = dummy.results.find((item) => item.id === parseInt(id));
  const { dispatch } = useCart();

  const handleAdd = () => {
    dispatch({ type: "ADD_ITEM", item: movie });
  };

  if (!movie)
    return <div className="product-container">영화를 찾을 수 없습니다.</div>;

  return (
    <div className="product-container">
      <div className="product-card">
        <img
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt={movie.title}
          className="product-image"
        />
        <div className="product-info">
          <h1 className="product-title">{movie.title}</h1>
          <p className="product-overview">{movie.overview}</p>
          <p className="product-price">₩ {movie.price.toLocaleString()}</p>
          <button className="add-to-cart" onClick={handleAdd}>
            🛒 장바구니 담기
          </button>
        </div>
      </div>
    </div>
  );
}
