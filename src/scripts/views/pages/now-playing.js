import TheMovieDbSource from '../../data/themoviedb-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const url = 'hero-image.jpg';
console.log(url);

const List = {

  async render() {
    return `
      <div class="hero">
          <img src="${url}">
      </div>
      <div class="content" id="homeKonten">
        <h2 class="content__heading">Restaurant List</h2>
        <div id="restos" class="restos">
        
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheMovieDbSource.listRestaurants();
    const restaurantContainer = document.querySelector('#restos');

    restaurants.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(resto);
    });
  },
};

export default List;
