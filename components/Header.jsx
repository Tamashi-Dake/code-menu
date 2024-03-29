import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SignInBtn from "./SignInBtn";
import { Clock } from "lucide-react";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#76ACFD] text-white md:sticky top-0 z-50  rounded-sm ">
      <nav
        className=" flex w-full  justify-between px-4 sm:px-6 lg:px-0 lg:pl-8 "
        aria-label="Global"
      >
        <a href="/" className="flex items-center py-4">
          <Clock />
          <span className=" font-bold tektur text-2xl ">TODENU</span>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:w-[580px] lg:h-full ">
          <a
            href="/"
            className="grow w-[80px] text-center text-base leading-6 py-6 px-10 font-extrabold hover:bg-white hover:text-[#76ACFD] transition-all duration-300 ease-linears"
          >
            HOME
          </a>
          <a
            href="/tasks"
            className="grow w-[80px] text-center text-base font-extrabold leading-6 py-6 px-10 hover:bg-white hover:text-[#76ACFD] transition-all duration-300 ease-linears"
          >
            TASKS
          </a>

          {/* <a href="#" className="text-lg font-extrabold leading-6 ">
            Profile
          </a> */}
          <a
            href="/about"
            className="grow w-[80px] text-center text-base font-extrabold leading-6 py-6 px-10 hover:bg-white hover:text-[#76ACFD] transition-all duration-300 ease-linears"
          >
            ABOUT US
          </a>
        </Popover.Group>
        <div className="hidden lg:flex items-center lg:pr-4 ">
          <SignInBtn></SignInBtn>
        </div>
      </nav>

      {/* Mobile */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/about" className="-m-1.5 p-1.5">
              <span className="sr-only">Todenu</span>
              <img
                className="h-8 w-auto"
                src="https://img.freepik.com/premium-vector/wall-clock-logo-icon_414847-367.jpg"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-extrabold leading-7  hover:bg-gray-50"
                >
                  HOME
                </a>
                <a
                  href="/tasks"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-extrabold leading-7  hover:bg-gray-50"
                >
                  YOUR TASKS
                </a>
                {/* <a
                  href="/profile"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-extrabold leading-7  hover:bg-gray-50"
                >
                  Profile
                </a> */}
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-extrabold leading-7  hover:bg-gray-50"
                >
                  ABOUT US
                </a>
              </div>
              <div className="py-6">
                <SignInBtn />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
export default Header;
