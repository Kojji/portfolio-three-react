import "./FullScreenBanner.css";
import "css-doodle";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "css-doodle": {};
    }
  }
}

let doodleRule: string = `:doodle {
    @grid: 30rem / 100vmax;
    grid-gap: 2px;
  }
  animation-name: example;
  animation-duration: 8s;
  animation-delay: @rand(-45s);
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
      className="md:bg-contain bg-cover bg-center w-full"
    >
      <css-doodle>{doodleRule}</css-doodle>
    </section>
  );
}

export default FullScreenBanner;
