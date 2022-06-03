import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

const Product = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<any>({});
  console.log("id", id);

  const getDetails = async () => {
    const api = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    console.log("api" , api)
    setDetails(api.data);
  };

  useEffect(() => {

  },[details])

  useEffect(() => {
    (async function () {
      await getDetails();
    })();
  }, []); 

  return (
    <div>
        <Row>
            <Container>
                <Col lg={12} md={12} sm={12}>
                    {details && details ? (
                        <div>
                            <img src={details.image} />
                            <h3>
                                {details.name}
                            </h3>
                            <div>
                                <h3>
                                    Episodes
                                    { details && details.episode && details.episode.map((arr:any, i:any) => {
                                       return(
                                           <div key={i}>
                                                <p>{arr}</p>
                                           </div>
                                       )
                                    })}
                                </h3>
                            </div>
                        </div>
                    ) : null}
                </Col>
            </Container>
        </Row>
    </div>
  )
};

export default Product;
