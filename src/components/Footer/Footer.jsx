import { Link } from "react-router-dom";
import { FaDeviantart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white px-4 py-6 mx-auto  md:px-24 lg:px-8 pt-20">
      <div className="w-11/12 lg:w-11/12 md:w-11/12 xl:container  mx-auto">
        <div className="grid gap-10 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center lg:text-3xl text-xl font-extrabold text-blue-600 -ml-4"
              >
                <FaDeviantart className="lg:text-4xl text-xl text-blue-600" />{" "}
                Artifacts<span className="text-gray-100">Tracker</span>
              </Link>
            </div>
            <div className="mt-4 text-gray-400">
              <p className="text-sm">
                Explore artifacts from all around the world and discover the
                stories behind them. Join our community and contribute to the
                preservation of history.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
            <div>
              <p className="font-semibold tracking-wide">Services</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="artifacts"
                    className="transition-colors duration-300 hover:text-teal-400"
                  >
                    All Artifacts
                  </a>
                </li>
                <li>
                  <a
                    href="/liked-artifacts"
                    className="transition-colors duration-300 hover:text-teal-400"
                  >
                    Liked Artifacts
                  </a>
                </li>
                <li>
                  <a
                    href="/my-artifacts"
                    className="transition-colors duration-300 hover:text-teal-400"
                  >
                    My Artifacts
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide">Resources</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="add-artifact"
                    className="transition-colors duration-300 hover:text-teal-400"
                  >
                    Add Artifact
                  </a>
                </li>
                <li>
                  <a
                    href="/register"
                    className="transition-colors duration-300 hover:text-teal-400"
                  >
                    Register
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    className="transition-colors duration-300 hover:text-teal-400"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide">Follow Us</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="https://www.facebook.com"
                    className="transition-colors duration-300 hover:text-teal-400"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    className="transition-colors duration-300 hover:text-teal-400"
                  >
                    Twitter
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com"
                    className="transition-colors duration-300 hover:text-teal-400"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center pt-5 border-t border-gray-700 sm:flex-row">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Artifacts Tracker. All rights reserved.
            <br />
            Designed by{" "}
            <a
              target="_blank"
              href="https://www.mdranju.xyz"
              className="text-blue-400"
            >
              Md Ranju
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
