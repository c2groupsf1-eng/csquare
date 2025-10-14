"use client";
// ...existing code...
export default function SplineEmbed() {
  return (
    <section id="car" className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Car</h2>
      <div className="rounded-xl overflow-hidden shadow-lg bg-white" style={{height: "500px"}}>
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
    </section>
  );
}
