import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./actions/action";

function Posts() {
  const posts = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());

    console.log("posts");
  }, [dispatch]);
  console.log(posts);

  return (
    <div className="wrap">
      <div className="countries">
        <h2>Country</h2>
        {posts.reducerCountry.countries.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
      <div className="confirmed">
        <h2>Confirmed</h2>
        {posts.reducerConfirmed.confirmed.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
      <div className="deaths">
        <h2>Deaths</h2>
        {posts.reducerDeaths.deaths.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default Posts;
