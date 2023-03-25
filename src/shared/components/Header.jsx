import React, { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { icons } from "../shared.constants";
import { Icon } from "./Icon";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const [isActive, setIsActive] = React.useState(false);
  const [languages, setLanguages] = React.useState(["ru", "en"]);
  const [language, setLanguage] = React.useState(i18n.language);

  const openMenu = () => {
    setIsActive(true);
    setLanguages([language, ...languages.filter((el) => el !== language)]);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex w-screen items-center justify-around">
      <nav className="w-full flex items-center justify-around fixed top-3">
        <div className="flex lg:flex-1 gap-7 hidden lg:flex ml-5">
          {icons.map((icon) => (
            <Icon key={icon.href} href={icon.href} icon={icon.icon} />
          ))}
        </div>
        <div className="flex-1 lg:flex flex lg:hidden" />
        <div className="flex lg:hidden my-3 mx-6 fixed right-0 top-1">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-gray-700 scale-150"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <NavLink
            to="/aboutMe"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-[#4a4a4a] hover:text-white"
            }
          >
            {t("about_me")}
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-[#4a4a4a] hover:text-white"
            }
          >
            {t("my_projects")}
          </NavLink>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end relative mr-5">
          <div
            onClick={openMenu}
            className="flex w-[60px] h-[28px] justify-center rounded-[10px] items-center p-1"
            style={{
              boxShadow: !isActive ? "0 0 2px rgba(255, 255, 255, 0.5)" : null,
            }}
          >
            <span className="uppercase font-bold">{language}</span>
          </div>
          <div
            onMouseLeave={() => setIsActive(false)}
            style={{ boxShadow: "0 0 2px rgba(255, 255, 255, 0.5)" }}
            className={
              isActive
                ? "flex absolute right-0 top-0 bg-[#000000] w-[60px] justify-center rounded-[10px] items-center p-1"
                : "hidden"
            }
          >
            <ul>
              {languages.map((language) => (
                <li
                  key={language}
                  onClick={() => {
                    setLanguage(language);
                    i18n.changeLanguage(language).then();
                    setIsActive(false);
                  }}
                >
                  <span className="uppercase font-bold text-[#4a4a4a] hover:text-white">
                    {language}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 relative" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full  overflow-y-auto bg-[#000000] px-6 py-3 sm:max-w-lg sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center  justify-end">
            <button
              className="rounded-md text-gray-700 scale-150"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex flex-row">
                <div className="space-y-2 py-2 flex-1 relative">
                  <NavLink
                    to="/aboutMe"
                    className="block w-9/12 rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black uppercase"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("about_me")}
                  </NavLink>
                  <NavLink
                    to="/projects"
                    className=" block w-9/12 rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black uppercase"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("my_projects")}
                  </NavLink>
                  <div className="flex flex-1 justify-end items-center ">
                    <div
                      onClick={openMenu}
                      className="flex w-[60px] h-[28px] justify-center rounded-[10px] items-center p-1 absolute right-0 top-7"
                      style={{
                        boxShadow: !isActive
                          ? "0 0 2px rgba(255, 255, 255, 0.5)"
                          : null,
                      }}
                    >
                      <span className="uppercase font-bold">{language}</span>
                    </div>
                    <div
                      onMouseLeave={() => setIsActive(false)}
                      style={{ boxShadow: "0 0 2px rgba(255, 255, 255, 0.5)" }}
                      className={
                        isActive
                          ? "flex absolute right-0 top-7 bg-[#000000] w-[60px] justify-center rounded-[10px] items-center p-1"
                          : "hidden"
                      }
                    >
                      <ul>
                        {languages.map((language) => (
                          <li
                            key={language}
                            onClick={() => {
                              setLanguage(language);
                              i18n.changeLanguage(language).then();
                              setIsActive(false);
                            }}
                          >
                            <span className="uppercase font-bold text-[#4a4a4a] hover:text-white">
                              {language}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-8 flex items-center justify-center">
                <div className="flex lg:flex-1 gap-10">
                  {icons.map((icon) => (
                    <Icon key={icon.href} href={icon.href} icon={icon.icon} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
