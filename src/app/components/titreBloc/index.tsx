import ButtonTitre from "../buttonTitre";
import Image from "next/image";
import card1 from "@/assets/images/card1.png";
import card2 from "@/assets/images/card2.png";
import card3 from "@/assets/images/card3.png";
type Props = {
  bloc_1: {
    title: string;
    subtitle: string;
    cases: {
      category: string;
      tagline: string;
      description: string;
      cta: string;
    }[];
  };
};

export default function TitreBloc({ bloc_1 }: Props) {
    const images = [card1, card2, card3];
  
    return (
      <div className="text-center py-10 px-5">
        <div className="flex items-center justify-center gap-4">
          <div className="w-24 h-[2px] bg-gray-300"></div>
          <h2 className="text-3xl font-bold text-orange-600">{bloc_1.title}</h2>
          <div className="w-24 h-[2px] bg-gray-300"></div>
        </div>
        <p className="text-gray-600 mt-2">{bloc_1.subtitle}</p>
  
        <div className="flex flex-col sm:px-4 md:flex-row md:justify-center md:gap-6 lg:flex-row lg:justify-between lg:px-[380px] pt-20">
          {bloc_1.cases.map((item, index) => (
            <div
              key={index}
              className={`bg-white overflow-hidden text-left transition-transform transform hover:scale-105
                ${index === 1 ? "sm:mt-0 md:mt-0 lg:-mt-10" : ""} mb-6 md:mb-0`}
            >
              <Image
                src={images[index] || card3}
                alt=""
                className="w-full h-auto md:w-[250px] md:h-[180px] lg:w-[320px] lg:h-[220px] mx-auto"
              />
              <div>
                <span className="text-xl font-medium text-[#F2542D] pb-1">
                  {item.category}
                </span>
                <h3 className="text-[28px] font-medium pb-4">{item.tagline}</h3>
                <p className="text-sm text-[#562C2CCC] pb-6">{item.description}</p>
                <ButtonTitre
                  text={item.cta || ""}
                  onClick={() => console.log(`Button clicked: ${item.cta}`)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  
