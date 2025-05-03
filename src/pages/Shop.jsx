import { dummy } from "../movieDummy";
import { Link } from "react-router-dom";
import { useFavorites } from "../contexts/FavoriteContext";

export default function Shop() {
  const { favorites, toggleFavorite } = useFavorites();

  const isLiked = (id) => favorites.some((item) => item.id === id);

  const styles = {
    container: {
      padding: "24px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "24px",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
    },
    card: {
      width: "200px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "12px",
      boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
      position: "relative",
    },
    image: {
      width: "100%",
      height: "auto",
      marginBottom: "8px",
    },
    name: {
      fontSize: "16px",
      fontWeight: "600",
      marginBottom: "4px",
    },
    price: {
      fontSize: "14px",
      color: "gray",
      marginBottom: "6px",
    },
    link: {
      fontSize: "13px",
      color: "#007bff",
      textDecoration: "none",
    },
    likeBtn: {
      position: "absolute",
      top: "315px",
      right: "10px",
      background: "none",
      border: "none",
      fontSize: "20px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>영화 목록</h2>
      <div style={styles.grid}>
        {dummy.results.map((movie) => (
          <div key={movie.id} style={styles.card}>
            <button
              style={styles.likeBtn}
              onClick={() => toggleFavorite(movie)}
              title={isLiked(movie.id) ? "찜 취소" : "찜하기"}
            >
              {isLiked(movie.id) ? "❤️" : "🤍"}
            </button>

            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              style={styles.image}
            />
            <h3 style={styles.name}>{movie.title}</h3>
            <p style={styles.price}>₩{movie.price.toLocaleString()}</p>
            <Link to={`/shop/${movie.id}`} style={styles.link}>
              상세보기
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
