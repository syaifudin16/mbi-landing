import Image from "next/image";
import alAzhar from "@/assets/images/universities/alazhar.png";
import itb from "@/assets/images/universities/itb.png";
import its from "@/assets/images/universities/its.png";
import maroko from "@/assets/images/universities/maroko.png";
import nus from "@/assets/images/universities/nus.png";
import ugm from "@/assets/images/universities/ugm.png";
import ui from "@/assets/images/universities/ui.png";
import unair from "@/assets/images/universities/unair.png";
import unhan from "@/assets/images/universities/unhan.png";

const UniversitiesImage = [
  alAzhar,
  itb,
  its,
  maroko,
  nus,
  ugm,
  ui,
  unair,
  unhan,
];

export default function Universities() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div className="sm:text-center mx-auto text-center mb-4">
          <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-200">
            Lulusan kami setiap tahunnya berhasil diterima di perguruan tinggi
            terkemuka, baik di Indonesia maupun dunia.
          </h2>
        </div>
        <div className="my-8 md:my-16 grid grid-cols-3 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
          {UniversitiesImage.map((imageSrc, index) => (
            <a
              className="shrink-0 transition hover:-translate-y-1"
              href="#"
              key={index}
            >
              <Image
                className="rounded-lg"
                src={imageSrc}
                alt={`University logo ${index + 1}`}
                height={72}
                width={72}
              />
            </a>
          ))}
        </div>
        <div className="grid grid-cols-12 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
          <div className="col-span-6 text-center">
            <h4 className="text-xl md:text-3xl font-semibold text-gray-200">
              150+
            </h4>
            <h4 className="text-sm text-gray-100">
              Perguruan Tinggi Internasional
            </h4>
          </div>

          <div className="col-span-6 text-center">
            <h4 className="text-xl md:text-3xl font-semibold text-gray-200">
              200+
            </h4>
            <h4 className="text-sm text-gray-100">Perguruan Tinggi Terbaik</h4>
          </div>

          <div className="col-start-4 col-span-6 text-center">
            <h4 className="text-xl md:text-3xl font-semibold text-gray-200">
              150+
            </h4>
            <h4 className="text-sm text-gray-100">Kedinasan</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
