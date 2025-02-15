import Image from "next/image";
import ice_cream from "@/assets/images/ice_cream.png";
import bloc_4_img1 from "@/assets/images/bloc_4_img1.png";
import bloc_4_img2 from "@/assets/images/bloc_4_img2.png";
import bloc_4_img3 from "@/assets/images/bloc_4_img3.png";
import bloc_4_img4 from "@/assets/images/bloc_4_img4.png";
import bloc_4_img5 from "@/assets/images/bloc_4_img5.png";
interface Props {
  bloc_4: {
    title: string;
    subtitle: string;
    text_title: string;
    text: string;
    pictos: {
      title: string;
      description: string;
    }[];
  };
}

export default function Bloc4({ bloc_4 }: Props) {
  const images = [
    bloc_4_img1,
    bloc_4_img2,
    bloc_4_img3,
    bloc_4_img4,
    bloc_4_img5,
  ];
  return (
    <section className="max-w-[1240px] mx-auto px-8 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 pr-8">
          <h2 className="text-4xl font-bold text-[#F2542D] leading-tight">
            {bloc_4.title}
          </h2>
          <h3 className="text-3xl font-semibold text-orange-400 mt-2">
            {bloc_4.subtitle}
          </h3>
          <hr className="my-4 w-16 border-gray-400" />
          <div className="pl-20">
            <h4 className="text-xl text-[#562C2C] font-bold ">
              {bloc_4.text_title}
            </h4>
            <p className="text-[#562C2CCC] mt-2 leading-relaxed max-w-[584px]">
              {bloc_4.text}
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-end">
          <Image
            src={ice_cream}
            alt="Gastronomic Experience"
            width={503}
            height={574}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12 w-full text-center">
        {bloc_4.pictos.map((picto, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-teal-600 text-white rounded-full">
              <Image
                src={images[index] || bloc_4_img5}
                alt={picto.title}
                width={48}
                height={48}
                className="w-8 h-8"
              />
            </div>
            <h5 className="text-lg text-[#562C2C] font-semibold mt-2">{picto.title}</h5>
            <p className="text-gray-500 text-sm">{picto.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
