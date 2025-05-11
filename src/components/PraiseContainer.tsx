
import React from "react";
import PraiseMessage, { PraiseMessageProps } from "./PraiseMessage";

interface PraiseContainerProps {
  messages: Omit<PraiseMessageProps, "delay">[];
  userMessage: string;
}

const PraiseContainer: React.FC<PraiseContainerProps> = ({ messages, userMessage }) => {
  if (messages.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-md mt-6">
      <div className="bg-praise p-3 rounded-t-lg">
        <p className="text-center text-white font-medium">你说的话：</p>
        <p className="text-center text-white italic">{userMessage}</p>
      </div>
      <div className="max-h-[400px] overflow-y-auto p-3 bg-white rounded-b-lg shadow-lg">
        {messages.map((message, index) => (
          <PraiseMessage
            key={index}
            {...message}
            delay={index * 500}
          />
        ))}
      </div>
    </div>
  );
};

export default PraiseContainer;
