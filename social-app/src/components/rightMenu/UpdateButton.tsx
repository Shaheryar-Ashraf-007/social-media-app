"use client";

import { useFormStatus } from "react-dom";

const UpdateButton = () => {
  const { pending } = useFormStatus();

  return (
    <div className="flex items-center justify-center">
    <button
      className="bg-blue-500 p-2 mt-[-12px] rounded-md text-white disabled:bg-opacity-50 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? "Updating..." : "Update"}
    </button>
    </div>
  );
};

export default UpdateButton;