"use client";
import React from "react";
import DeepDiveModal from "../DeepDiveModal";

type QuickScanCardProps = {
  concept: string | null;
  content: string | null;
};

const QuickScanCard = ({ concept, content }: QuickScanCardProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="mb-8 p-4 bg-white rounded shadow">
      <span
        className="bg-black text-white text-xs
       font-semibold mr-2 px-2.5 py-0.5 rounded"
      >
        Quick Scan
      </span>
      <h3 className="text-xl font-bold mb-2 mt-2">{concept}</h3>
      <p className="text-gray-600">{content}</p>
      <div className="mt-4 flex gap-x-4">
        <button
          className="bg-transparent text-black underline"
          onClick={() => setOpen(true)}
        >
          Deep Dive
        </button>
        <a
          className="bg-transparent text-black underline"
          href="/feeling-curious"
        >
          Feeling Curious
        </a>
      </div>
      {open && concept && content && (
        <DeepDiveModal
          isOpen={open}
          title={concept}
          content={content}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default QuickScanCard;
