import React, { ReactNode } from "react";

interface CardComponentProps {
  children: ReactNode;
  title: string;
}

export default function CardComponent({ children, title }: CardComponentProps) {
  return (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[30rem] max-h-[30rem] overflow-y-auto">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        {title}
      </h5>
      {children}
    </div>
  );
}
