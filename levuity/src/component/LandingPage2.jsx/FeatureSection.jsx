import React from "react";

const FeatureSection = () => {
  const features = [
    {
      id: "01",
      title: "Collaborate like pros",
      description:
        "Work with real people, real projects, and real challenges. Build, create, and grow together like you’re already in the industry.",
    },
    {
      id: "02",
      title: "Showcase Your Superpower",
      description:
        "A personalized profile that doesn’t just talk— it screams your skills, projects, and potential. Let the world see what you’re made of.",
    },
    {
      id: "03",
      title: "Review That Drives Growth.",
      description:
        "A unique, interactive review portal where feedback isn’t just criticism—it’s your roadmap to leveling up your game.",
    },
    {
      id: "04",
      title: "Jobs That Fit You",
      description:
        "A job portal designed to work for YOU. Find gigs that match your skills and goals—verified and trustworthy.",
    },
    {
      id: "05",
      title: "Compete & Conquer",
      description:
        "Engage in competitions tailored for your skillset. From physical challenges to online battles, prove your expertise and win like a pro.",
    },
    {
      id: "06",
      title: "Insights That Inspire",
      description:
        "A powerful extension that tracks your learning patterns and suggests what’s next. Never feel lost—only ready for more.",
    },
    {
      id: "07",
      title: "Build Your Dream Team",
      description:
        "Demo business simulations where you ideate, create, and collaborate with others in real-world scenarios.",
    },
    {
      id: "08",
      title: "Stay Balanced, Stay Ahead",
      description:
        "A mental health tracker built to help you balance stress and productivity, tailored for students, freelancers, and budding entrepreneurs.",
    },
    {
      id: "09",
      title: "Master Your Craft",
      description:
        "Specific communities for every skill imaginable UI, graphic design, programming, writing, and more. Connect, learn, and master your art.",
    },
  ];

  return (
    <div className="px-28 flex flex-col text-center space-y-4 mt-28 mb-20">
      <div className="text-center">
        <h1 className="font-inter font-semibold text-2xl text-[#432125] relative inline-block after:content-[''] after:block after:w-6 after:mt-[-3px] after:rounded-xl after:h-[2px] after:bg-[#2756FF]  after:left-2">
          Our Features
        </h1>
      </div>

      <p className="font-poppins font-normal text-[#707070] px-[14%]">
        At{" "}
        <span className="font-poppins text-[#494949] font-semibold">
          Levuity
        </span>{" "}
        we combine AI-driven personalization, real-time analytics, and a
        collaborative community to create an unmatched learning experience.
        We’re here to help you not just learn, but thrive and unlock your true
        potential.
      </p>

      <div
        data-aos="zoom-in"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[44px] sm:mt-[44px] md:mt-[44px] lg:mt-[44px] xl:mt-[44px]"
      >
        {features.map((feature, i) => (
          <div
            data-aos="zoom-in"
            key={i}
            className="flex flex-col items-start rounded-xl px-4 py-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <p className="font-jakarta text-xs font-semibold text-[#767676]">
              {feature.id}
            </p>
            <h2 className="font-jakarta font-semibold text-xl  text-black mt-2">
              {feature.title}
            </h2>
            <p className=" font-inter text-base text-[#59646B] mt-2 text-left">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <div
        data-aos="zoom-in"
        className="flex w-full items-start rounded-xl px-4 py-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <p className="font-jakarta font-normal text-xl text-black mt-2 text-left">
          That’s just the start! Unlock more exclusive features on our platform,
          like AI-powered learning paths, real-time performance analytics, and
          immersive hands-on projects – all designed to refine your skills,
          optimize your learning journey, and accelerate your career trajectory!
        </p>
      </div>
      <h1 className="font-poppins font-bold text-4xl lg:text-4xl text-[#0062FF] leading-tight pt-10">
      Transform potential into excellence{" "}
      </h1>
    </div>
  );
};

export default FeatureSection;
