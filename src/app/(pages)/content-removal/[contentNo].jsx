/* eslint-disable react-hooks/rules-of-hooks */
import {useRouter} from 'next/router';

const contentNo = () => {
    const router= useRouter();
    const content = router.query.contentNo;
    return (
    <>
    <h1>hello {content}  </h1>
    </>
  )
}

export default contentNo;   