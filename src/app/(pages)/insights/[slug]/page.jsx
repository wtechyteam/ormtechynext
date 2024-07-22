/* eslint-disable @next/next/no-img-element */
import { client, urlFor } from "../../../../utils/configSanity";
import React from 'react';
import { PortableText } from '@portabletext/react';
import InnerTopBanner from "../../common/innerTopBanner";
import Link from 'next/link';

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

async function getAllPosts() {
  const query = `*[_type=="insights"]{title, slug, shortDescription, image}`;
  try {
    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error('Error fetching all posts:', error);
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
    const allPosts = await getAllPosts();
    const suggestions = allPosts.filter(p => p.slug.current !== params.slug);

    return (
      <>
        <InnerTopBanner
          title={post.title}
          info={post.shortDescription}
        />
        <div style={styles.container}>
          <div style={styles.mainContent}>
            <h1 style={styles.title}>{post.title}</h1>
            <img src={urlFor(post.image).url()} alt={post.title} style={styles.image} />
            <div style={styles.body}>
              <PortableText value={post.body} />
            </div>
          </div>
          <div style={styles.sidebar}>
            <h2 style={styles.suggestionsTitle}>Related Posts</h2>
            <ul style={styles.suggestionsList}>
              {suggestions.map((suggestion) => (
                <li key={suggestion.slug.current} style={styles.suggestionItem}>
                  <Link href={`/insights/${suggestion.slug.current}`} passHref>
                    <div style={styles.suggestionLink}>
                      <img src={urlFor(suggestion.image).url()} alt={suggestion.title} style={styles.suggestionImage} />
                      <div>
                        <h3 style={styles.suggestionTitle}>{suggestion.title}</h3>
                        <p style={styles.suggestionDescription}>{suggestion.shortDescription}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error('Error rendering blog post:', error);
    return <p style={styles.error}>Error loading blog post.</p>;
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: '50px',
    padding: '0 20px',
    fontFamily: '"Arial", sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '50px'
  },
  mainContent: {
    flex: 3,
    marginRight: '20px',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '20px 0',
    color: '#333',
  },
  image: {
    marginTop: '1rem',
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  body: {
    textAlign: 'left',
    maxWidth: '800px',
    marginTop: '1rem',
    width: '100%',
    lineHeight: '1.6',
    fontSize: '1.1rem',
    color: '#555',
  },
  sidebar: {
    flex: 1.5,
    padding: '20px',
    marginTop: '20px',
    position: 'sticky',
    top: '100px', // This will make the sidebar sticky and it will stay 20px from the top of the viewport
  },
  suggestionsTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  suggestionsList: {
    listStyleType: 'none',
    padding: 0,
  },
  suggestionItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    gap: '20px',
  },
  suggestionLink: {
    textDecoration: 'none',
    color: '#007bff',
    display: 'flex',
    alignItems: 'center',
  },
  suggestionImage: {
    width: '140px',
    height: '120px',
    borderRadius: '8px',
    marginRight: '10px',
  },
  suggestionTitle: {
    fontSize: '1.2rem',
    margin: '0 0 5px 0',
  },
  suggestionDescription: {
    fontSize: '1rem',
    color: '#555',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '300px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: '20px',
  },
};
