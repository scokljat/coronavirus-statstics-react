import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./action";

function Posts() {
  const posts = useSelector((state) => state);
  const subposts = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
    console.log("posts");
  }, [dispatch]);
  console.log(posts);
  return <div></div>;
}

export default Posts;
