// import { Routes, Route, Navigate } from "react-router-dom";
// import routes from "./routes";
// import Footer from "./components/Footer";
// import TopBar from "./components/TopBar";
// import NavBar from "./components/NavBar";
// import SideBar from "./components/SideBar";
import FullScreenBanner from "./components/FullScreenBanner";

// import { useAppSelector } from "./store/hooks";
// import { getNavBarState } from "./store/NavBar/navBarStatus";

function App() {
  // const navBarState = useAppSelector(getNavBarState);

  return (
    <div id="app">
      <FullScreenBanner />
    </div>
    // <div className="relative bg-white dark:bg-zinc-600 min-h-screen">
    //   <div className="flex flex-col min-h-screen justify-between">
    //     <div>
    //       {navBarState && <SideBar />}
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
