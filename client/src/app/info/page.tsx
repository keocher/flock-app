import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function FlockInfo() {
  return (
    <div className="min-h-screen  flex flex-col items-center py-16 px-4  font-inter">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-widest">
          INFO
        </h1>
        <div className="flex items-baseline mt-4 justify-center">
          <p className="text-2xl sm:text-2xl ">floc</p>
          <Image
            src="/logo.svg"
            alt="Flock Logo"
            width={35}
            height={35}
            className="mx-none translate-y-2 "
          />
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-5xl">
        {[
          { title: "Our Story", text: "Learn about how it all started." },
          { title: "Mission", text: "Discover our vision and purpose." },
          { title: "Team", text: "Meet the amazing people behind us." },
          { title: "Goals", text: "Our future ambitions and targets." },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gruvgreen rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 text-center p-8 w-56"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-gruv mb-2 ">
              {item.title}
            </h2>
            <p className=" text-sm leading-relaxed text-gruvbg">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Help Section */}
      <div className="bg-gruvfg rounded-3xl shadow-xl p-10 sm:p-12 w-full max-w-5xl text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gruvbg mb-10">
          How We Offer Help
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              title: "Guidance",
              color: "bg-[#E9F5DB]",
              text: "Expert advice and direction.",
              textColor: "text-[#2E3B2E]",
            },
            {
              title: "Support",
              color: "bg-[#CFE1B9]",
              text: "We’re here for you every step.",
              textColor: "text-[#2E3B2E]",
            },
            {
              title: "Community",
              color: "bg-[#B5C99A]",
              text: "Connect with others like you.",
              textColor: "text-[#2E3B2E]",
            },
            {
              title: "Resources",
              color: "bg-[#97A97C]",
              text: "Access helpful materials anytime.",
              textColor: "text-[#F6F8F3]",
            },
            {
              title: "Tools",
              color: "bg-[#6B705C]",
              text: "Find tools for your journey.",
              textColor: "text-[#F6F8F3]",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`${card.color} ${card.textColor} rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 p-6 w-44`}
            >
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Link href="/">
          <p className="mt-10 text-xl text-gruvbg/70 font-bold">
            {" "}
            Go back to Flock
          </p>
        </Link>
      </div>
    </div>
  );
}
