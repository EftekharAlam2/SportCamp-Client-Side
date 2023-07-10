import { Link } from "react-router-dom";
import err from "/error.gif";

export default function ErrorPage() {
  return (
    <div id="error-page" className="text-center text-4xl my-52">
      <div className=" flex justify-center">
        <div className="w-3/4 md:w-1/5">
          <img src={err} alt="" />
        </div>
      </div>
      <Link to="/">
        <button className="btn btn-outline btn-accent">
          Going to Home Page
        </button>
      </Link>
    </div>
  );
}
