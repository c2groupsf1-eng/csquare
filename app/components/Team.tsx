"use client";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { useFadeInOnScroll } from "./hooks/useFadeInOnScroll";

const members = [
  { name: "Vikram", role: "Team Lead", img: "/team/vikram (2).jpg" },
  { name: "Navaneeth", role: "Aerodynamic Engineer", img: "/team/navaneeth.jpg" },
  { name: "Aryan", role: "Manufacturing Engineer", img: "/team/aryan.jpg" },
  { name: "Ehan", role: "Lead Designer", img: "/team/ehan.jpg" },
  { name: "Arjun", role: "PR & Marketing Lead", img: "/team/arjun.jpg" },
  { name: "Johann", role: "Resource Manager", img: "/team/johann.jpg" },
];

export default function Team() {
  useFadeInOnScroll("#team .team-3d-card");
  return (
    <section id="team" className="max-w-5xl mx-auto py-16 px-4">
  <h2 className="text-3xl font-bold text-white mb-8 text-center">Meet the Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((m, i) => (
          <CardContainer key={i} className="team-3d-card">
            <CardBody className="bg-white relative group/card dark:bg-black dark:border-white/[0.9] border-white/[0.9] w-[22rem] h-[28rem] rounded-lg p-8 border flex flex-col items-center justify-center">
              <CardItem translateZ="50" className="flex flex-col items-center">
                <Image src={m.img} alt={m.name} width={192} height={256} className="rounded-md mb-6 object-cover" />
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-2">{m.name}</h3>
                <p className="text-lg text-black dark:text-neutral-300">{m.role}</p>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
