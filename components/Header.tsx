import Logo from "./ui/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full flex-wrap border-b border-gray-200 bg-white md:flex-col md:flex-nowrap md:justify-start">
      <div className="mx-auto w-full max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-end gap-x-3 pt-2">
          <div className="flex flex-wrap items-center gap-x-1.5">
            <a
              className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-2.5 py-[7px] text-[12px] font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="https://sims.mbi-au.sch.id/login.php"
            >
              Masuk
            </a>
            <a
              className="inline-flex items-center rounded-lg bg-emerald-600 px-2.5 py-2 text-[12px] font-medium text-white hover:bg-emerald-700 focus:bg-emerald-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="https://sims.mbi-au.sch.id/psb/psb.php"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
      <nav className="relative mx-auto w-full max-w-[85rem] px-4 py-2 sm:px-6 md:flex md:items-center md:justify-between md:gap-3 lg:px-8">
        <div className="flex items-center justify-between gap-x-1">
          <Logo />
          <button
            type="button"
            className="hs-collapse-toggle relative flex size-9 items-center justify-center rounded-lg border border-gray-200 text-[12px] font-medium text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 md:hidden"
            id="hs-header-base-collapse"
            aria-expanded="false"
            aria-controls="hs-header-base"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-header-base"
          >
            <svg
              className="size-4 hs-collapse-open:hidden"
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
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className="hidden size-4 shrink-0 hs-collapse-open:block"
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Navigasi</span>
          </button>
        </div>

        <div
          id="hs-header-base"
          className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
          aria-labelledby="hs-header-base-collapse"
        >
          <div className="max-h-[75vh] overflow-hidden overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2">
            <div className="flex flex-col gap-0.5 py-2 md:flex-row md:items-center md:gap-1 md:py-0">
              <div className="grow">
                <div className="flex flex-col gap-0.5 md:flex-row md:items-center md:justify-end md:gap-1">
                  <a
                    className="flex items-center rounded-lg bg-gray-100 p-2 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none"
                    href="/"
                    aria-current="page"
                  >
                    <svg
                      className="me-3 block size-4 shrink-0 md:me-2 md:hidden"
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
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                    Beranda
                  </a>

                  <a
                    className="flex items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                    href="/about"
                  >
                    <svg
                      className="me-3 block size-4 shrink-0 md:me-2 md:hidden"
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Tentang
                  </a>

                  <a
                    className="flex items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                    href="/about"
                  >
                    <svg
                      className="me-3 block size-4 shrink-0 md:me-2 md:hidden"
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Program
                  </a>

                  <a
                    className="flex items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                    href="/about"
                  >
                    <svg
                      className="me-3 block size-4 shrink-0 md:me-2 md:hidden"
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Fasilitas
                  </a>

                  <a
                    className="flex items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                    href="/about"
                  >
                    <svg
                      className="me-3 block size-4 shrink-0 md:me-2 md:hidden"
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Kehidupan Santri
                  </a>

                  <div className="hs-dropdown [--adaptive:none] [--is-collapse:true] [--strategy:static] md:[--is-collapse:false] md:[--strategy:fixed]">
                    <button
                      id="hs-header-base-dropdown"
                      type="button"
                      className="hs-dropdown-toggle flex w-full items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      <svg
                        className="me-3 block size-4 shrink-0 md:me-2 md:hidden"
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
                        <path d="m3 10 2.5-2.5L3 5" />
                        <path d="m3 19 2.5-2.5L3 14" />
                        <path d="M10 6h11" />
                        <path d="M10 12h11" />
                        <path d="M10 18h11" />
                      </svg>
                      Organisasi
                      <svg
                        className="ms-auto size-4 shrink-0 duration-300 hs-dropdown-open:-rotate-180 md:ms-1 md:hs-dropdown-open:rotate-0"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    <div
                      className="hs-dropdown-menu relative top-full z-10 hidden w-full ps-7 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-top-4 before:start-0 before:h-5 before:w-full after:absolute after:start-[18px] after:top-1 after:h-[calc(100%-0.25rem)] after:w-0.5 after:bg-gray-100 hs-dropdown-open:opacity-100 md:w-52 md:rounded-lg md:bg-white md:ps-0 md:shadow-md md:duration-[150ms] md:after:hidden"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-header-base-dropdown"
                    >
                      <div className="space-y-0.5 py-1 md:px-1">
                        <a
                          className="flex items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none md:px-3"
                          href="https://wissnu.mbi-au.sch.id/"
                        >
                          WIsSNU
                        </a>
                        <a
                          className="flex items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none md:px-3"
                          href="https://havara.mbi-au.sch.id/"
                        >
                          Havara
                        </a>

                        <a
                          className="flex items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none md:px-3"
                          href="https://lapensa.mbi-au.sch.id/"
                        >
                          Lapensa
                        </a>

                        <a
                          className="flex items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none md:px-3"
                          href="https://bks.mbi-au.sch.id/"
                        >
                          BKS
                        </a>
                        <a
                          className="flex items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none md:px-3"
                          href="https://ambalan.mbi-au.sch.id/"
                        >
                          Ambalan
                        </a>
                      </div>
                    </div>
                  </div>

                  <a
                    className="flex items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                    href="/about"
                  >
                    <svg
                      className="me-3 block size-4 shrink-0 md:me-2 md:hidden"
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
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                      <path d="M18 14h-8" />
                      <path d="M15 18h-5" />
                      <path d="M10 6h8v4h-8V6Z" />
                    </svg>
                    Berita
                  </a>
                  <a
                    className="flex items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                    href="/about"
                  >
                    <svg
                      className="me-3 block size-4 shrink-0 md:me-2 md:hidden"
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
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                      <path d="M18 14h-8" />
                      <path d="M15 18h-5" />
                      <path d="M10 6h8v4h-8V6Z" />
                    </svg>
                    Acara
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
