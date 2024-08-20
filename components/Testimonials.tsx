import Image from "next/image";
import AvatarImage from "@/assets/images/koordinator.png";

export default function Testimonials() {
  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600 p-4">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-10 lg:gap-16">
          <div className="mb-24 hidden sm:px-6 md:mb-0 md:block">
            <div className="relative">
              <Image
                width={500}
                height={500}
                className="rounded-xl"
                src={AvatarImage}
                alt="Avatar"
              />
            </div>
          </div>

          <div>
            <blockquote className="relative">
              <div className="relative z-10">
                <p className="mb-4 text-3xl font-bold text-gray-800 sm:text-2xl lg:text-3xl lg:leading-tight">
                  Ahlan wa sahlan!
                </p>
                <p className="lg:text-md text-xl font-medium italic text-gray-800 sm:text-2xl">
                  Madrasah Bertaraf Internasional (MBI) Amanatul Ummah! Sejak
                  2006, MBI telah menjadi pusat unggulan pendidikan,
                  mempersiapkan santri untuk sukses di perguruan tinggi
                  terkemuka, lembaga pendidikan kedinasan, dan universitas
                  internasional. Banyak lulusan kami yang meraih beasiswa penuh
                  dan prestasi di berbagai tingkat. Mari bergabung dan jadilah
                  bagian dari kesuksesan kami!
                </p>
              </div>

              <div className="mt-6">
                <div className="flex items-center">
                  <div className="shrink-0 md:hidden">
                    <Image
                      width={500}
                      height={500}
                      className="size-12 rounded-full"
                      src={AvatarImage}
                      alt="Avatar"
                    />
                  </div>
                  <div className="ms-4 md:ms-0">
                    <div className="text-base font-semibold text-gray-800">
                      Gus H.Muhammad Ilyas, Lc., M.A.
                    </div>
                    <div className="text-base font-medium text-gray-800">
                      Koordinator MBI Amanatul Ummah
                    </div>
                  </div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
