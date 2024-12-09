import new2 from "../assets/news/news2.jpg";
import new4 from "../assets/news/4.png";
import sepakBolaSep from "../assets/news/sepakBolaSep.png";
import hutRi2024 from "../assets/news/hutRi2024.png";
import clubGambarSep from "../assets/news/clubGambarSep.png";
import clubMusikSep from "../assets/news/clubMusikSep.png";
import clubTaekwondoSep from "../assets/news/clubTaekwondoSep.png";
import { useEffect, useState } from "react";

const ListKegiatan = () => {
  const [kegiatanList, setKegiatanList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const arraylist = [];
      const q = query(collection(db, "articles"), where("category", "==", "kegiatan"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        arraylist.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setKegiatanList(arraylist);
    };

    fetchData();
  }, []);

  return kegiatanList;
};

export default ListKegiatan

// export const ListKegiatan = [
//   {
//     id: 1,
//     date: "29 Juli 2023",
//     category: "Kegiatan",
//     location: "Sekolah Dasar Alam Bukit Akasia",
//     title:
//       'Pagelaran Jagad Alit "Sanusantara" dengan Tema : Pelestarian Kearifan Lokal Yang Inklusif',
//     shortDesc:
//       'Pada tanggal 29 Juli 2023, Sekolah Dasar Alam Bukit Akasia menggelar acara Pagelaran Jagad Alit bertajuk "Sanusantara" dengan tema "Pelestarian Kearifan Lokal yang Inklusif". Acara ini....',
//     longDesc: `Pada tanggal 29 Juli 2023, Sekolah Dasar Alam Bukit Akasia menggelar acara Pagelaran Jagad Alit bertajuk "Sanusantara" dengan tema "Pelestarian Kearifan Lokal yang Inklusif". Acara ini diadakan dengan tujuan untuk merayakan, melestarikan, dan mengajarkan kearifan lokal kepada generasi muda, sekaligus menanamkan nilai-nilai inklusivitas dan kebersamaan. Para siswa, guru, dan orang tua turut serta dalam memeriahkan acara yang penuh warna ini, yang berlangsung meriah di halaman sekolah.

//         Pagelaran "Sanusantara" menampilkan berbagai macam pertunjukan seni dan budaya yang mencerminkan keragaman dan kekayaan budaya Nusantara. Para siswa menampilkan tarian tradisional, musik daerah, serta drama yang mengangkat cerita-cerita rakyat dari berbagai penjuru Indonesia. Kegiatan ini tidak hanya menjadi ajang unjuk bakat bagi para siswa, tetapi juga menjadi sarana untuk mengenalkan dan menanamkan rasa cinta terhadap budaya lokal sejak dini.
        
//         Selain pertunjukan seni, acara ini juga menghadirkan berbagai pameran yang menampilkan kerajinan tangan, pakaian adat, dan kuliner khas dari berbagai daerah. Para siswa diajak untuk berpartisipasi aktif dalam workshop membuat kerajinan tradisional, memasak makanan khas, dan mengenakan pakaian adat. Keterlibatan langsung dalam berbagai aktivitas ini diharapkan dapat memperkuat pemahaman dan penghargaan siswa terhadap keragaman budaya Indonesia serta pentingnya melestarikan warisan budaya tersebut.
        
//         Pagelaran Jagad Alit "Sanusantara" juga mengedepankan nilai-nilai inklusivitas dengan mengajak semua siswa tanpa memandang latar belakang untuk berpartisipasi. Melalui tema "Pelestarian Kearifan Lokal yang Inklusif", acara ini menekankan pentingnya kebersamaan dan saling menghargai dalam keberagaman. Dengan suksesnya acara ini, Sekolah Dasar Alam Bukit Akasia berharap dapat terus menginspirasi siswa untuk mencintai dan melestarikan budaya lokal, serta membangun lingkungan yang inklusif dan harmonis.`,
//     imgSrc: new4,
//     link: "/news-page-3",
//   },
//   {
//     id: 2,
//     date: "20 Mei 2024",
//     category: "Kegiatan",
//     location: "Sekolah Dasar Alam Bukit Akasia",
//     title:
//       "Kolaborasi Siswa dan Guru SD Alam Bukit Akasia dalam Donor Darah Bersama PMI",
//     shortDesc:
//       "Pada tanggal 20 Mei 2024, Sekolah Dasar Alam Bukit Akasia mengadakan acara donor darah yang bekerja sama dengan Palang Merah Indonesia (PMI). Kegiatan ini ...",
//     longDesc: `Pada tanggal 20 Mei 2024, Sekolah Dasar Alam Bukit Akasia mengadakan acara donor darah yang bekerja sama dengan Palang Merah Indonesia (PMI). Kegiatan ini melibatkan kolaborasi aktif antara siswa, guru, dan staf sekolah dalam mendukung upaya kemanusiaan dan membantu masyarakat yang membutuhkan. Acara yang bertemakan "Setetes Darah untuk Kehidupan" ini bertujuan untuk meningkatkan kesadaran siswa tentang pentingnya donor darah serta mengajarkan nilai-nilai kepedulian sosial dan tanggung jawab.

