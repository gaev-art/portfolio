import React from "react";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();
  return <div> {t("my_projects")}</div>;
};
