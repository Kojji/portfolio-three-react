import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";
import Recommendations from "./components/Recommendations";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import FullScreenBanner from "./components/FullScreenBanner";
import MenuMdScreen from "./components/MenuMdComponent";
import CallToActionsSmScreen from "./components/CallToActionsSmComponent";

import { useAppSelector, useAppDispatch } from "./store/hooks";
import { updateWindowWidth } from "./store/App/windowWidth";
import { getNavBarState } from "./store/App/navBarStatus";
import { getWindowWidthState } from "./store/App/windowWidth";

function App() {
  const dispatch = useAppDispatch();
  const navBarState = useAppSelector(getNavBarState);
  const windowWidthState = useAppSelector(getWindowWidthState);

  useEffect(() => {
    const updateDimension = () => {
      dispatch(updateWindowWidth(window.innerWidth));
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  });

  return (
    <div id="app">
      {navBarState && <SideBar />}
      <FullScreenBanner />
      <div>
        <div>
          {windowWidthState <= 768 && <CallToActionsSmScreen />}
          {windowWidthState > 768 && <MenuMdScreen />}
        </div>
        <div id="route-section">
          <Routes>
            {routes.map(
              ({ path, element }, key) =>
                element && <Route key={key} path={path} element={element} />
            )}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <div>
          <Recommendations />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
