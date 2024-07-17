/* eslint-disable @next/next/no-img-element */
import { client, urlFor } from "../../../../utils/configSanity";
import React from 'react';
import { PortableText } from '@portabletext/react';
import InnerTopBanner from "../../common/innerTopBanner";

async function getData(slug) {
  const query = `*[_type=="insights" && slug.current==$slug]{
    title, shortDescription, image, body
  } [0]`;
  const post = await client.fetch(query, { slug });
  return post;
}

export async function generateStaticParams() {
  const query = `*[_type=="insights"]{ "slug": slug.current }`;
  const posts = await client.fetch(query);
  console.log(posts)
  return posts.map(post => ({
    params: {
      slug: post.slug,
    },
  }));
}

export default async function BlogPost({ params }) {
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
        <p style={styles.description}>{post.shortDescription}</p>
        <div style={styles.body}>
          <PortableText value={post.body} />
        </div>
      </div>
    </>
  );
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
    maxWidth: '100%',
    height: 'auto',
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
