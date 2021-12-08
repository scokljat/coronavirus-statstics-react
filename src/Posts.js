import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountry } from "./actions/actionCountry";
//import { fetchConfirmed } from "./actions/actionConfirmed";

function Posts() {
  const posts = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountry());
    // dispatch(fetchConfirmed());
    console.log("posts");
  }, [dispatch]);
  console.log(posts);

  return (
    <div className="wrap">
      <div className="country">
        {posts.reducerCountry.countries.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
      <div className="confirmed">
        {posts.reducerConfirmed.confirmed.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default Posts;
