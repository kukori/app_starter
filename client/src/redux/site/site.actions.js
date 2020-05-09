import { SiteActionTypes } from './site.types';

export const toggleSidebar = () => async dispatch => {
  dispatch({
      type: SiteActionTypes.TOGGLE_SIDEBAR
  });
};