import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

import { fetchData } from "../actions/action";

function Posts() {
  const posts = useSelector((state) => state);
  const state = useSelector((state) => state.reducerChart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <div className="doughnut">
        <Doughnut data={state.data} />
      </div>
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
    </div>
  );
}

export default Posts;
