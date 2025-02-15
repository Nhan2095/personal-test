import Image from "next/image";
import mountains from "@/assets/images/Mountains.png";
import Fishing from "@/assets/images/Fishing.png";
import Crosshair from "@/assets/images/Crosshair.png";
import Button from "../button";
import LanguageSwitcher from "../LanguageSwitcher";

type Props = {
  menuItems: string[];
  onLanguageChange: (lang: string) => void;
};

export default function HeaderMenu({ menuItems, onLanguageChange }: Props) {
  return (
    <div className="bg-[#562C2CB2] backdrop-opacity-10 h-[72px] w-full fixed top-0 left-0 z-50">
      <div className="max-w-[calc(100%-696px)] mx-auto h-full flex items-center justify-between gap-x-6 whitespace-nowrap">
        <div className="text-white font-medium text-xl">LOGO SAMPLE</div>
        <nav className="flex space-x-6">
          {menuItems.slice(0, 4).map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-white hover:text-[#F2542D] font-medium text-xl"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex gap-4">
          <Image src={mountains} alt="Mountains" width={28} height={28} />
          <Image src={Fishing} alt="Fishing" width={28} height={28} />
          <Image src={Crosshair} alt="Crosshair" width={28} height={28} />
        </div>

        <LanguageSwitcher onLanguageChange={onLanguageChange} />

        <Button
          text={menuItems[4] || ""}
          onClick={() => {
            console.log("Button was pressed");
          }}
        />
      </div>
    </div>
  );
}
