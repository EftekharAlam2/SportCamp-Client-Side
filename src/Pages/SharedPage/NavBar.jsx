import { Link } from "react-router-dom";

const NavBar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
    </>
  );
  return (
    <div className="navbar h-28 mb-4 bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <img
          src="https://i.ibb.co/P1P4vBP/logo.png"
          alt="Website Logo"
          className="h-12 w-auto"
        />
        <a className="btn btn-ghost normal-case text-xl pb-1">SportCamp</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {/* <div
          className="pr-4 relative"
          onMouseEnter={() => setShowName(true)}
          onMouseLeave={() => setShowName(false)}
        >
          {user && (
            <img className=" w-12 rounded-full" src={user.photoURL} alt="" />
          )}
          {showName && user && (
            <div className="absolute top-0 left-0 bg-white rounded-md py-1 px-2 shadow-md">
              {user.displayName}
            </div>
          )}
        </div> */}
        <div>
          {/* {user ? (
            <div>
              <button className="btn btn-outline btn-accent" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline btn-accent">Login</button>
            </Link>
          )} */}
          <button className="btn btn-outline btn-accent">Login</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
