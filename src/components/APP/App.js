// Ключ 475a85ae44b476bff1c49b152a53980b
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org',

  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzVhODVhZTQ0YjQ3NmJmZjFjNDliMTUyYTUzOTgwYiIsInN1YiI6IjY1ODJkZTJiODU4Njc4NTY4Y2Y2NTg1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oSuH1eKjWm09kMRd0J3881rqlHlj640AqdEudEH3zEo',
  },
  params: {
    api_key: '475a85ae44b476bff1c49b152a53980b',
  },
});

export async function getCast(id) {
  const { data } = await api(`/3/movie/${id}/credits`);
  return data;
}

export async function getMovie(id) {
  const { data } = await api(`/3/movie/${id}`);
  return data;
}

export async function getReviews(id) {
  const { data } = await api(`/3/movie/${id}/reviews`);
  return data;
}

export async function getSearchMovie(q) {
  const { data } = await api(`/3/search/movie`, {
    params: {
      query: q,
    },
  });
  return data;
}

export async function getMoviesToday() {
  const { data } = await api('/3/trending/all/day');
  return data;
}
