export default function TestimonialsStats() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
        <div className="lg:col-span-5 lg:col-start-1">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl text-gray-800 font-bold lg:text-4xl">
              Pengajar Berkualitas dan Berpengalaman
            </h2>
            <p className="text-gray-600">
              Kami menghadirkan pendidikan berkualitas tinggi dengan dukungan
              guru-guru ahli yang menguasai materi pembelajaran. Mereka
              memastikan setiap materi disampaikan dengan jelas dan mudah
              dipahami, sehingga santri dapat belajar secara efektif dan tepat
              sasaran.
            </p>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
          <div className="space-y-6 sm:space-y-8">
            <ul className="grid grid-cols-2 divide-y-2 divide-x-2 divide-gray-200 overflow-hidden">
              <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
                  90 %
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  Pengajar kami adalah lulusan S2 yang berkompeten di bidangnya
                </p>
              </li>

              <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
                  1:30
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  Rasio ideal antara guru dan santri, memastikan perhatian yang
                  cukup untuk setiap individu
                </p>
              </li>

              <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
                  24/7
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  Akses bimbingan belajar sepanjang waktu untuk mendukung proses
                  pembelajaran
                </p>
              </li>

              <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
                  100%
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  Tingkat pemahaman santri yang optimal terhadap materi
                  pelajaran
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
