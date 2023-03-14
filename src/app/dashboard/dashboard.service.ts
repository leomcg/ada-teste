import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private cardsChanged = new BehaviorSubject(false);

	constructor() {}

	dispacthCardsChanged() {
		this.cardsChanged.next(true);
	}

	onCardsChanged(): Observable<boolean> {
		return this.cardsChanged.asObservable().pipe();
	}
}
