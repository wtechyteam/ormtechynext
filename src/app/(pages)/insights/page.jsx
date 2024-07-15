/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from "react";
import InnerTopBanner from "../common/innerTopBanner";
import { Container, Card, Button } from "react-bootstrap";
import { client, urlFor } from "../../../../utils/configSanity";
import Link from 'next/link';

// async function getData() {
//   const query = `*[_type == 'inMedia']`;
//   try {
//     const data = await client.fetch(query);
//     console.log('Fetched data:', data);
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// }

const OrmTechiesInMediaPage = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const result = await getData();
//         setData(result);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

  return (
    <>
       <InnerTopBanner
        title="ORMTechies Insights"
        info="Are you looking to boost your online presence and reputation? At ORMTechies, we specialize in advanced online review management that can significantly enhance your business's image."
        imageSrc="./images/contact.png"
      /> 
     {/*  <Container>
        <div className="my-4 text-center">
          <h2 className='title-xl fw-bold margin_bottom_30'>Our Latest Insights</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((item) => (
            <div key={item._id} className="col mb-4">
              <Card style={{ height: "100%", padding: "15px" }}>
                {item.image && (
                  <Card.Img
                    style={{ height: "300px", objectFit: "cover" }} // Adjusted for image height
                    variant="top"
                    src={urlFor(item.image).url()}
                    alt={item.title}
                  />
                )}
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.shortDescription}</Card.Text>
                  <Link href={`/media/${encodeURIComponent(item.title)}`} passHref>
                    <Button variant="primary">Read more</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>  */}
    </> 
  );
};

export default OrmTechiesInMediaPage;
