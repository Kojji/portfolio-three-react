import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import navBarReducer from './NavBar/navBarStatus';
import accordionActiveReducer from './FAQAccordion/accordionActive';
import discountListReducer from './Home/discountList';
import featuredListReducer from './Home/featuredList';
import recentListReducer from './Home/recentList';
import machineInfoReducer from './Machine/machineInfo';

export const store = configureStore({
  reducer: {
    accordionActive: accordionActiveReducer,
    discountList: discountListReducer,
    featuredList: featuredListReducer,
    navBar: navBarReducer,
    recentList: recentListReducer,
    machineInfo: machineInfoReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;