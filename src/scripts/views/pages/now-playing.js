import TheMovieDbSource from '../../data/themoviedb-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const List = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="movies" class="movies">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheMovieDbSource.listRestaurants();
    const moviesContainer = document.querySelector('#movies');
    restaurants.forEach((resto) => {
      moviesContainer.innerHTML += createRestaurantListTemplate(resto);
    });
  },
};

export default List;
