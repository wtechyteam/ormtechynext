/* eslint-disable @next/next/no-img-element */
import React from "react";
import InnerTopBanner from "../common/innerTopBanner";
import { Container, Card, Button } from "react-bootstrap";
import { client, urlFor } from "./../../../utils/configSanity";
import Link from 'next/link';

const OrmTechiesInMediaPage = ({ posts }) => {
  // console.log("Posts:", posts); // Ensure console.log is placed correctly

  return (
    <>
      <InnerTopBanner
        title="ORMTechies Insights"
        info="Are you looking to boost your online presence and reputation? At ORMTechies, we specialize in advanced online review management that can significantly enhance your business's image."
        imageSrc="./images/contact.png"
      />
      {/* <Container className="mt-5">
        <div className="row">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <div className="col-md-4 mb-4" key={post._id}>
                <Card style={{ width: "100%" }}>
                  {post.mainImage && (
                    <Card.Img
                      variant="top"
                      src={urlFor(post.mainImage).width(300).url()}
                      alt={post.title}
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.shortDescription}</Card.Text>
                    <Link href={`/insights/${post.slug.current}`} passHref>
                      <Button variant="primary">Read More</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No posts found.</p>
            </div>
          )}
        </div>
      </Container> */}
    </>
  );
};

/* OrmTechiesInMediaPage.getInitialProps = async () => {
  let posts = [];

  try {
    posts = await client.fetch(`
      *[_type == 'insights'] {
           `);
    
    console.log("Fetched posts:", posts);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  
  return { posts };
}; */


export default OrmTechiesInMediaPage;