//         Sejak pagi, halaman sekolah dipenuhi dengan antusiasme para siswa dan guru yang bersiap untuk berpartisipasi dalam kegiatan donor darah. Para siswa kelas atas berperan aktif dalam membantu persiapan acara, mulai dari menyiapkan tempat, menyambut para pendonor, hingga memberikan informasi mengenai prosedur donor darah. Keterlibatan siswa dalam kegiatan ini tidak hanya memberikan pengalaman berharga dalam hal organisasi dan kerja sama tim, tetapi juga menumbuhkan rasa empati dan kepedulian terhadap sesama.
        
//         Acara ini berhasil mengumpulkan puluhan kantong darah yang akan disalurkan oleh PMI kepada mereka yang membutuhkan. Selain kegiatan donor darah, acara ini juga diisi dengan sesi edukasi tentang pentingnya donor darah yang diberikan oleh petugas PMI. Para siswa mendapatkan pemahaman yang lebih mendalam tentang bagaimana donor darah dapat menyelamatkan nyawa dan mengapa setiap orang yang memenuhi syarat harus mempertimbangkan untuk menjadi pendonor. Melalui kegiatan ini, SD Alam Bukit Akasia tidak hanya berkontribusi langsung dalam membantu PMI, tetapi juga berhasil menanamkan nilai-nilai kebaikan dan solidaritas di kalangan siswa.`,
//     imgSrc: new2,
//     link: "/news-page-3",
//   },
//   {
//     id: 3,
//     date: "26 September 2024",
//     category: "Kegiatan",
//     location: "Sekolah Dasar Alam Bukit Akasia",
//     title:
//       "Mantan Pemain Persib Turun Tangan Klub Sepak Bola Jadi Favorit di SD Alam Bukit Akasia",
//     shortDesc:
//       "Jika Timnas Sepakbola Indonesia saat ini sedang hebat-hebatnya, semangat sama sedang melanda para pemain sepakbola cilik di SD Alam Bukit Akasia.",
//     longDesc: `BUKIT AKASIA– Jika Timnas Sepakbola Indonesia saat ini sedang hebat-hebatnya, semangat sama sedang melanda para pemain sepakbola cilik di SD Alam Bukit Akasia. Klub Sepakbola Bukit Akasia adalah salah satu klub yang sangat diminati oleh peserta didik. Klub yang diampu mantan pemain Persatuan Sepakbola Indonesia Bandung (Persib)U-20 ini melatih peserta didik dari kelas I sampai kelas IV SD.  
// “Jadwal latihan setiap tim berbeda-beda, disesuaikan dengan kebutuhan dan tingkat kemajuan masing-masing kelompok. Saat ini, kelompok dibagi menjadi dua tim: Tim B untuk peserta didik kelas I dan II, serta Tim A untuk peserta didik kelas III dan IV. Latihan Tim B diadakan setiap hari Selasa, sedangkan Tim A berlatih setiap hari Kamis.  Kegiatan berlangsung  di Lapangan Akasia,” ujar Ferdiansyah, pelatih Klub Sepakbola Bukit Akasia.
// Pelatih membagi jadwal latihan berdasarkan kelompok usia karena dalam pendidikan sepak bola usia dini, porsi latihan harus disesuaikan. Untuk kelas I dan II, latihan berfokus pada teknik dasar seperti cara menendang dan mengendalikan bola. Sementara itu, kelas III dan IV mulai diajarkan strategi permainan, termasuk kerjasama tim dan simulasi pertandingan. Latihan untuk Tim B (kelas I dan II) berlangsung selama 1,5 jam, sedangkan Tim A (kelas III dan IV) berlatih selama 2 jam.
// Dalam permainan sepak bola usia dini, satu tim biasanya terdiri dari lima sampai enam pemain. Meski begitu, para peserta didik masih dalam tahap belajar, dan terkadang mereka mengalami kesulitan menerima kekalahan. Pelatih terus mendorong dengan memberikan evaluasi yang membangun, menyarankan mereka untuk rajin berlatih, disiplin, dan terus berusaha. Antusiasme peserta didik sangat tinggi, mereka menikmati setiap prosesnya, dan sebagai tantangan ke depan, sekolah berencana untuk mengikuti Olimpiade Olahraga Siswa Nasional (O2SN).
// Pelatih menyatakan bahwa mengajarkan sepak bola kepada peserta didik baik untuk kelas I, II, III ataupun IV memberikan tantangan, namun sangat menyenangkan karena anak-anak penuh semangat meskipun dalam O2SN hanya beberapa anak yang akan dipilih untuk mewakili sekolah.
// “Ada juga momen lucu selama latihan, seperti ketika peserta didik gagal menendang bola karena bola tidak mengenai kaki dengan sempurna. Namun, hal ini justru menjadi bagian dari proses belajar,” pungkas Ferdiansyah.
// Muhamad Ferdiansyah sendiri adalah pelatih dengan catatan prestasi sebagai atlet sepakbola yang cukup panjang. Ferdiyansah pernah menjadi top skor nasional, juara 1 Piala Soeratin, juara 1 Piala Menpora, dan juara 1 Liga-1 Indonesia Elit Pro Academy (Persib Bandung.) (???)
// `,
//     imgSrc: sepakBolaSep,
//     link: "/news-page-3",
//   },
//   {
//     id: 4,
//     date: "17 Agustus 2024",
//     category: "Kegiatan",
//     location: "Sekolah Dasar Alam Bukit Akasia",
//     title:
//       "Menyatu dengan Warga: Peringati HUT RI, SD Alam Bukit Akasia Pawai Bersama ",
//     shortDesc:
//       "Sekolah Dasar Alam (SDA) Bukit Akasia punya tradisi menarik setiap momentum Peringatan Hari Kemerdekaan Republik Indonesia ke-79 ...",
//     longDesc: `"Bangsa yang besar adalah bangsa yang menghormati jasa pahlawannya."
// — Bung Karno

