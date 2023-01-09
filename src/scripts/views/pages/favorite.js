import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Movie</h2>
        <div id="movies" class="movies">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies();
    const moviesContainer = document.querySelector('#movies');

    movies.forEach((resto) => {
      moviesContainer.innerHTML += createRestaurantListTemplate(resto);
    });
  },
};

export default Favorite;
