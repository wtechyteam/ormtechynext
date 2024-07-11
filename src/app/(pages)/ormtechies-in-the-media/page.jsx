'use client'
import React, { useEffect, useState } from "react";
import InnerTopBanner from "./../common/innerTopBanner";
import { Container, Image } from "react-bootstrap";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const OrmTechiesInMediaPage = () => {
  /* const [data, setData] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.getEntry(process.env.ENTRY_ID);
        setData({
          title: result.fields.Title_insights || "",
          description: result.fields.Short_description_insights || "",
          image: result.fields.Insights_cover_image?.fields?.file?.url || null,
        });
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data from Contentful:", error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } */

  return (
    <>
      <InnerTopBanner
        title="ORMTechies In Media"
        info="Are you looking to boost your online presence and reputation? At ORMTechies, we specialize in advanced online review management that can significantly enhance your business's image."
      />

     {/*  <Container>
        <div className="card" style={{ width: "18rem" }}>
          <Image src={data.image || "..."} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">
              {data.description || "Some quick example text to build on the card title and make up the bulk of the card's content."}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </Container> */}
    </>
  );
};

export default OrmTechiesInMediaPage;