// BUKIT AKASIA – Sekolah Dasar Alam (SDA) Bukit Akasia punya tradisi menarik setiap momentum Peringatan Hari Kemerdekaan Republik Indonesia ke-79. Tidak hanya menyelenggarakan kegiatan 17-an di lingkungan sekolah, SDA Bukit Akasia menggerakkan warga sekitar untuk bersama-sama memeriahkan hari spesial ini.
// Rangkaian perayaan berlangsung meriah dan penuh semangat. Warga dari RW 14, 15, 18, dan 21 Desa Cinanjung Kecamatan Tanjungsari Kabupaten Sumedang berkumpul bersama untuk merayakan hari bersejarah ini. Kegiatan tersebut diinisiasi oleh SDA Bukit Akasia selama tiga tahun berturut turut.

// Acara diawali dengan upacara bendera yang khidmat, dipimpin oleh Ketua RW 14, Adjat Sudrajat, dan diikuti oleh warga serta siswa SD Alam Bukit Akasia dan Kober Kamboe Akasia. Suasana penuh patriotisme terasa kuat, mengingatkan kembali akan jasa-jasa pahlawan yang telah memperjuangkan kemerdekaan bangsa.
// “Semangat persatuan dalam peringatan 17 Agustus ini harus menjadi inspirasi bagi seluruh warga dan keluarga besar SDA Bukit Akasia,” ujar Adjat Sudrajat yang akrab dipanggil Babe ini. 

// Setelah upacara, acara dilanjutkan dengan karnaval kreatif yang penuh warna. Warga dari berbagai RW dan anak-anak SD Alam Bukit Akasia serta Kober Kamboe Akasia mengenakan kostum unik, berbagai warna. Karena tema karnaval tahun ini adalah “Warna Warni Indonesia”.


// Selain itu, rangkaian kegiatan interaktif turut menghibur warga. Terdapat beberapa perlombaan yang diselenggarakan sehingga memicu semangat para siswa hingga warga panorama dalam memeriahkan 17 Agustusan seperti, lomba memindahkan bendera, lempar balon hingga fashion show sebagai peserta didik yang menjadi daya tarik. Sementara untuk perlombaan warga ada perlombaan futsal dan senam.

// Puncak acara ditutup dengan fashion show yang diikuti oleh perwakilan setiap rombel, menampilkan kostum-kostum kreatif bertema profesi. Para peserta berlenggak-lenggok di atas panggung, disambut tepuk tangan meriah dari penonton. Setelah fashion show, acara dilanjutkan dengan pembagian hadiah untuk para pemenang lomba yang telah diadakan sepanjang hari.


// Dengan berakhirnya acara ini, warga Bukit Akasia dan Panorama Jatinangor pulang dengan penuh kegembiraan, menyimpan kenangan indah dari peringatan Hari Kemerdekaan ke-79 yang dipenuhi semangat kebersamaan dan kreativitas. (Wahab Ihsan)

// ______________________________________________________________________________


// Dunia Kecil Mengubah Dunia Besar

