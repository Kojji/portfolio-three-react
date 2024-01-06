import BannerOverlay from "./BannerOverlay";

import Lottie from "react-lottie";
import animationData from "../assets/bannerBackground2.json";

import "./FullScreenBanner.css";

function FullScreenBanner() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "none",
    },
  };

  return (
    <section id="animation-section" className="relative container mx-auto">
      <BannerOverlay />
      <div className="object-fill h-full w-full">
        <Lottie options={defaultOptions} />
      </div>
    </section>
  );
}

export default FullScreenBanner;
