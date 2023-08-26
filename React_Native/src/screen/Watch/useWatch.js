import { useState, useEffect } from 'react';
import Api from '../../services/Api';
import { ApiConstants } from '../../services/ApiConstants';

export function useWatch() {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    setLoading(true)
    let response = await Api(ApiConstants.BASE_URL + ApiConstants.UPCOMING + "?api_key=" + process.env.API_KEY)
    setLoading(false)
    if (response && response.results && response.results.length > 0) {
        setData(response.results)
    }
  }

  return { data, error, isLoading }
}