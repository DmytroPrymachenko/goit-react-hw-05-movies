import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/layout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { AppProgect } from '../pages/MoviesStyled';

// const Layout = lazy(() => import('./layout/layout'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

export const App = () => {
  return (
    <AppProgect>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<Layout />} />
        </Routes>
      </Suspense>
    </AppProgect>
  );
};
