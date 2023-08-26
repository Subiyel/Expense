import { useState, useEffect } from 'react';
import useApi from '../../services/useApi';
import { ApiConstants } from '../../services/ApiConstants';

export function useDetail() {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");

  useEffect(() => {
    // fetchMovies()
  }, [])

  const fetchMovies = async () => {
    
  }

  return { data, error, isLoading }
}