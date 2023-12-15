import { NavLink } from "react-router-dom";
import { navData } from "./navData";
import Paper from "./Paper";
import { GoBell } from "react-icons/go";
import { SlMagnifier } from "react-icons/sl";
import { CiSettings } from "react-icons/ci";
import { motion } from "framer-motion";
import { motion_nav } from "../../utils/fremer.motion";
import Dropdown from "../Dropdown/Dropdown";

const DashboardNavbar = () => {
  return (
    <main className="bg-[#6941C6] text-zinc-50 p-4">
      <div className="max-w-screen-xl mx-auto p-2">
        <section className="flex items-center justify-between">
          {/* logo & route section */}
          <nav className="flex items-center gap-16">
            {/* logo section  */}
            <div className="flex items-center gap-3">
              <Paper />
              <h4 className="font-bold text-xl">Stack</h4>
            </div>
            {/* route section  */}
            <ul className="flex items-center gap-10">
              {navData?.map(({ path, label }, _i) => (
                <motion.li {...motion_nav} key={_i}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-zinc-50/20 p-2 rounded transition-all duration-500"
                        : "p-2"
                    }
                    to={`/${path}`}
                  >
                    {label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* login section  */}
          <motion.div {...motion_nav} className="flex items-center gap-6">
            <SlMagnifier size={21} />
            <button>
              <GoBell size={21} />
            </button>
            <button>
              <CiSettings size={23} />
            </button>
            <>
              <Dropdown />
            </>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default DashboardNavbar;
