"use client";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { useFadeInOnScroll } from "./hooks/useFadeInOnScroll";

const members = [
  { name: "Navaneeth", role: "Aerodynamic Engineer", img: "/team/navaneeth.jpg" },
  { name: "Aryan", role: "Manufacturing Engineer", img: "/team/aryan.jpg" },
  { name: "Vikram", role: "Team Lead", img: "/team/vikram.jpg" },
  { name: "Ehan", role: "Lead Designer", img: "/team/ehan.jpg" },
  { name: "Chinmay", role: "PR & Marketing Lead", img: "team/chinmay.jpg" },
  { name: "Johann", role: "Resource Manager", img: "/team/johann.jpg" },
];

export default function Team() {
  useFadeInOnScroll("#team .team-3d-card");
  return (
    <section id="team" className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Meet the Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((m, i) => (
          <CardContainer key={i} className="team-3d-card">
            <CardBody className="bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[22rem] h-[28rem] rounded-lg p-8 border flex flex-col items-center justify-center">
              <CardItem translateZ="50" className="flex flex-col items-center">
                <img src={m.img} alt={m.name} className="w-48 h-64 rounded-md mb-6 object-cover" />
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-white mb-2">{m.name}</h3>
                <p className="text-lg text-gray-600 dark:text-neutral-300">{m.role}</p>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
