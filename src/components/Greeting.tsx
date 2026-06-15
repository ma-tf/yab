import { useState } from "preact/hooks";

interface Props {
  messages: string[];
}

export default function Greeting({ messages }: Props) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button
        class="border border-gray-400 rounded bg-white px-3 py-1 cursor-pointer hover:bg-gray-100"
        onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </button>
    </div>
  );
}
