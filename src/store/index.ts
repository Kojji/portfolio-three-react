import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import navBarReducer from './App/navBarStatus';
import accordionActiveReducer from './FAQAccordion/accordionActive';
import discountListReducer from './Home/discountList';
import featuredListReducer from './Home/featuredList';
import recentListReducer from './Home/recentList';
import machineInfoReducer from './Machine/machineInfo';
import windowWidthReducer from './App/windowWidth';

export const store = configureStore({
  reducer: {
    accordionActive: accordionActiveReducer,
    discountList: discountListReducer,
    featuredList: featuredListReducer,
    navBar: navBarReducer,
    windowWidth: windowWidthReducer,
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