// BUKIT AKASIA– Budaya adalah jati diri sebuah bangsa.  Klub menari Jagat Alit Bukit Akasia menjadi bagian dari usaha untuk pelestarian budaya nusantara melalui tarian daerah. “Kegiatan ini dilakukan untuk membentuk cinta anak-anak terhadap salah satu seni budaya yang ada di Indonesia, terutama menari.” ujar Sintia Dewi Markin, pendiri sekaligus pembimbing Klub Jagad Alit.
// Bu Sintia, panggilan akrab Sintia Dewi Markin, juga merupakan Ketua Yayasan Bukit Akasia Sakhadewa. Menurut Bu Sintia, menari bisa mengolah rasa dan kreativitas. Menari juga melatih fokus dan konsentrasi peserta didik dalam mengikuti gerakan yang diajarkan oleh pembimbing. Anak-anak juga dilatih untuk bekerjasama dalam kelompok sesuai dengan jenis tari yang mereka peragakan. Jadi, selain mengisi waktu luang dengan kegiatan yang bermanfaat, menari juga melatih kepekaan/konsentrasi.
// 	Jagat Alit secara bahasa artinya dunia kecil. Namun, apa yang sedang diusahakan adalah gerakan untuk mengubah dunia yang besar. Sebab, jati diri tradisi adalah kunci untuk tetap bertahan dalam dunia global. Jagat Alit diselenggarakan  setelah pulang sekolah atau hari libur sekolah. Jagat Alit diselenggarakan di Aula Akasia pada sore hari antara pukul 3 sore sampai 5 sore di setiap akhir pekan antara hari Sabtu atau Minggu.
// Peserta didik dikelompokkan sesuai usianya. Dua kelompok utama adalah usia Sekolah Menengah Pertama (SMP) dan usia Sekolah Dasar (SD). Kegiatan menarinya melalui tahapan-tahapan. Setelah peserta didik berkumpul dan berdoa mengawali kegiatan. Semua melakukan pemanasan kurang lebih 10 menit. Setelah itu, semua siswa baik yang besar maupun yang kecil melakukan lathan sesuai gerakan yang dicontohkan oleh pembimbing secara bergantian antara kelompok anak besar dan kelompok anak kecil agar terarah dan terlihat kemampuannya.
// Mereka yang belum menari beristirahat terlebih dahulu sambil menunggu giliran. Hal ini dilakukan agar anak- anak bisa melihat gerakan rekannya dan mengoreksi gerakannya sendiri. Peserta didik akan dilihat langsung perkembangan kemampuan menarinya oleh guru pembimbing. Hal-hal yang akan dinilai adalah kesesuaian gerakan, kelenturan, konsentrasi dalam mengikuti arahan, dan lain-lain. Hasil latihan penuh disiplin itu kemudian ditampilkan dalam berbagai acara sekolah maupun luar sekolah. (Noviana Suprapto, Nendah, Iis)
// `,
//     imgSrc: hutRi2024,
//     link: "/news-page-3",
//   },
//   {
//     id: 5,
//     date: "27 September 2024",
//     category: "Kegiatan",
//     location: "Sekolah Dasar Alam Bukit Akasia",
//     title:
//       "Imajinasi menjadi Kunci, Klub Menggambar SD Alam Bukit Akasia Terniat Sejak Goresan Awal",
//     shortDesc:
//       "Menggambar tidak sekadar membuat coretan. Dalam setiap goresan ada ide yang coba disampaikan oleh sang seniman. Di Sekolah Dasar Alam (SDA) Bukit Akasia Sumedang, menggambar tidak sebatas penyaluran hobi peserta didik, namun juga bagian dari literasi menyampaikan ide melalui visual...",
//     longDesc: `BUKIT AKASIA–Menggambar tidak sekadar membuat coretan. Dalam setiap goresan ada ide yang coba disampaikan oleh sang seniman. Di Sekolah Dasar Alam (SDA) Bukit Akasia Sumedang, menggambar tidak sebatas penyaluran hobi peserta didik, namun juga bagian dari literasi menyampaikan ide melalui visual.  

// “Aku senang sekali bisa sekolah di Bukit Akasia karena di sini ada klub menggambarnya. Jadi Arsen bisa menggambar dan mewarnai apa saja yang Arsen mau,” kata Arsenio, peserta didik kelas III asal Ujungberung, Bandung.

// Sekolah Dasar Alam (SDA) Bukit Akasia adalah salah satu sekolah dasar yang memiliki konsep pembelajaran yang berbeda dengan sekolah dasar lainnya. Konsep dasarnya setiap peserta didik itu unik dengan karakternya yang masing-masing yang berbeda, serta memiliki kebutuhan belajar yang berbeda antara peserta didik yang satu dengan yang lainnya. 

