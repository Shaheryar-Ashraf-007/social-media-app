"use client";

import { User } from '@prisma/client';
import { useActionState, useState, useTransition, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { updateProfile } from '@/lib/actions';
import Image from 'next/image';
import UpdateButton from './UpdateButton';
import { CldUploadWidget } from "next-cloudinary";

const UpdateUser = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState<any>(user.cover || "/image7.jpg");
  const [state, formAction] = useActionState(updateProfile, { success: false, error: false });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      setOpen(false);
      router.refresh();
    }
  }, [state.success, router]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      formAction({
        formData: new FormData(e.target as HTMLFormElement),
        cover:typeof cover === 'string' ? cover : "/image7.jpg",
      });
    });
  };

  return (
    <div>
      <span
        className="text-blue-500 text-xs cursor-pointer hover:underline"
        onClick={() => setOpen(true)}
      >
        Update
      </span>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 md:p-10 lg:p-12 bg-white rounded-lg shadow-lg max-w-md mx-auto w-full scrollbar-hidden relative transform transition-all duration-300 ease-in-out scale-95 hover:scale-100 overflow-y-auto max-h-screen"
          >
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Update Profile</h1>
            <div className="mt-2 text-xs text-gray-500">
              Use the navbar profile to change the avatar or username.
            </div>

            {/* Cover Picture Section */}
            <CldUploadWidget
              uploadPreset="social"
              onSuccess={(result) => {
                console.log(result);
                setCover(result.info.secure_url); 
              }}
            >
              {({ open }) => {
                return (
                  <div
                    className="flex flex-col gap-4 my-4"
                    onClick={() => open()}
                  >
                    <label htmlFor="">Cover Picture</label>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src={cover || user.cover || "/image7.jpg"}
                        alt="cover"
                        width={48}
                        height={32}
                        className="w-12 h-8 rounded-md object-cover"
                      />
                      <span className="text-xs underline text-gray-600">
                        Change
                      </span>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>

            {/* User Information Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-xs text-gray-500">First Name</label>
                <input
                  type="text"
                  defaultValue={user.name || ""}
                  className="ring-1 ring-gray-300 p-3 rounded-md text-sm"
                  name="name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="surname" className="text-xs text-gray-500">Surname</label>
                <input
                  type="text"
                  defaultValue={user.surname || ""}
                  className="ring-1 ring-gray-300 p-3 rounded-md text-sm"
                  name="surname"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col">
                <label htmlFor="description" className="text-xs text-gray-500">Description</label>
                <input
                  type="text"
                  defaultValue={user.description || ""}
                  className="ring-1 ring-gray-300 p-3 rounded-md text-sm"
                  name="description"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="city" className="text-xs text-gray-500">City</label>
                <input
                  type="text"
                  defaultValue={user.city || ""}
                  className="ring-1 ring-gray-300 p-3 rounded-md text-sm"
                  name="city"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="school" className="text-xs text-gray-500">School</label>
                <input
                  type="text"
                  defaultValue={user.school || ""}
                  className="ring-1 ring-gray-300 p-3 rounded-md text-sm"
                  name="school"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="work" className="text-xs text-gray-500">Work</label>
                <input
                  type="text"
                  defaultValue={user.work || ""}
                  className="ring-1 ring-gray-300 p-3 rounded-md text-sm"
                  name="work"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="website" className="text-xs text-gray-500">Website</label>
                <input
                  type="text"
                  defaultValue={user.website || ""}
                  className="ring-1 ring-gray-300 p-3 rounded-md text-sm"
                  name="website"
                />
              </div>
            </div>

            <UpdateButton isPending={isPending} />

            {state.success && (
              <span className="text-green-500 text-sm mt-4 block">Profile has been updated!</span>
            )}
            {state.error && (
              <span className="text-red-500 text-sm mt-4 block">Something went wrong!</span>
            )}

            <div
              className="absolute top-2 right-2 text-xl text-gray-600 cursor-pointer hover:text-red-500"
              onClick={handleClose}
            >
              &times;
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;