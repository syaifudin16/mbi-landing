export default function Objectives() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl md:text-3xl text-gray-800">
            Santri untuk Masa Depan
          </h2>
          <p className="mt-2 md:mt-4 text-gray-500 text-justify">
            Santri Masa Depan adalah generasi yang bercita-cita tinggi untuk
            menjadi ulama terkemuka, pemimpin global yang adil, konglomerat yang
            berkontribusi besar bagi bangsa, dan profesional yang bertanggung
            jawab. Mereka berkomitmen untuk menerangi dunia dengan ilmu dan
            kebijaksanaan, serta mewujudkan kesejahteraan dan keadilan di
            Indonesia dan dunia.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-6 text-emerald-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="10" x="3" y="11" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" x2="8" y1="16" y2="16" />
                <line x1="16" x2="16" y1="16" y2="16" />
              </svg>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800">
                  Ulama Besar
                </h3>
                <p className="mt-1 text-gray-600">
                  Menjadi Ulama-ulama besar yang bisa menerangi dunia dan
                  Indonesia.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-6 text-emerald-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 10v12" />
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800">
                  Pemimpin
                </h3>
                <p className="mt-1 text-gray-600 ">
                  Menjadi Para Pemimpin Dunia on Pemimpin Bangsa yang
                  mengupayakan terwujudnya kesejahteraan dan tegaknya keadilan.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-6 text-emerald-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800">
                  Konglomerat
                </h3>
                <p className="mt-1 text-gray-600 ">
                  Menjadi konglomerat-konglomerat Besar yang akan memberikan
                  kontribusi maksimal terhadap terwujudnya kesejahteraan bangsa
                  Indonesia
                </p>
              </div>
            </div>

            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-6 text-emerald-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800">
                  Profesional
                </h3>
                <p className="mt-1 text-gray-600 ">
                  Menjadi Profesional yang Berkualitas dan Bertanggung jawab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
