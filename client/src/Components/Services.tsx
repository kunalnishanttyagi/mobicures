"use client";

import React from "react";
import { Carousel, Card } from "../Components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Services we offer
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Mobile Phone",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Tablets",
    title: "Enhance your productivity.",
    src: "https://i.pinimg.com/736x/c2/d7/77/c2d777ea5b386e6a59227e4b57ce3b0f.jpg",
    content: <DummyContent />,
  },
  {
    category: "Washing Machine",
    title: "Launching the new Apple Vision Pro.",
    src: "washing.jpeg",
    content: <DummyContent />,
  },

  {
    category: "VR sets",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Laptops",
    title: "Photography just got better.",
    src: "https://i.pinimg.com/736x/5a/0c/c0/5a0cc015c627cc5553402c16be5af6c5.jpg",
    content: <DummyContent />,
  },
  {
    category: "Air Conditioners",
    title: "Hiring for a Staff Software Engineer",
    src: "https://i.pinimg.com/736x/aa/70/99/aa70992adbf2d29300053aad9ce1fad4.jpg",
    content: <DummyContent />,
  },
];
export default AppleCardsCarouselDemo;