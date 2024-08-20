export default function Announcement() {
  return (
    <div
      id="ab-full-width-with-dismiss-button-on-emerald-bg"
      className="bg-emerald-600 hs-removing:-translate-y-full"
    >
      <div className="mx-auto max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex">
          <p className="text-white">
            Penerimaan Peserta Didik Baru Tahun 2025-2026 Telah Dibuka!{" "}
            <a
              className="font-medium underline decoration-2 hover:text-white/80 focus:text-white/80 focus:outline-none"
              href="https://sims.mbi-au.sch.id/psb/psb.php"
            >
              Daftar Sekarang
            </a>
          </p>

          <div className="ms-auto ps-3">
            <button
              type="button"
              className="inline-flex rounded-lg p-1.5 text-white/80 hover:bg-white/10 focus:bg-white/10 focus:outline-none"
              data-hs-remove-element="#ab-full-width-with-dismiss-button-on-emerald-bg"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="size-4 shrink-0"
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
