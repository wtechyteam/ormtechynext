import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'jw77xse3',
  dataset: 'production',
  apiVersion: '2022-03-07',
  useCdn: true,
});
const builder = imageUrlBuilder(client);
export function urlFor(source) {
    return builder.image(source);
  } 