// SDA Bukit Akasia, selalu berupaya memaksimalkan seluruh potensi baik akademik maupun non-akademik dengan tujuan agar mampu menggali kecerdasan majemuk setiap peserta didik, agar peserta didik mampu tumbuh berkembang sesuai dengan kecerdasan masing-masing sesuai minatnya, hobi, karakter, dan bakat yang mereka miliki. Dalam membantu peserta didik dalam mencapai potensi dan kreativitas dalam bidang non-akademik. SDA Bukit Akasia, memberikan wadah berupa program khusus Klub Menggambar. 

// Klub Menggambar SDA Bukit Akasia ini adalah tempat peserta didik-peserta didik dapat memulai perjalanan seninya dengan gambar pertama yang indah. Ini semacam kegiatan di lingkungan sekolah yang dilaksanakan peserta didikan ketika selesainya kegiatan belajar mengajar (KBM) yang difasilitasi oleh sekolah. Klub Menggambar berupa sebuah forum yang dirancang untuk mendorong imajinasi dan kreativitas peserta didik melalui seni menggambar. 

// Klub menggambar SDA Bukit Akasia menekankan pada proses imajinasi dan ekspresi melalui goresan pertama yang indah, bukan sekedar hasil akhir. 

// “Alhamdulillah saya juga merasa senang dan sangat antusias dengan hadirnya klub menggambar di SD Alam Bukit akasia, karena anak saya suka mengekspresikan apa pun lewat gambar jadi saya merasa dengan adanya klub gambar ini dia mempunyai tempat untuk menyalurkan hobi dan bakat nya.” kata Ibunda Arsenio.

