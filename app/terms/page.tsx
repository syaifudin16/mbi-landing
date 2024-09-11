import Link from "next/link";

export default function Terms() {
  return (
    <main id="content">
      <div className="md:max-w-screen-sm text-center px-4 sm:px-6 lg:px-8 pt-24 pb-6 mx-auto">
        <h1 className="mb-2 text-2xl font-bold md:text-4xl">
          Syarat dan Ketentuan
        </h1>
        <p className="text-gray-700">Terakhir Diubah: September 10, 2024</p>
      </div>

      <div className="md:max-w-screen-sm lg:max-w-[992px] px-4 sm:px-6 lg:px-8 pb-12 md:pt-6 sm:pb-20 mx-auto">
        <div className="grid gap-4 md:gap-8">
          <div>
            <p className="mb-8 text-md text-justify">
              Selamat datang di website dan aplikasi resmi MA Unggulan Amanatul
              Ummah Program Madrasah Bertaraf Internasional (selanjutnya disebut
              "Sekolah"). Dengan mengakses dan menggunakan website atau aplikasi
              ini, Anda menyetujui untuk terikat oleh Syarat dan Ketentuan
              berikut.
            </p>
            <h2 className="text-lg font-semibold mb-2">Penggunaan Website</h2>

            <ol className="list-disc list-inside mb-5">
              <li>
                <strong>Tujuan Penggunaan</strong>: Website ini dirancang untuk
                memberikan informasi tentang Sekolah, program pendidikan,
                pendaftaran siswa baru, dan kegiatan sekolah lainnya.
              </li>
              <li>
                <strong>Larangan</strong>: Anda dilarang menggunakan website ini
                untuk tujuan yang melanggar hukum, merusak, mengganggu, atau
                menghina pihak lain, atau melanggar hak kekayaan intelektual
                Sekolah atau pihak ketiga.
              </li>
            </ol>

            <h2 className="text-lg font-semibold mb-2">Konten Website</h2>
            <ol className="list-disc list-inside mb-5">
              <li>
                <strong>Hak Cipta</strong>: Seluruh konten yang terdapat di
                website ini, termasuk teks, gambar, video, dan logo, dipndungi
                oleh hak cipta dan merupakan mipk Sekolah atau pihak ketiga yang
                telah memberikan izin.
              </li>
              <li>
                <strong>Akurasi</strong>: Sekolah berusaha untuk memastikan
                bahwa informasi yang terdapat di website ini akurat dan terkini,
                namun tidak menjamin keakuratan dan kelengkapan informasi
                tersebut.
              </li>
            </ol>
            <h2 className="text-lg font-semibold mb-2">Tautan ke Situs Lain</h2>
            <p className="mb-5">
              Website ini mungkin berisi tautan ke situs-situs lain yang tidak
              dikelola oleh Sekolah. Sekolah tidak bertanggung jawab atas
              konten, kebijakan privasi, atau praktik keamanan dari situs pihak
              ketiga tersebut. Anda mengakses situs-situs tersebut sepenuhnya
              atas risiko Anda sendiri.
            </p>
            <h2 className="text-lg font-semibold mb-2">Tanggung Jawab</h2>
            <ol className="list-disc list-inside mb-5">
              <li>
                <strong>Penggunaan Anda</strong>:Anda bertanggung jawab
                sepenuhnya atas penggunaan Anda terhadap website ini serta
                segala risiko yang timbul dari penggunaan tersebut.
              </li>
              <li>
                <strong>Penolakan Tanggung Jawab</strong>: Sekolah tidak
                bertanggung jawab atas kerugian langsung, tidak langsung,
                insidental, konsekuensial, atau khusus yang timbul dari
                penggunaan atau ketidakmampuan Anda untuk menggunakan website in
              </li>
            </ol>
            <h2 className="text-lg font-semibold mb-2">
              Modifikasi dan Penghapusan Data
            </h2>
            <p className="mb-5">
              Untuk informasi lebih lanjut tentang bagaimana kami menangani
              modifikasi data, penghapusan, dan melindungi privasi Anda, silakan
              merujuk ke 
              <Link className="text-blue-600" href="/privacy">
                Kebijakan Privasi
              </Link>{" "}
              kami.
            </p>
            <h2 className="text-lg font-semibold mb-2">
              Perubahan Syarat dan Ketentuan
            </h2>
            <p className="mb-5">
              Sekolah berhak untuk mengubah Syarat dan Ketentuan ini kapan saja
              tanpa pemberitahuan sebelumnya. Perubahan akan dipublikasikan di
              website ini, dan Anda bertanggung jawab untuk meninjau Syarat dan
              Ketentuan yang berlaku secara berkala.
            </p>
            <h2 className="text-lg font-semibold mb-2">Hukum yang Berlaku</h2>
            <p className="mb-5">
              Syarat dan Ketentuan ini diatur dan ditafsirkan sesuai dengan
              hukum yang berlaku di Indonesia. Setiap perselisihan yang timbul
              dari penggunaan website ini akan diselesaikan melalui hukum yang
              berlaku di Indonesia.
            </p>
            <h2 className="text-lg font-semibold mb-2">Hubungi Kami</h2>
            <p className="mb-5">
              Jika Anda memiliki pertanyaan atau kekhawatiran mengenai Syarat
              dan Ketentuan ini, silakan hubungi kami di email:
              info@mbi-au.sch.id
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
