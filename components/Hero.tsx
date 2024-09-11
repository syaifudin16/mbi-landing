export default function Hero() {
  return (
    <div className="relative flex h-[80vh] shrink-0 flex-col justify-center font-display">
      <video
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        className="absolute -z-10 h-full w-full object-cover brightness-50"
      >
        <source
          src="https://mbi-au.sch.id/videos/video.webm"
          type="video/webm"
        />
      </video>
      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-14">
        <h1 className="text-4xl font-bold text-gray-200 sm:text-5xl md:text-6xl">
          Selamat Datang di <span className="text-emerald-500">MBI</span>{" "}
          Amanatul Ummah
        </h1>
        <p className="text-lg mt-2 font-medium text-gray-200 sm:text-xl md:text-2xl ">
          Madrasah Bertaraf Internasional Paling Unggul di Indonesia
        </p>

        <div className="mt-8 flex gap-4">
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:bg-emerald-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            <a href="https://sims.mbi-au.sch.id/psb/psb.php">Daftar Sekarang</a>
          </button>
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          >
            PPDB
            <svg
              className="shrink-0 size-4"
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
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
