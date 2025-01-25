import React from "react";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <main className="flex flex-col items-center mt-10 space-y-10">
        <section className="text-center">
          <h2 className="text-3xl font-semibold">Welcome to LearnHub!</h2>
          <p className="text-gray-700 mt-4 px-6">
            Your one-stop solution for all your learning needs. Explore a wide
            range of courses, connect with experts, and enhance your skills.
          </p>
        </section>
        <section
          id="courses"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">Course Title 1</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula urna at libero consequat, ut vehicula purus luctus.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">Course Title 2</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula urna at libero consequat, ut vehicula purus luctus.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">Course Title 3</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula urna at libero consequat, ut vehicula purus luctus.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
