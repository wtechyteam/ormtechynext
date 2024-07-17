/* eslint-disable @next/next/no-img-element */
import React from "react";
import InnerTopBanner from "../common/innerTopBanner";
import { Container } from "react-bootstrap";
import { client,urlFor} from "../../../utils/configSanity";
import Card from './Card'; 

const OrmTechiesInMediaPage = async () => {
  const query = `*[_type=="insights"] | order(_createdAt desc) {
    title, image, "slug": slug.current, shortDescription}

`;

  const posts = await client.fetch(query);
  console.log(posts);
  

  return (
    <>
      <InnerTopBanner
        title="ORMTechies Insights"
        info="Are you looking to boost your online presence and reputation? At ORMTechies, we specialize in advanced online review management that can significantly enhance your business's image."
        imageSrc="./images/contact.png"
      />
      <Container>
        <div className="my-4 text-center">
          <h2 className='title-xl fw-bold margin_bottom_30'>Our Latest Insights</h2>
        </div>
        <div style={styles.cardsContainer}>
          {posts.map(post => (
            <Card
              key={post.slug}
              title={post.title}
              image={urlFor(post.image).url()}
              description={post.shortDescription}
              slug={post.slug}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

const styles = {
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
};

export default OrmTechiesInMediaPage;
