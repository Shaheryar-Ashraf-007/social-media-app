"use client";
import React, { useActionState, useState } from "react";
import Image from "next/image";
import { User } from "@prisma/client";
import { RxCross2 } from "react-icons/rx";
import "../../app/styles/globals.css";
import UpdateButton from "./UpdateButton";
import { updateProfile } from "@/lib/actions";
import { useRouter } from "next/navigation";

const UpdateUser = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState<any>(false);

  const [state, formAction] = useActionState(updateProfile,{success:false,error:false});

  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    state.success && router.refresh();
  };



  return (
    <div className="">
      <span
        className="text-blue-500 text-xs cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Update
      </span>

      {open && (
        <div className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50 ">
          <form action={(formData) =>
              formAction({ formData, cover: cover?.secure_url || "" })
            } className="bg-white p-6 rounded shadow-lg w-11/12 h-screen max-w-md overflow-y-auto scrollbar-hidden">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-semibold">Update Profile</h1>
              <RxCross2
                size={24}
                className="text-black cursor-pointer"
                onClick={handleClose}

              />
            </div>

            <div className="mb-4">Use the navbar profile to change the avatar or username</div>

            <div className="flex flex-col gap-4">
              <label htmlFor="cover-picture">Cover Picture</label>
              <div className="flex items-center gap-2 cursor-pointer">
                <Image
                  src={user.cover || "/image7.jpg"}
                  alt="Cover"
                  width={48}
                  height={32}
                  className="rounded-md w-12 h-12 object-cover"
                />
                <span className="text-xs underline text-gray-600">Change</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <label htmlFor="first-name" className="text-xs text-gray-500">First Name</label>
              <input
                type="text"
                id="first-name"
                placeholder={user.name || "John Doe"}
                className="border rounded p-2"
              />
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <label htmlFor="surname" className="text-xs text-gray-500">Surname</label>
              <input
                type="text"
                id="surname"
                placeholder={user.surname || "Doe"}
                className="border rounded p-2"
              />
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <label htmlFor="description" className="text-xs text-gray-500">Description</label>
              <input
                type="text"
                id="description"
                placeholder={user.description || "Life is beautiful ..."}
                className="border rounded p-2"
              />
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <label htmlFor="city" className="text-xs text-gray-500">City</label>
              <input
                type="text"
                id="city"
                placeholder={user.city || "FSD"}
                className="border rounded p-2"
              />
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <label htmlFor="school" className="text-xs text-gray-500">School</label>
              <input
                type="text"
                id="school"
                placeholder={user.school || "MIT"}
                className="border rounded p-2"
              />
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <label htmlFor="work" className="text-xs text-gray-500">Work</label>
              <input
                type="text"
                id="work"
                placeholder={user.work || "Amazon"}
                className="border rounded p-2"
              />
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <label htmlFor="website" className="text-xs text-gray-500">Website</label>
              <input
                type="text"
                id="website"
                placeholder={user.website || "example.com"}
                className="border rounded p-2"
              />
            </div>

            
            <UpdateButton/>
            {state.success && (
              <span className="text-green-500">Profile has been updated!</span>
            )}
            {state.error && (
              <span className="text-red-500">Something went wrong!</span>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;