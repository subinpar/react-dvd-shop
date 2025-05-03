import React from "react";
import { useParams } from "react-router-dom";
import { IMG_BASE_URL } from "../components/Movie";
import { dummy } from "../movieDummy";

export default function MovieDetail() {
  const { title } = useParams();

  const movie = dummy.results.find((m) => m.title === title);

  if (!movie) {
    return <div>영화 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="page-container" style={{ padding: "40px" }}>
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "flex-start",
          backgroundColor: "#fdfdfd",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        }}
      >
        <img
          style={{
            width: "300px",
            height: "450px",
            borderRadius: "12px",
            objectFit: "cover",
          }}
          src={IMG_BASE_URL + movie.poster_path}
          alt={`${movie.title} 포스터`}
        />

        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
            {movie.title}
          </h1>

          <div
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#444",
              marginBottom: "30px",
            }}
          >
            <p style={{ marginTop: "10px" }}>{movie.overview}</p>
          </div>

          <div style={{ color: "#666", fontSize: "16px" }}>
            <p>📅 개봉일: {movie.release_date}</p>
            <br></br>
            <p>⭐ 평점: {movie.vote_average}</p>
            <br></br>
            <p>💰 가격: {movie.price.toLocaleString()}원</p>
          </div>
        </div>
      </div>
    </div>
  );
}
