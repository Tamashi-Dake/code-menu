"use client";

import { Popover, Transition } from "@headlessui/react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

import { signIn, signOut, useSession } from "next-auth/react";

const SignInBtn = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
    signIn("google", { callbackUrl: process.env.NEXTAUTH_URL });
  };
  const { status, data: session } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <Popover className="relative">
          <Popover.Button
            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:bg-[#f5f8ff] transition-all duration-300 ease-linears"
            title={session?.user?.name}
          >
            <img
              src={session?.user?.image}
              alt="Google Image"
              width={40}
              height={40}
            />
            {session?.user?.name}
            <ChevronDownIcon
              className="h-5 w-5 "
              color="[#76ACFD]"
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -right-8 top-full z-5 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 ">
              <div className="p-4">
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <ArrowRightOnRectangleIcon
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-auto">
                    <button
                      onClick={() => signOut()}
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Log out
                    </button>
                    {/* <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p> */}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      ) : (
        <button
          onClick={handleSignIn}
          className="text-lg font-extrabold leading-6 py-6 px-4 hover:bg-white hover:text-[#76ACFD] transition-all duration-300 ease-linears"
        >
          LOG IN <span aria-hidden="true">&rarr;</span>
        </button>
      )}
    </>
  );
};

export default SignInBtn;
