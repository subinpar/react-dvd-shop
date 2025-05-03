import React from "react";
import { useNavigate } from "react-router-dom";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie(props) {
  const navigate = useNavigate();

  const onClickMovieItem = () => {
    navigate(`/movie/${props.title}`, {
      state: props,
    });
  };

  return (
    <div
      className="movie-container"
      onClick={onClickMovieItem}
      style={{
        width: "200px",
        cursor: "pointer",
        margin: "10px",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={IMG_BASE_URL + props.poster_path}
        alt="영화포스터"
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      <div className="movie-info" style={{ padding: "10px", color: "#333" }}>
        <h4 style={{ marginBottom: "6px", fontSize: "16px" }}>{props.title}</h4>
        <span style={{ fontSize: "14px", color: "#888" }}>
          ⭐ {props.vote_average}
        </span>

        {props.overview && (
          <p
            style={{
              marginTop: "8px",
              fontSize: "12px",
              color: "#666",
              height: "40px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {props.overview}
          </p>
        )}
      </div>
    </div>
  );
}
