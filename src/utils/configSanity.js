 import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'jw77xse3', // Replace with your actual project ID
  dataset: 'production', // Replace with your actual dataset name
  apiVersion: '2022-03-07', // Use the latest API version
  useCdn: true, // Use CDN for faster response times
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
 