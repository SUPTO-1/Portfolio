const Features = () => {
  return (
    <section id="services" className="">
      <div className="container flex flex-col justify-center mb-10 text-white lg:mt-32 px-4 py-8 mx-auto md:p-8">
        <h2 className="text-3xl text-center mb-8 text-[#8a54f8] font-bold sm:text-4xl">
          My <span className="#ac86fa">Quality Services</span>{" "}
        </h2>
        <p className="mt-4 mb-14 text-xl text-center">
          Explore My services, designed to meet diverse needs with tailored
          solutions and expert support for unparalleled satisfaction!
        </p>
        <div className="space-y-4">
          <details className="w-full border-b-[1px] border-[#8953f7] hover:bg-[#321962]">
            <summary className="px-10 py-10 text-xl md:text-3xl font-poppins font-medium md:font-bold focus:outline-none focus-visible:dark:ring-violet-600">
              Front End Development
            </summary>
            <p className="px-4 py-6 text-sm md:text-lg pt-0 ml-4 -mt-4">
              A dedicated front-end developer with expertise in HTML, CSS,
              Tailwind, React, and JavaScript. Specializes in creating dynamic,
              responsive user interfaces with a keen eye for design and
              performance. Proficient in Object-Oriented Programming (C++) and
              experienced in backend technologies like Node.js, Express, and
              MongoDB. Committed to delivering exceptional user experiences and
              robust web applications.
            </p>
          </details>
          <details className="w-full border-b-[1px] border-[#8953f7] hover:bg-[#321962]">
            <summary className="px-10 py-10 text-xl md:text-3xl font-poppins font-medium md:font-bold focus:outline-none focus-visible:dark:ring-violet-600">
              Problem Solving
            </summary>
            <p className="px-4 py-6  text-sm md:text-lg pt-0 ml-4 -mt-4 ">
              An experienced problem solver with over 850+ problems solved on
              platforms like Codeforces, LeetCode, CodeChef, and HackerRank.
              Proficient in C and C++, with strong analytical and algorithmic
              skills. Demonstrates a deep understanding of data structures and
              efficient coding practices. Known for tackling complex challenges
              and providing optimized solutions, showcasing a commitment to
              continuous learning and improvement in problem-solving techniques.{" "}
            </p>
          </details>
          <details className="w-full border-b-[1px] border-[#8953f7] hover:bg-[#321962]">
            <summary className="px-10 py-10 text-xl md:text-3xl font-poppins font-medium md:font-bold focus:outline-none focus-visible:dark:ring-violet-600">
              Teaching Programming
            </summary>
            <p className="px-4 text-sm md:text-lg py-6 pt-0 ml-4 -mt-4">
              An experienced instructor in C and C++ programming languages,
              adept at teaching and guiding students through foundational
              concepts and advanced techniques. Currently expanding expertise in
              Object-Oriented Programming, enhancing skills to effectively
              convey programming principles and foster comprehensive learning
              experiences.{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Features;