// Di Klub Menggambar peserta didik peserta didik bisa mengekspresikan perasaan melalui gambar ataupun warna-warna sehingga bisa menjadi suatu karya natural dari goresan tangan mereka sendiri. Mengembangkan imajinasi sejak dini di Klub Menggambar SDA Bukit Akasia ditujukan untuk peserta didik dalam berbagai jenjang tingkatan dari mulai kelas I hingga kelas IV dengan harapan dapat menjadi media dalam mengungkapkan ide dan perasaannya dalam bentuk visual. Di SDA Bukit Akasia, angkatan peserta didik memang baru sampai kelas IV.
//  Klub Menggambar dilaksanakan peserta didik setiap hari Rabu dan Kamis pukul 15.00 hingga selesai dibimbing illustrator profesional yang akrab dipanggil Kang Oby. 
// Pada awal kegiatan Klub menggambar selalu diawali dengan pemanasan imajinasi. Pendekatan ini tidak hanya mengembangkan imajinasi siswa, tetapi juga memperkuat keterampilan observasi dan pemahaman mereka terhadap dunia sekitar. Selain mengembangkan imajinasi, menggambar juga memiliki banyak manfaat lain, termasuk dalam hal pengembangan keterampilan motorik halus. Menggerakkan tangan untuk menggoreskan pensil atau kuas membantu siswa melatih koordinasi tangan dan mata mereka. 
// “Kegiatan untuk peserta didik setelah pemanasan imajinasi dilanjutkan dengan mempelajari berbagai teknik menggambar, dimulai dengan teknik menggambar, seperti membuat garis vertikal, horizontal, dan diagonal. Kemudian mulailah membuat bentuk, membuat segitiga, persegi, dari membuat bentuk kecil hingga bentuk besar,” kata Kang Oby.
// Pada kegiatan Klub Menggambar, peserta didik diajak untuk mencoba berbagai teknik, mulai dari menggambar dengan pensil hingga menggunakan media cat air, krayon, dan spidol. Setiap sapuan pensil warna, setiap sapuan kuas, dan penggunaan bahan seni yang berbeda melatih koordinasi tangan-mata peserta didik. Kegiatan ini juga memberikan kesempatan kepada peserta didik untuk meningkatkan keterampilan dengan penuh semangat dan percaya diri. Interaksi antar peserta didik juga sangat penting dalam klub ini. Hal ini untuk membangun rasa empati dan kolaborasi dalam lingkungan kreatif.
// Klub ini menjadi tempat peserta didik memulai perjalanan seninya dengan gambar pertama yang indah.  Salah satu tujuan utama dari  Klub Menggambar di SDA Bukit Akasia adalah membantu pembentukan karakter peserta didik. Teknisnya dengan memberikan ruang bebas untuk berekspresi. Klub ini membantu peserta didik-peserta didik memahami bahwa setiap karya seni adalah cerminan dari diri mereka, dan tidak ada karya yang benar atau salah. Semua karya dihargai sebagai bentuk ekspresi pribadi yang unik.
// Klub Menggambar SDA Bukit Akasia bukan hanya sekadar tempat belajar menggambar, tetapi menjadi ruang bagi peserta didik-peserta didik untuk berimajinasi, berekspresi, dan mengasah keterampilan mereka.  Setiap goresan awal yang mereka buat adalah langkah kecil menuju pencapaian yang lebih besar, menciptakan karya-karya yang indah dan penuh makna. Melalui Club Menggambar, Sekolah Dasar Alam (SDA) Bukit Akasia terus berkomitmen untuk mendukung perkembangan kreatif peserta didik yang penuh potensi. (Rizka Rahmah Zakiyah dan Neni Febriyani)
// `,
//     imgSrc: clubGambarSep,
//     link: "/news-page-3",
//   },
//   {
//     id: 6,
//     date: "24 September 2024",
//     category: "Kegiatan",
//     location: "Sekolah Dasar Alam Bukit Akasia",
//     title: "Bermain Musik Sedari Dini",
//     shortDesc:
//       "Klub Musik Bukit Akasia membuktikan, semakin dini semakin baik. Di klub musik, suasana ceria dan penuh energi selalu terasa di dalam ruangan. Kegiatan dimulai dengan permainan ritme...",
//     longDesc: `BUKIT AKASIA— Kapan idealnya seorang anak mengenal musik? Klub Musik Bukit Akasia membuktikan, semakin dini semakin baik. Di klub musik, suasana ceria dan penuh energi selalu terasa di dalam ruangan. Kegiatan dimulai dengan permainan ritme. Pelatih klub musik, Shandy  Nugraha memulai kegiatan dengan permainan kuis dan tantangan bernyanyi. “Itu metode sederhana untuk mengetahui pemahaman anak terhadap ritme,” ujar Shandy. 
// 	Pengalaman bertahun-tahun sebagai pemusik dan produser musik membuat Shandy peka dalam memilih metode pengenalan musik yang relevan untuk anak-anak dengan berbagai jenjang usia. Belajar musik harus menyenangkan.
// 	“ Aku sangat senang bernyanyi sejak TK, setelah aku mengikuti club musik ini, aku jadi bisa bernyanyi dan memainkan alat musik drum” kata Akmal, Peserta didik kelas IV.
// 	SD Alam Bukit Akasia selalu mengoptimalkan potensi peserta didik baik akademik dan non akademik. Dalam membantu peserta didik dalam mencapai setiap potensi dan bakatnya SD Alam BUkit Akasia, memberikan wadah berupa Klub Musik.
// 	‘Saya mempunyai mimpi untuk membawa klub musik ini sampai ke internasional, karena saya yakin setiap bakat yang dilatih sejak dini akan berhasil kelak nanti” ujar Shandy
// Setiap peserta didik diberi kesempatan untuk mengenal berbagai alat musik. Mulai dari gitar hingga drum. Beberapa peserta didik merasa terkejut sendiri karena mereka tidak menyangka bisa mengikuti instruksi pelatih dengan baik.
// “Dulu aku takut kalau berdiri didepan banyak orang, tapi setelah aku ikutan klub musik aku bahkan berani bernyanyi di depan banyak orang” kata Quenna Peserta didik kelas IV
// Tidak hanya teknis memainkan alat musik, aktivitas dalam Klub Musik Bukit Akasia mendorong peserta didik untuk lebih berani mencoba, tekun dan membangun relasi dengan teman-teman klubnya. Saat ini, Klub Musik Bukit Akasia diselenggarakan setiap Selasa dan Kamis. (Annisa)
// `,
//     imgSrc: clubMusikSep,
//     link: "/news-page-3",
//   },
//   {
//     id: 7,
//     date: "25 September 2024",
//     category: "Kegiatan",
//     location: "Sekolah Dasar Alam Bukit Akasia",
//     title: "Bangun Karakter dengan Taekwondo",
//     shortDesc: `Benar kata penulis terkenal Bo Bennet, "Seni bela diri bukan tentang berkelahi; ini tentang membangun karakter." Peserta didik dengan disiplin ilmu bela diri berpotensi besar untuk memiliki karakter positif yang mendukung mental mereka...`,
//     longDesc: `BUKIT AKASIA–Benar kata penulis terkenal Bo Bennet, "Seni bela diri bukan tentang berkelahi; ini tentang membangun karakter." Peserta didik dengan disiplin ilmu bela diri berpotensi besar untuk memiliki karakter positif yang mendukung mental mereka. Di Sekolah Dasar Alam (SDA) Bukit Akasia, klub bela diri yang cukup diminati peserta didik adalah taekwondo. Klub ini diampu oleh pelatih yang bernama Dani Nugraha pelatih taekwondo atau sabeum yang berlisensi profesional. 
// “Klub Taekwondo ini tidak hanya mengajarkan teknik-teknik bela diri, tetapi juga membangun karakter peserta didik yang lebih baik dengan menanamkan nilai-nilai disiplin, percaya diri, dan sportivitas,” kata Sabeum Dani Nugraha.
// Untuk memberikan pembelajaran yang efektif, klub Taekwondo di SD Alam Bukit Akasia dibagi menjadi beberapa kelas untuk jadwal latihan. Jadwal berdasarkan dengan tingkat usia, karena materi yang diajarkan disesuaikan dengan perkembangan fisik peserta didik. Jadwal latihan wajib taekwondo pada hari Rabu dan Kamis. Hari Rabu khusus untuk peserta didik kelas III dan IV, sementara peserta didik kelas I dan II mengikuti jadwal latihan pada hari Kamis. 
// Tempat latihan wajib Taekwondo berada di Aula Graha Akasia. Terdapat jadwal latihan gabungan di luar Bukit Akasia, yang tidak diwajibkan yaitu jadwal latihannya di Hari Sabtu atau Minggu.

