
import Hero from "./components/Hero";
import About from "./components/About";
import SplineEmbed from "./components/SplineEmbed";
import Team from "./components/Team";


import Sponsors from "./components/Sponsors";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="rounded-xl overflow-hidden shadow-lg bg-white my-12 max-w-4xl mx-auto" style={{height: "500px"}}>
        <iframe
          src="https://my.spline.design/fullelectric-ZvlxRxT4AbuRLxROkgzL9Mds/"
          title="3D Car Model"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{width: "100%", height: "100%"}}
          allowFullScreen
        />
      </div>
      <About />
      <SplineEmbed />
      <Team />
      <Sponsors />
    </>
  );
}
