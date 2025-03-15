import React from "react";

const FeatureSection = () => {
  const features = [
    {
      id: "01",
      title: "Stress Less, Learn More",
      description:
        "Get everything you need to conquer your syllabus without the drama. From doubt-solving to time-saving tools, it’s learning made effortless.",
    },
    {
      id: "02",
      title: "Your Personal Study Sidekick",
      description:
        "Interactive dashboards to track progress, manage schedules, and keep you ahead of the curve—because superheroes need sidekicks.",
    },
    {
      id: "03",
      title: "Homework? Handled.",
      description:
        "Say goodbye to missed assignments. Keep track of deadlines and submissions all in one place without breaking a sweat.",
    },
    {
      id: "04",
      title: "Tests Made Tolerable",
      description:
        "Mock tests and personalized quizzes designed to feel less like a headache and more like a game. Ace them without the panic.",
    },
    {
      id: "05",
      title: "Together, We Got This",
      description:
        "Join study groups, ask questions, and collaborate with peers—because teamwork makes dream grades.",
    },
    {
      id: "06",
      title: "Syllabus Slayer",
      description:
        "Break down your syllabus into manageable chunks and get reminders so you can slay one topic at a time.",
    },
    {
      id: "07",
      title: "Expert Help, Anytime",
      description:
        "Tap into a pool of experts and mentors when you’re stuck. Guidance you can trust, just a click away.",
    },
    {
      id: "08",
      title: "Competition, But Fun",
      description:
        "Friendly academic challenges to push you further while keeping it exciting. Win badges, brag rights, and even prizes.",
    },
    {
      id: "09",
      title: "Your Brain on Analytics",
      description:
        "Friendly academic challenges to push you further while keeping it exciting. Win badges, brag rights, and even prizes.",
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

      <div data-aos="zoom-in" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[44px] sm:mt-[44px] md:mt-[44px] lg:mt-[44px] xl:mt-[44px]">
        {features.map((feature, i) => (
          <div data-aos="zoom-in" 
            key={i}
            className="flex flex-col items-start rounded-xl px-4 py-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <p className="font-jakarta text-xs font-semibold text-[#767676]">{feature.id}</p>
            <h2 className="font-jakarta font-semibold text-xl  text-black mt-2">
              {feature.title}
            </h2>
            <p className=" font-inter text-base text-[#59646B] mt-2 text-left">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <div data-aos="zoom-in"  className="flex w-full items-start rounded-xl px-4 py-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <p className="font-jakarta font-normal text-xl text-black mt-2 text-left">
          That's just the start! Unlock more exclusive features like
          personalized learning, AI-driven insights, and a vibrant community –
          all designed to supercharge your academic journey!
        </p>
      </div>
      <h1 className="font-poppins font-bold text-4xl lg:text-4xl text-[#0062FF] leading-tight pt-10">
        Learn. Conquer. Thrive. Repeat{" "}
      </h1>
    </div>
  );
};

export default FeatureSection;