// Materi yang dipelajari pada klub taekwondo yaitu kyorugi dan poomsae. Kyorugi merupakan latihan bertarung dengan menggunakan teknik-teknik tendangan, pukulan, dan kuncian. Sedangkan Poomsae merupakan jurus-jurus tetap yang menampilkan keindahan gerakan dan kekuatan, poomsae juga tidak hanya melatih fisik, tetapi juga meningkatkan konsentrasi dan koordinasi. Kedua materi ini diberikan bergantian pada setiap latihan. Sebelum latihan setiap peserta didik melakukan doa, pemanasan, pelenturan badan, materi (kyorugi atau poomsae), gerakan untuk meningkatkan kekuatan otot, dan ditutup dengan doa.  

// Klub taekwondo SD Alam Bukit Akasia telah menunjukkan prestasi yang membanggakan. Peserta didik berpartisipasi termasuk seleksi O2SN tingkat kabupaten. Hal ini membuktikan bahwa pembinaan yang dilakukan di sekolah cukup efektif. Selain itu, dibutuhkan juga kerjasama antara pembina, orang tua, dan sekolah untuk terus meningkatkan perkembangan bakat peserta didik, terutama pada klub taekwondo. (Nisa Rizky N. A) 
// `,
//     imgSrc: clubTaekwondoSep,
//     link: "/news-page-3",
//   },
//   //   {
//   //     id: 3,
//   //     date: "27 September 2024",
//   //     category: "Kegiatan",
//   //     location: "Sekolah Dasar Alam Bukit Akasia",
//   //     title: `Klub Menggambar SD Alam Bukit Akasia Terniat Sejak Goresan Awal`,
//   //     shortDesc:
//   //       "Menggambar tidak sekadar membuat coretan. Dalam setiap goresan ada ide yang coba disampaikan oleh sang seniman. Di Sekolah Dasar Alam (SDA) Bukit Akasia Sumedang",
//   //     longDesc: `
//   //   BUKIT AKASIA–Menggambar tidak sekadar membuat coretan. Dalam setiap goresan ada ide yang coba disampaikan oleh sang seniman. Di Sekolah Dasar Alam (SDA) Bukit Akasia Sumedang, menggambar tidak sebatas penyaluran hobi peserta didik, namun juga bagian dari literasi menyampaikan ide melalui visual.

//   // “Aku senang sekali bisa sekolah di Bukit Akasia karena di sini ada klub menggambarnya. Jadi Arsen bisa menggambar dan mewarnai apa saja yang Arsen mau,” kata Arsenio, peserta didik kelas III asal Ujungberung, Bandung.

//   // Sekolah Dasar Alam (SDA) Bukit Akasia adalah salah satu sekolah dasar yang memiliki konsep pembelajaran yang berbeda dengan sekolah dasar lainnya. Konsep dasarnya setiap peserta didik itu unik dengan karakternya yang masing-masing yang berbeda, serta memiliki kebutuhan belajar yang berbeda antara peserta didik yang satu dengan yang lainnya.

//   // SDA Bukit Akasia, selalu berupaya memaksimalkan seluruh potensi baik akademik maupun non-akademik dengan tujuan agar mampu menggali kecerdasan majemuk setiap peserta didik, agar peserta didik mampu tumbuh berkembang sesuai dengan kecerdasan masing-masing sesuai minatnya, hobi, karakter, dan bakat yang mereka miliki. Dalam membantu peserta didik dalam mencapai potensi dan kreativitas dalam bidang non-akademik. SDA Bukit Akasia, memberikan wadah berupa program khusus Klub Menggambar.

