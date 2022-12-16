
import FiltersView from './view/filters';
import SortView from './view/sort';
import {render} from './render.js';
import TripEventsPresenter from './presenter/trip-events-presenter';

const siteTripControlsElement = document.querySelector('.trip-controls');
const siteFiltersElement = siteTripControlsElement.querySelector('.trip-controls__filters');
const siteTripEventsElement = document.querySelector('.trip-events');
const tripEventsPresenter = new TripEventsPresenter({tripEventsContainer: siteTripEventsElement});

render(new FiltersView(), siteFiltersElement);
render(new SortView(), siteTripEventsElement);

tripEventsPresenter.init();
