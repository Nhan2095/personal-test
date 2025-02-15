"use client";
import { useState } from "react";
import useFetchPageData from "./components/useFetchPageData";
import LanguageSwitcher from "./components/LanguageSwitcher";
import HeaderMenu from "./components/header";
import HeroBanner from "./components/heroBanner";
import TitreBloc from "./components/titreBloc";
import TitreBloc2 from "./components/titreBloc2";
import Bloc3 from "./components/bloc3";
import Bloc4 from "./components/bloc4";

export default function Home() {
  const [language, setLanguage] = useState("en");
  const pageData = useFetchPageData(language);

  if (!pageData) return <p>Loading...</p>;
  console.log("Current language:", language);
console.log("Fetched pageData:", pageData);
console.log("Bloc3 data before render:", pageData?.bloc_3);


  return (
    <div className="flex flex-col items-center">
      <HeaderMenu
        menuItems={pageData.head_menu}
        onLanguageChange={setLanguage}
      />

      <LanguageSwitcher onLanguageChange={setLanguage} />

      <HeroBanner banner_menu={pageData.banner_menu} />

      <TitreBloc
        bloc_1={pageData?.bloc_1 || { title: "Loading...", subtitle: "" }}
      />

      <TitreBloc2 bloc_2={pageData?.bloc_2 ?? { title: "", cases: [] }} />

      <Bloc3
        bloc_3={pageData?.bloc_3 ?? { title: "", more_info: "", cases: [] }}
      />

      <Bloc4
        bloc_4={
          pageData?.bloc_4 ?? {
            title: "",
            subtitle: "",
            text_title: "",
            text: "",
            pictos: [],
          }
        }
      />
    </div>
  );
}