//   // Klub Menggambar SDA Bukit Akasia ini adalah tempat peserta didik-peserta didik dapat memulai perjalanan seninya dengan gambar pertama yang indah. Ini semacam kegiatan di lingkungan sekolah yang dilaksanakan peserta didikan ketika selesainya kegiatan belajar mengajar (KBM) yang difasilitasi oleh sekolah. Klub Menggambar berupa sebuah forum yang dirancang untuk mendorong imajinasi dan kreativitas peserta didik melalui seni menggambar.

//   // Klub menggambar SDA Bukit Akasia menekankan pada proses imajinasi dan ekspresi melalui goresan pertama yang indah, bukan sekedar hasil akhir.

//   // “Alhamdulillah saya juga merasa senang dan sangat antusias dengan hadirnya klub menggambar di SD Alam Bukit akasia, karena anak saya suka mengekspresikan apa pun lewat gambar jadi saya merasa dengan adanya klub gambar ini dia mempunyai tempat untuk menyalurkan hobi dan bakat nya.” kata Ibunda Arsenio.

//   // Di Klub Menggambar peserta didik peserta didik bisa mengekspresikan perasaan melalui gambar ataupun warna-warna sehingga bisa menjadi suatu karya natural dari goresan tangan mereka sendiri. Mengembangkan imajinasi sejak dini di Klub Menggambar SDA Bukit Akasia ditujukan untuk peserta didik dalam berbagai jenjang tingkatan dari mulai kelas I hingga kelas IV dengan harapan dapat menjadi media dalam mengungkapkan ide dan perasaannya dalam bentuk visual. Di SDA Bukit Akasia, angkatan peserta didik memang baru sampai kelas IV.
//   //  Klub Menggambar dilaksanakan peserta didik setiap hari Rabu dan Kamis pukul 15.00 hingga selesai dibimbing illustrator profesional yang akrab dipanggil Kang Oby.
//   // Pada awal kegiatan Klub menggambar selalu diawali dengan pemanasan imajinasi. Pendekatan ini tidak hanya mengembangkan imajinasi siswa, tetapi juga memperkuat keterampilan observasi dan pemahaman mereka terhadap dunia sekitar. Selain mengembangkan imajinasi, menggambar juga memiliki banyak manfaat lain, termasuk dalam hal pengembangan keterampilan motorik halus. Menggerakkan tangan untuk menggoreskan pensil atau kuas membantu siswa melatih koordinasi tangan dan mata mereka.
//   // “Kegiatan untuk peserta didik setelah pemanasan imajinasi dilanjutkan dengan mempelajari berbagai teknik menggambar, dimulai dengan teknik menggambar, seperti membuat garis vertikal, horizontal, dan diagonal. Kemudian mulailah membuat bentuk, membuat segitiga, persegi, dari membuat bentuk kecil hingga bentuk besar,” kata Kang Oby.
//   // Pada kegiatan Klub Menggambar, peserta didik diajak untuk mencoba berbagai teknik, mulai dari menggambar dengan pensil hingga menggunakan media cat air, krayon, dan spidol. Setiap sapuan pensil warna, setiap sapuan kuas, dan penggunaan bahan seni yang berbeda melatih koordinasi tangan-mata peserta didik. Kegiatan ini juga memberikan kesempatan kepada peserta didik untuk meningkatkan keterampilan dengan penuh semangat dan percaya diri. Interaksi antar peserta didik juga sangat penting dalam klub ini. Hal ini untuk membangun rasa empati dan kolaborasi dalam lingkungan kreatif.
//   // Klub ini menjadi tempat peserta didik memulai perjalanan seninya dengan gambar pertama yang indah.  Salah satu tujuan utama dari  Klub Menggambar di SDA Bukit Akasia adalah membantu pembentukan karakter peserta didik. Teknisnya dengan memberikan ruang bebas untuk berekspresi. Klub ini membantu peserta didik-peserta didik memahami bahwa setiap karya seni adalah cerminan dari diri mereka, dan tidak ada karya yang benar atau salah. Semua karya dihargai sebagai bentuk ekspresi pribadi yang unik.
//   // Klub Menggambar SDA Bukit Akasia bukan hanya sekadar tempat belajar menggambar, tetapi menjadi ruang bagi peserta didik-peserta didik untuk berimajinasi, berekspresi, dan mengasah keterampilan mereka.  Setiap goresan awal yang mereka buat adalah langkah kecil menuju pencapaian yang lebih besar, menciptakan karya-karya yang indah dan penuh makna. Melalui Club Menggambar, Sekolah Dasar Alam (SDA) Bukit Akasia terus berkomitmen untuk mendukung perkembangan kreatif peserta didik yang penuh potensi. (Rizka Rahmah Zakiyah dan Neni Febriyani)
//   //     `,
//   //     imgSrc: clubMenggambarSep,
//   //     link: "/news-page-4",
//   //   },
// ];
