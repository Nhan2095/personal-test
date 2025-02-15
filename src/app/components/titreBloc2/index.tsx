import Image from "next/image";
import bloc2_icon1 from "@/assets/images/bloc2_icon1.png";
import bloc2_icon2 from "@/assets/images/bloc2_icon2.png";
import bloc2_icon3 from "@/assets/images/bloc2_icon3.png";
interface Props {
  bloc_2: {
    title: string;
    cases: string[];
  };
}

export default function TitreBloc2({ bloc_2 }: Props) {
  const images = [bloc2_icon1, bloc2_icon2, bloc2_icon3];

  return (
    <div className="text-center py-10 px-5">
      <div className="flex items-center justify-center gap-4">
        <div className="w-24 h-[2px] bg-gray-300"></div>
        <h2 className="text-3xl font-bold text-orange-600">{bloc_2.title}</h2>
        <div className="w-24 h-[2px] bg-gray-300"></div>
      </div>

      <div className="mt-6 flex flex-wrap gap-8 justify-center">
        {bloc_2.cases.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <Image
              src={images[index] || bloc2_icon3}
              alt=""
              className="w-6 h-6 object-contain"
            />
            <span className="text-lg text-gray-700 font-medium">{item}</span>
          </div>
        ))}
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2102191.3837547936!2d-70.80026105372546!3d48.640102653940104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1739616292048!5m2!1svi!2s"
        height="698"
        width="1240"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
