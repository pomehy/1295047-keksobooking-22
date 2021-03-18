import { removeMapMarkers, renderCards } from './map.js';

const filterForm = document.querySelector('.map__filters');
const housingTypeSelect = filterForm.querySelector('#housing-type');

const filterOffers = (offers) => {

  const onFilterByTypeChange = (offers) => {

    return (evt) => {
      evt.preventDefault();
      const type = housingTypeSelect.value;
      if (type === 'any') {
        removeMapMarkers();
        renderCards(offers);
        return;
      }
      const sortedOffers = offers.filter((offer) => {
        return offer.offer.type === type;
      });
      removeMapMarkers();
      renderCards(sortedOffers);
    }
  }
  housingTypeSelect.addEventListener('change', onFilterByTypeChange(offers));
}


export { filterForm, filterOffers };
