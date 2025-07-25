import React , { ReactNode } from "react";

interface Skill {
  name: string;
  icon: ReactNode;
  bgColor: string;
  color: string;
}

export default function SkillSections({ title, skills } : { title: string; skills: Skill[] }) {
  return (
    <>
      <h1 className="text-xl font-semibold my-5">{title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 items-center justify-center w-full">
        {skills.map((item) => (
          <div data-aos="zoom-in"
            className="flex flex-col items-center justify-center gap-3 lg:gap-4 bg-black/15 hover:bg-black/25 p-4 rounded-xl group"
            key={item.name}
          >
            <div
              className={`size-15 flex justify-center items-center rounded-lg 
                ${item.color} ${item.bgColor} text-5xl group-hover:scale-110 duration-500 ease-in-out transition`}
            >
              {item.icon}
            </div>
            <p className="text-lg lg:text-2xl font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
