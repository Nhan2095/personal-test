import Image from "next/image";
import bloc_3_img1 from "@/assets/images/bloc_3_img1.png";
import bloc_3_img2 from "@/assets/images/bloc_3_img2.png";
import bloc_3_img3 from "@/assets/images/bloc_3_img3.png";
import bloc_3_img4 from "@/assets/images/bloc_3_img4.png";

interface Props {
  bloc_3: {
    title: string;
    more_info: string;
    cases: {
      category: string;
      tagline: string;
      description: string;
    }[];
  };
}

export default function Bloc3({ bloc_3 }: Props) {
  const images = [bloc_3_img1, bloc_3_img2, bloc_3_img3, bloc_3_img4];
  return (
    <div className="py-10 px-5 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-orange-600">{bloc_3.title}</h2>
        <a
          href="/more-info"
          className="text-[#666666] hover:text-orange-500 text-sm flex items-center"
        >
          {bloc_3.more_info} <span className="ml-1">→</span>
        </a>
      </div>

      <div className="flex overflow-x-auto space-x-6 pb-4">
        {bloc_3.cases.slice(0, 4).map((item, index) => (
          <div key={index} className="bg-white overflow-hidden min-w-[300px]">
            <Image
              src={images[index] || bloc_3_img4}
              alt=""
              className="min-w-[340px] w-[340px] h-[340px] object-cover border-8 border-white rounded-lg"
            />

            <div className="p-4">
              <p className="text-orange-500 font-semibold text-sm">
                {item.category}
              </p>
              <h3 className="text-lg font-bold mt-1">{item.tagline}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
