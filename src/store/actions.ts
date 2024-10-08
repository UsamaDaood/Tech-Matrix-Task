export const FETCH_PLACES = 'FETCH_PLACES';
export const MARK_AS_VISITED = 'MARK_AS_VISITED';
export const UNMARK_AS_VISITED = 'UNMARK_AS_VISITED';

export const fetchPlaces = () => ({
  type: FETCH_PLACES,
});

export const markAsVisited = (id: number) => ({
  type: MARK_AS_VISITED,
  payload: id,
});

export const unmarkAsVisited = (id: number) => ({
  type: UNMARK_AS_VISITED,
  payload: id,
});
