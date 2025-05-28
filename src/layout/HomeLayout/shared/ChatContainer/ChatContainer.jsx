import PromptBox from "../PromptBox/PromptBox";

const ChatContainer = () => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white">
      <h2 className="text-center text-2xl">
        Hello,{" "}
        <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Sazol Sarker
        </span>
      </h2>
      <p className="text-center text-gray-600 mb-4 mt-5 text-lg">
        How can I help you today?
      </p>
      {/* prompt box */}
      <div className="w-3/5 mx-auto">
        <PromptBox></PromptBox>
      </div>
    </div>
  );
};

export default ChatContainer;
