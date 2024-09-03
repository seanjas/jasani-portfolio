const Resume = () => {
    return (
      <div id="resume" className="carousel carousel-center rounded-box py-10">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">RESUME</h1>
          <div className="bg-indigo-600 text-indigo-500 py-2 px-4 rounded-full mb-6">
            <h1 className="text-xl">_</h1>
          </div>
          <section className="space-y-8">
            <div className="carousel-item flex justify-center">
              <img
                src="/img/resume-1.png"
                alt="Resume Page 1"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="carousel-item flex justify-center">
              <img
                src="/img/resume-2.png" 
                alt="Resume Page 2"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </section>
        </div>
    );
  };
  
  export default Resume;
  