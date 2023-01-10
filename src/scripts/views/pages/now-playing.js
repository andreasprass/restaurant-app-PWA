import TheMovieDbSource from '../../data/themoviedb-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const List = {
  async render() {
    return `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">Bangun Karirmu Sebagai Developer Profesional</h1>
          <p class="hero__tagline">Jadilah tuan rumah di negeri sendiri dengan belajar langsung dari para inovator dan
            developer expert</p>
        </div>
      </div>
      <div class="content">
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
