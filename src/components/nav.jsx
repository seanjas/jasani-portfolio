


const Nav = () => {
    return (
      <nav className="bg-gray-900 text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-5 md:p-8">
       
          <div className="font-mono text-3xl tracking-wider font-bold">
            Jasani
          </div>
  
      
          <div className="space-x-6 hidden md:flex">
            <a href="#home" className="hover:bg-gray-700 px-4 py-2 rounded-full transition duration-300">About</a>
            <a href="#resume" className="hover:bg-gray-700 px-4 py-2 rounded-full transition duration-300">Resume</a>
            <a href="#certifications" className="hover:bg-gray-700 px-4 py-2 rounded-full transition duration-300">Certifications</a>
            <a href="#projects" className="hover:bg-gray-700 px-4 py-2 rounded-full transition duration-300">Projects</a>
          </div>
  
          <button className="md:hidden text-2xl focus:outline-none" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        
        <div className="md:hidden bg-gray-800 text-white">
          <a href="#home" className="block px-4 py-2 hover:bg-gray-700">Home</a>
          <a href="#resume" className="block px-4 py-2 hover:bg-gray-700">Resume</a>
          <a href="#certifications" className="block px-4 py-2 hover:bg-gray-700">Certifications</a>
          <a href="#projects" className="block px-4 py-2 hover:bg-gray-700">Projects</a>
        </div>
      </nav>
        
      
    );
  };
  
  export default Nav;