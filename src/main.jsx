import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        catalog: "Каталог",
        delivery: "Доставка",
        terms: "Условия",
        contacts: "Контакты",
      },
    },
    uz: {
      translation: {
        catalog: "Katalog",
        delivery: "Yetkazib berish",
        terms: "Shartlar",
        contscts: "Aloqa",
      },
    },
  },
  lng: "ru",
  fallbackLng: "ru",

  detection: {
    order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
    lookupLocalStorage: "i18nextLng",
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
