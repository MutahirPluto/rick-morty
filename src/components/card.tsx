import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Card = () => {
  const [favourites, setFavourites] = useState<any[]>([]);
  const [data, setData] = useState<any>([]);

  const favourite = async (data: any) => {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    setFavourites(users);
  };

  const getData = async () => {
    try {
      const api = await axios.get("https://rickandmortyapi.com/api/character");
      setData(api.data.results);
      console.log("data", api.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Row>
        {data &&
          data.map((arr: any, i: any) => {
            return (
              <Col lg={4} md={6} sm={12}>
                <Link to={`/details${arr.id}`}>
                  <img src={arr.image} style={{ marginTop: "20px" }} />

                  <h4>{arr.name}</h4>
                </Link>
                <div onClick={() => favourite(arr)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </div>
              </Col>
            );
          })}
      </Row>
      <div style={{ marginTop: "5rem" }}>
        <h1>Favourites</h1>
        {favourites.map((arr, i) => {
          return <img src={arr.image} />;
        })}
      </div>
    </div>
  );
};

export default Card;
