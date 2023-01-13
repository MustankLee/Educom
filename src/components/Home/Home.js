import React from "react";
import Footer from "../Footer/Footer.js"

export default function Home() {
  return (
    <div className="ml-3 pr-6  h-screen overflow-y-scroll">
      <div className="h-12 my-4"></div>
      <div className="w-fit p-2 rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-500 text-3xl font-bold mt-3 mb-6">
        Beranda
      </div>
      <div className="font-semibold text-3xl text-blue-900 border-4 border-l-0 border-t-0 border-r-0 border-b-blue-900 pb-1">
        Latar Belakang
      </div>
      <div className="mt-3 text-justify">
        Menurut KBBI data merupakan sebuah keterangan yang benar dan nyata. Data
        sendiri dapat beruba kumpulan keterangan berupa fakta yang berbentuk
        kata, kalimat, simbol, angka, tanggal, dan lainnya. Data biasanya
        didapatkan dalam sebuah proses pencarian atau pengamatan yang tepat
        berdasarkan sumber-sumber tertentu. Selain itu, data dibutuhkan untuk
        memberikan penjelasan untuk dapat memecahkan ataupun mengevaluasi suatu
        masalah tertentu. Untuk dapat menyelesaikan masalah, data yang
        divisualisasikan harus mudah dimengerti dan sesuai dengan masalah yang
        akan diselesaikan. Visualisasi data merupakan suatu representasi elemen
        visual seperti grafik, diagram, atau peta ke dalam bentuk data.
        Visualisai data membantu menerjemahkan data yang kompleks, bervolume
        tinggi, atau numerik menjadi bentuk visual yang mudah di proses. Untuk
        mendapatkan visualisasi data yang baik, memerlukan elemen desain kreatif
        yang menghasilkan tampilan menarik. Tidak hanya, menggunakan data
        bervolume besar dapat meningkatkan keakuratan visualisasi data.
      </div>
      <br />
      <div className="text-justify">
        PT. Educom merupakan perusahaan supplier perusahaan distributor, toko,
        dan supplier laptop terbesar di Eropa yang telah berjalan dengan baik
        sejak 2018 dan selalu menginginkan perkembangan setiap tahunnya.
        Perusahaan ini ingin mengetahui perkembangan perusahaannya setelah
        berdiri selama 5 tahun dari berbagai aspek seperti, laba tiap tahun,
        persebaran customer, hingga performa produk.
      </div>
      <br />
      <div className="text-justify">
        Pengelolaan data penjualan merupakan proses penting yang harus dilakukan
        oleh setiap perusahaan. Untuk dapat diketahui informasi dari data, maka
        perlu melakukan eksplorasi pada data untuk menghasilkan visualisasi yang
        lebih baik yang dapat membantu untuk pengambilan keputusan dan
        peningkatan layanan. Dalam proses eksplorasi, dilakukan analisis dengan
        menerapkan metode visualisasi data, exploratory data analysis dan
        publikasi dashboard dengan menggunakan tools tableau desktop/public.
      </div>
      <br />
      <div className="text-justify">
        Tableau merupakan tools yang digunakan untuk memvisualisasi data menjadi
        lebih interaktif, mudah dibaca, dan mudah dianalisa. Visualisasi yang
        dilakukan adalah mengubah data dalam bentuk table yang kaku menjadi
        bentuk grafik, diagram, geomapping, dan lain sebagainya yang mampu
        memperlihatkan perubahan dan perbedaan yang ada pada data dengan lebih
        jelas. Sehingga, tampilan data hasil dari analisis statistik biasa
        menjadi lebih cantik dengan visual yang eye-catching dan dashboard yang
        interaktif.
      </div>
      <div className="my-10"></div>
      <div className="font-semibold text-3xl text-blue-900 border-4 border-l-0 border-t-0 border-r-0 border-b-blue-900 pb-1">
        Rumusan Masalah
      </div>
      <div className="mt-3 text-justify">
        Berdasarkan latar belakang yang sudah dijelaskan di atas, permasalahan
        PT.Educom adalah bagaimana perkembangan perusahaan dalam aspek penjualan
        setelah 5 tahun berdiri yang ditampilkan melalui visualisasi data ?
      </div>
      <div className="my-10"></div>
      <div className="font-semibold text-3xl text-blue-900 border-4 border-l-0 border-t-0 border-r-0 border-b-blue-900 pb-1">
        Tujuan Penelitian
      </div>
      <div className="mt-3 text-justify">
        Untuk mendapatkan informasi yang mudah dipahami, jelas
        dan efisien dengan visualisasi data yang terstruktur dari hasil
        eskplorasi dengan menggunakan data penjualan laptop dan
        pengimplementasian dashboard menggunakan Tableau Public, sehingga dapat
        menampilkan perkembangan perusahaan dalam aspek penjualan dengan baik.
      </div>
      <div className="my-10"></div>
      <Footer/>
    </div>
  );
}
