import avatar from '../assets/images/avatar.jpg'
const Navbar = () => {
    const links = (
        <>
            <li className="text-base decoration-1 font-montserrat hover:text-gray-400"><a>Home</a></li>
            <li className="text-base decoration-1 font-montserrat hover:text-gray-400"><a> Feature</a></li>
            <li className="text-base decoration-1 font-montserrat hover:text-gray-400"><a>Resume</a></li>
            <li className="text-base decoration-1 font-montserrat hover:text-gray-400"><a>Portfolio</a></li>
            <li className="text-base decoration-1 font-montserrat hover:text-gray-400"><a>Contact</a></li>
        </>
    )
  return (
    <div className="navbar text-white mt-3 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {
                links
            }
          </ul>
        </div>
        <div className="avatar">
  <div className="w-16 md:mr-4 rounded-full">
    <img src={avatar} />
  </div>
</div>
        <a className="text-xl font-robotoMono">Jahidul</a>
      </div>
      <div className="navbar-end">
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal">
            {
                links
            }
        </ul>
      </div>
        <a className="btn bg-[#2b125c] font-kurale text-lg px-4 border-0 text-white shadow-2xl hover:bg-[#5f2cbf] ">Hire Me!</a>
      </div>
    </div>
  );
};

export default Navbar;
