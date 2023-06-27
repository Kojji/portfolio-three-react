import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";
// import Footer from "./components/Footer";
// import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import FullScreenBanner from "./components/FullScreenBanner";

import { useAppSelector, useAppDispatch } from "./store/hooks";
import { updateWindowWidth } from "./store/App/windowWidth";
import { getNavBarState } from "./store/App/navBarStatus";

function App() {
  const dispatch = useAppDispatch();
  const navBarState = useAppSelector(getNavBarState);

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
        <Routes>
          {routes.map(
            ({ path, element }, key) =>
              element && <Route key={key} path={path} element={element} />
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
    // <div className="relative bg-white dark:bg-zinc-600 min-h-screen">
    //   <div className="flex flex-col min-h-screen justify-between">
    //     <div>
    //       <TopBar />
    //       <NavBar />
    //     </div>
    //     <div>
    //       <Routes>
    //         {routes.map(
    //           ({ path, element }, key) =>
    //             element && <Route key={key} path={path} element={element} />
    //         )}
    //         <Route path="*" element={<Navigate to="/" replace />} />
    //       </Routes>
    //     </div>
    //     <Footer />
    //   </div>
    // </div>
  );
}

export default App;
