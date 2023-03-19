import { useTranslation } from "react-i18next";

export const App = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => i18n.changeLanguage(language);
  return (
    <div>
      {t("Welcome to React")}
      {i18n.language === "ru" ? (
        <button onClick={() => changeLanguage("en")}>EN</button>
      ) : (
        <button onClick={() => changeLanguage("ru")}>RU</button>
      )}
    </div>
  );
};
