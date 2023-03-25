import React from "react";
import { useTranslation } from "react-i18next";

export const AboutMe = () => {
  const { t } = useTranslation();
  return <div> {t("about_me")}</div>;
};
