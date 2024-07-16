/* import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { client, urlFor } from '../../utils/configSanity';
import InnerTopBanner from '../../components/common/InnerTopBanner';
import { Container, Card } from 'react-bootstrap';
import BlockContent from '@sanity/block-content-to-react';

async function fetchMediaDetails(title) {
  const query = `*[_type == 'insights' && title == $title][0]`;
  const params = { title: decodeURIComponent(title) };
  console.log(`Fetching data for title: ${params.title}`); // Added log for title
  try {
    const data = await client.fetch(query, params);
    console.log('Fetched data:', data); // Added log for fetched data
    return data;
  } catch (error) {
    console.error('Error fetching media details:', error);
    throw error;
  }
}

const MediaDetailPage = () => {
  const router = useRouter();
  const { title } = router.query;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (title) {
      async function fetchData() {
        try {
          console.log(`Start fetching data for title: ${title}`); // Added log for fetch start
          const result = await fetchMediaDetails(title);
          setData(result);
          console.log('Data set:', result); // Added log for data set
        } catch (error) {
          setError(error);
          console.error('Error setting data:', error); // Added log for error
        } finally {
          setLoading(false);
          console.log('Loading finished'); // Added log for loading finished
        }
      }
      fetchData();
    }
  }, [title]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <>
      <InnerTopBanner
        title={data.title}
        info={data.shortDescription}
        imageSrc={urlFor(data.image).url()}
      />
      <Container>
        <Card className="my-4">
          <Card.Img
            style={{ height: "400px", objectFit: "cover" }}
            src={urlFor(data.image).url()}
            alt={data.title}
          />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.shortDescription}</Card.Text>
            <BlockContent blocks={data.body} />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default MediaDetailPage;
 */