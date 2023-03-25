import React from "react";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();
  return <div className="mt-20 fa-layers-text"> {t("my_projects")}</div>;
};
