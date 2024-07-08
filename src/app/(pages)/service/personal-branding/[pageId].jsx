import {useRouter} from "next/router";
const PostDetails = props => {
    const router = useRouter();
    const {postId} = router.query;
    console.log({router});
    return(
        <div>
            <h1>Post Details - {postId}</h1>
        </div>

    );
}
export default PostDetails;