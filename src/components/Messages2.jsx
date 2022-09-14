import ScrollToBottom from "react-scroll-to-bottom";

const Messages = ({ messages }) => {
  return (
    <ScrollToBottom className="">
      <ul className="px-3 mt-20 flex flex-col relative mb-16 overflow-auto h-[calc(100vh_-_145px)] hide-scroll-bar pb-1">
        {messages.map((m) => {
          return (
            <div
              key={m.id}
              className={`mb-1 ${
                m.type === "send" ? "chat-rtl self-end" : "chat-ltr self-start"
              }`}
            >
              <li className="flex items-center mt-2 ">
                <h2
                  className={`text-md text-white w-max ${
                    m.type === "send" ? "bg-blue-500" : "bg-slate-700"
                  } rounded px-3 py-1`}
                >
                  {m.text}
                </h2>
              </li>
            </div>
          );
        })}
      </ul>
    </ScrollToBottom>
  );
};

export default Messages;
