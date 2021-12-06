import axios from "axios";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get("https://coronavirus.m.pipedream.net/");

      console.log(response.data.rawData);
      dispatch({
        type: "SET_POST",
        payload: response.data.rawData,
      });
    } catch (err) {
      console.log("Err", err);
    }
  };
};
