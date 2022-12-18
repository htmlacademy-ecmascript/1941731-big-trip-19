import {render} from '../render';
import EditTripEventView from '../view/edit-trip-event';
import NewTripEventView from '../view/new-trip-event';
import TripEventsListView from '../view/trip-events-list';
import TripEventView from '../view/trip-event';

export default class TripEventsPresenter {
  tripEventListComponent = new TripEventsListView();
  constructor({tripEventsContainer}) {
    this.tripEventsContainer = tripEventsContainer;
  }

  init() {
    render(this.tripEventListComponent, this.tripEventsContainer);
    render(new EditTripEventView(), this.tripEventListComponent.getElement());
    render(new NewTripEventView(), this.tripEventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripEventView(), this.tripEventListComponent.getElement());
    }
  }
}
