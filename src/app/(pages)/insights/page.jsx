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
    <head>
         <title>ORMTechies Insights: Tips for Online Reputation Management</title>
         <meta title="ORM Techies Insights: Tips for Online Reputation Management"/>
         <meta name="description" content="Discover valuable insights and strategies for boosting your online reputation. ORM Techies offers expert advice on review management and reputation building."/>
         {/* <link rel="canonical" href="https://www.ormtechies.com/insights" /> */}
         <meta name="robots" content="index, follow" />
       </head>
      <InnerTopBanner
        title="ORM Techies Insights"
        info="Are you looking to boost your online presence and reputation? At ORM Techies, we specialize in advanced online review management that can significantly enhance your business's image."
        imageSrc="./images/contact.png  "
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
