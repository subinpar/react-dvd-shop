import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [word, setWord] = useState("");

  const onClickWord = () => {
    navigate(`/test?sword=${word}`);
  };

  return (
    <div className="page-container" style={{ fontSize: "32px" }}>
      사이트 방문을 환영합니다!🥳
    </div>
  );
}
