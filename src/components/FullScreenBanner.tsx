import BannerOverlay from "./BannerOverlay";

import "./FullScreenBanner.css";
import "css-doodle";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "css-doodle": {};
    }
  }
}
// corrigir - edit square size according to screen size
let doodleRule: string = `:doodle {
    @grid:100rem / 100vmax;
    grid-gap: 1px;
  }
  animation-name: example;
  animation-duration: 7s;
  animation-delay: @rand(-30s);
  animation-iteration-count: infinite;
  animation-direction: alternate;
  @keyframes example {
    0% {
      background: @pick(#9D4AC7, #C276E7, #D299EE, #DAB4EC, #DFC8E9);
    }
    50% {
      background: @pick(#9D4AC7, #C276E7, #D299EE, #DAB4EC, #DFC8E9);
    }
    100%{
      background: @pick(#9D4AC7, #C276E7, #D299EE, #DAB4EC, #DFC8E9);
    }`;

function FullScreenBanner() {
  return (
    <section
      id="animation-section"
      className="md:bg-contain bg-cover bg-center w-full relative"
    >
      <BannerOverlay />
      {/* <css-doodle>{doodleRule}</css-doodle> */}
    </section>
  );
}

export default FullScreenBanner;
