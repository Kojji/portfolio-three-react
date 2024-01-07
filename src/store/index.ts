import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import navBarReducer from './App/navBarStatus';
import accordionActiveReducer from './FAQAccordion/accordionActive';
import languageReducer from './App/language';
import windowWidthReducer from './App/windowWidth';

export const store = configureStore({
  reducer: {
    accordionActive: accordionActiveReducer,
    navBar: navBarReducer,
    windowWidth: windowWidthReducer,
    language: languageReducer
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