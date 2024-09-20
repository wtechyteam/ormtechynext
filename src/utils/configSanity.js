 import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'jw77xse3', 
  dataset: 'production',
  useCdn: true, 
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
 