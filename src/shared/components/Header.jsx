import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Icon } from "./Icon";
import { icons } from "../shared.constants";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const [isActive, setIsActive] = React.useState(false);
  const [languages, setLanguages] = React.useState(["ru", "en"]);
  const [language, setLanguage] = React.useState(i18n.language);

  const openMenu = () => {
    setIsActive(true);
    setLanguages([language, ...languages.filter((el) => el !== language)]);
  };

  return (
    <div
      style={{ boxShadow: "0 0 5px rgba(255, 255, 255, 0.5)" }}
      className="flex h-[70px] justify-between items-center gap-10 w-full"
    >
      <div className="flex gap-5 mx-5">
        {icons.map((icon) => (
          <Icon key={icon.href} href={icon.href} icon={icon.icon} />
        ))}
      </div>
      <div className="flex gap-10">
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
      </div>
      <div className="flex justify-end relative mx-5">
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
            {languages.map((language, index) => (
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
  );
};
