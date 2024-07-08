import { useState, useEffect } from "react";
import api from "../utils/api"; // Ensure this is your configured axios instance

const useAxiosPost = (url, postData, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (postData) => {
    setLoading(true);
    try {
      const response = await api.post(url, postData, options);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, post };
};

export default useAxiosPost;
