import { IoSend } from "react-icons/io5";
import { IoAttach } from "react-icons/io5";

const PromptBox = () => {
return (
    <div className="mt-4 relative">
        <textarea
            className="textarea textarea-bordered w-full h-24 mb-4 rounded-lg border-2 pr-10 focus:outline-none focus:border-inherit"
            placeholder="Ask MyGeminiAI anything..."
            rows={4}
            cols={50}
        />
        <button
            type="button"
            className="absolute bottom-8 left-4 text-gray-500 z-50"
            tabIndex={-1}
            style={{ background: "none", border: "none", padding: 0 }}
        >
            <IoAttach size={24} />
        </button>
        <button
            type="button"
            className="absolute bottom-8 right-4 text-red-500 z-50"
            tabIndex={-1}
            style={{ background: "none", border: "none", padding: 0 }}
        >
            <IoSend size={24} />
        </button>
    </div>
);
};

export default PromptBox;
