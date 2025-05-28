import { IoMdOptions } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";

const LeftDrawer = () => {
return (
    <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <label
                htmlFor="my-drawer"
                className="btn outline-none drawer-button bg-transparent fixed top-4 left-0 z-50"
                style={{ boxShadow: "none", border: "none" }}
            >
                <IoMdOptions size={24} />
            </label>
        </div>
        <div className="drawer-side">
            <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
            ></label>
            <div className="flex flex-col bg-base-200 w-80 min-h-full text-base-content p-4 mt-12">
                <p className="mb-6">Recent</p>
                <ul className="menu flex-1">
                    {[
                        "Trip Planning to Bali",
                        "Recipe Ideas for Dinner",
                        'Summarize "The Great Gatsby"',
                        "Brainstorming Marketing Slogans",
                        "Learning React Hooks",
                        "Fixing My Leaky Faucet",
                        "Gift Ideas for a Friend",
                        "Workout Routine for Beginners",
                        "Latest AI News",
                        "Help with My Resume",
                    ].map((item, idx) => (
                        <li key={idx} className="group relative">
                            <div className="flex items-center justify-between">
                                <a
                                    className="relative"
                                    tabIndex={0}
                                >
                                    {item}
                                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 whitespace-nowrap">
                                        {item}
                                    </span>
                                </a>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2">
                                    <SlOptionsVertical size={16} />
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);
};

export default LeftDrawer;
