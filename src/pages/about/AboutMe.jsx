import React from "react";
import { useTranslation } from "react-i18next";

export const AboutMe = () => {
  const { t } = useTranslation();
  return <div className="mt-20 fa-layers-text">{t("about_me")}</div>;
};
