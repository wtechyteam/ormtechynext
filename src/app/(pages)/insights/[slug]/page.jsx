/* eslint-disable @next/next/no-img-element */
import { client, urlFor } from "../../../../utils/configSanity";
import React from 'react';
import { PortableText } from '@portabletext/react';
import InnerTopBanner from "../../common/innerTopBanner";

async function getData(slug) {
  const query = `*[_type=="insights" && slug.current==$slug]{
    title, shortDescription, image, body
  } [0]`;
  try {
    const post = await client.fetch(query, { slug });
    if (!post) {
      throw new Error(`No post found for slug: ${slug}`);
    }
    return post;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function generateStaticParams() {
  const query = `*[_type=="insights"]{ "slug": slug.current }`;
  try {
    const posts = await client.fetch(query);
    console.log('Fetched posts:', posts);
    return posts.map(post => ({
      params: {
        slug: post.slug,
      },
    }));
  } catch (error) {
    console.error('Error fetching static params:', error);
    throw error;
  }
}

export default async function BlogPost({ params }) {
  try {
    const post = await getData(params.slug);
    return (
      <>
        <InnerTopBanner
          title={post.title}
          info={post.shortDescription}
        />
        <div style={styles.container}>
          <h1 style={styles.title}>{post.title}</h1>
          <img src={urlFor(post.image).url()} alt={post.title} style={styles.image} />
          {/* <p style={styles.description}>{post.shortDescription}</p> */}
          <div style={styles.body}>
            <PortableText value={post.body} />
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error('Error rendering blog post:', error);
    return <p>Error loading blog post.</p>;
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    padding: '0 20px',
  },
  title: {
    textAlign: 'center',
  },
  image: {
    width: '870px',
    height: '519px',
  },
  description: {
    textAlign: 'center',
  },
  body: {
    textAlign: 'left',
    maxWidth: '800px',
    width: '100%',
  },
};
