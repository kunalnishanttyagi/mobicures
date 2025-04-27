"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import { GiAutoRepair } from "react-icons/gi";
import { LuNotebookPen } from "react-icons/lu";
import { MdOutlineDirectionsBike } from "react-icons/md";
export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Book Online",
    description:
      "Fill a simple form and choose your device issue.",
    link: "https://stripe.com",
    photo:LuNotebookPen,
  },
  {
    title: "Technician at your Doorstep",
    description:
      "Our expert comes to you at your preferred time.",
    link: "https://netflix.com",
    photo:MdOutlineDirectionsBike,
  },
  {
    title: "Repair Process",
    description:
      "Fast repair, quality guarranteed pay after service.",
    link: "https://google.com",
    photo: GiAutoRepair,
  },
  // {
  //   title: "Meta",
  //   description:
  //     "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
  //   link: "https://meta.com",
  // },
  // {
  //   title: "Amazon",
  //   description:
  //     "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  //   link: "https://amazon.com",
  // },
  // {
  //   title: "Microsoft",
  //   description:
  //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  //   link: "https://microsoft.com",
  // },
];
