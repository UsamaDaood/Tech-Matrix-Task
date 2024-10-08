// src/redux/epics/historicalPlacesEpic.ts
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { fetchHistoricalPlacesSuccess, fetchHistoricalPlacesFailure } from '../actions';
import { FETCH_HISTORICAL_PLACES } from '../actionTypes';

const fetchHistoricalPlacesEpic = (action$: any) =>
  action$.pipe(
    ofType(FETCH_HISTORICAL_PLACES),
    mergeMap(() =>
      fetch('https://example.com/historical-places')
        .then(response => response.json())
        .then(data => fetchHistoricalPlacesSuccess(data))
        .catch(error => of(fetchHistoricalPlacesFailure(error)))
    )
  );

export default fetchHistoricalPlacesEpic;
