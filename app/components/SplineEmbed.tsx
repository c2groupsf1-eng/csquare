"use client";
// ...existing code...
export default function SplineEmbed() {
  return (
    <section id="car" className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Car</h2>
      <div className="flex flex-col gap-8 items-center justify-center">
        <img src="/car1.jpg" alt="Car 1" className="rounded-xl shadow-lg w-full object-cover" />
        <img src="/car2.jpg" alt="Car 2" className="rounded-xl shadow-lg w-full object-cover" />
      </div>
    </section>
  );
}
