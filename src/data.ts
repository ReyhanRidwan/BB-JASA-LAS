import { Service, Project, BeforeAfterItem, Testimonial, FAQItem } from './types';

// Let's declare our generated AI images
export const IMAGES = {
  hero: '/images/hero_canopy_fence_1781615730776.jpg',
  serviceFence: '/images/service_fence_1781615743786.jpg',
  serviceCanopy: '/images/service_canopy_1781615757938.jpg',
  serviceDoor: '/images/service_door_1781615773254.jpg',
  portfolioWelding: '/images/portfolio_welding_1781615789961.jpg',
  portfolioStairs: '/images/portfolio_stairs_1781615809056.jpg',
  portfolioBalcony: '/images/portfolio_balcony_1781615823697.jpg',
  portfolioTrellis: '/images/portfolio_trellis_1781615837644.jpg',
  beforeFence: '/images/before_fence_1781615854296.jpg',
  beforeCanopy: '/images/before_canopy_1781615868505.jpg',
};

export const SERVICES: Service[] = [
  {
    id: 'pagar-besi',
    title: 'Pagar Besi Minimalis',
    description: 'Pembuatan pagar pengaman tangguh dengan perpaduan besi hollow, pipa, atau expanded metal. Finishing cat anti-karat zinc chromate berkualitas tinggi serta cat doff premium.',
    image: IMAGES.serviceFence,
    features: ['Besi Hollow Galvanis Anti Karat', 'Welding sambungan 100% full-fill rapi', 'Finishing Epoxy Zinc Chromate', 'Garansi konstruksi 1 tahun'],
    priceRange: 'Rp 650.000 - Rp 1.200.000 / m²'
  },
  {
    id: 'kanopi-besi',
    title: 'Kanopi Besi & Hollow',
    description: 'Atap carport mewah menggunakan struktur rangka besi hollow tebal dikombinasikan dengan atap kaca tempered, solarflat, alderon double layer, atau spandek pasir.',
    image: IMAGES.serviceCanopy,
    features: ['Besi Hollow 4x8 atau 5x10 SNI', 'Pilihan Atap Premium (Alderon / Tempered Glass)', 'Desain minimalis modern clean look', 'Sistem talang air terintegrasi anti bocor'],
    priceRange: 'Rp 750.000 - Rp 1.800.000 / m²'
  },
  {
    id: 'pintu-besi',
    title: 'Pintu Besi & Emergency Door',
    description: 'Pintu besi minimalis modern, pintu garasi lipat / sliding, serta emergency steel door untuk ruko, kantor, dan perumahan dengan kunci pengaman double system.',
    image: IMAGES.serviceDoor,
    features: ['Plat besi tebal minimum 1.5mm', 'Kunci pengamanan ganda industri', 'Engsel bearing heavy-duty anti turun', 'Opsi kombinasi laser-cutting premium'],
    priceRange: 'Rp 1.500.000 - Rp 3.500.000 / unit'
  },
  {
    id: 'tralis-jendela',
    title: 'Tralis Jendela Minimalis',
    description: 'Tralis jendela pengaman anti-maling dengan material nako, behel ulir, atau hollow minimalis modern. Desain custom elegan tanpa merusak estetika arsitektur.',
    image: IMAGES.portfolioTrellis,
    features: ['Bahan nako padat atau behel solid', 'Pemasangan sekrup dinabolt tanam kuat', 'Finishing halus tanpa guratan runcing', 'Custom pola geometri modern'],
    priceRange: 'Rp 350.000 - Rp 600.000 / lubang'
  },
  {
    id: 'tangga-besi',
    title: 'Tangga Besi Industrial',
    description: 'Pembuatan tangga tangga besi trap melayang, tangga putar, tangga rebah bersiku ganda, rangka baja tangga dengan pijakan kayu solid jawa, besi anti slip, atau plat baja bordes.',
    image: IMAGES.portfolioStairs,
    features: ['Konfigurasi balok WF atau besi hollow double', 'Desain trap tangga melayang atau industrial', 'Pijakan kayu jati/merbau berlapis melamin', 'Kekuatan beban teruji tinggi'],
    priceRange: 'Rp 1.200.000 - Rp 2.500.000 / meter tinggi'
  },
  {
    id: 'railing-balkon',
    title: 'Railing Balkon Modern',
    description: 'Pagar pembatas lantai atas bergaya minimalis maupun industrial modern dengan kaca tempered, besi jari-jari vertikal rapat, atau plat perforasi.',
    image: IMAGES.portfolioBalcony,
    features: ['Standar tinggi aman arsitektur (90-110cm)', 'Kaca tempered 8-10mm (opsional)', 'Pegangan handrail kayu solid anti-rayap', 'Sambungan mulus tanpa celah tajam'],
    priceRange: 'Rp 600.000 - Rp 1.100.000 / m¹'
  },
  {
    id: 'railing-tangga',
    title: 'Railing Tangga Besi',
    description: 'Railing tangga untuk pengaman naik turun tangga berseni arsitektural tinggi. Menggunakan kombinasi tiang besi kokoh dan pegangan kayu hangat.',
    image: IMAGES.portfolioStairs,
    features: ['Bahan hollow galvanis berkualitas prima', 'Proses sanding sambungan las super halus', 'Instalasi angkur tanam dinding rigid', 'Desain ergonomis & estetik'],
    priceRange: 'Rp 550.000 - Rp 950.000 / m¹'
  },
  {
    id: 'konstruksi-besi-custom',
    title: 'Konstruksi Besi Custom',
    description: 'Fabrikasi struktur besi custom, mezanin indoor, kanopi bentang lebar, tiang reklame, meja kursi industrial cafe, rak besi pajangan ruko, hingga mezzanine baja ringan.',
    image: IMAGES.portfolioWelding,
    features: ['Konsultasi rekayasa struktur sipil', 'Menggunakan material baja WF / UNP / CNP SNI', 'Desain model 3D CAD sebelum perakitan', 'Mengatasi area ruang terbatas / optimasi split-level'],
    priceRange: 'Sesuai Spesifikasi Desain'
  }
];

export const PORTFOLIO: Project[] = [
  {
    id: 'p-pagar',
    title: 'Pagar Besi Minimalis Matte Black',
    category: 'Pagar',
    image: IMAGES.serviceFence,
    description: 'Proyek pembuatan pagar modern berukuran 8x2 meter dengan material frame hollow 4x8 tebal 1.8mm dan jari-jari hollow 2x4 dengan cat finishing hitam doff tahan cuaca ekstrem.',
    finishedYear: '2026',
    duration: '10 Hari Kerja',
    material: 'Hollow Galvanis SNI 1.8mm & Cat Kansai Paint'
  },
  {
    id: 'p-kanopi',
    title: 'Kanopi Kaca Tempered Flat Carport',
    category: 'Kanopi',
    image: IMAGES.serviceCanopy,
    description: 'Instalasi kanopi carport modern dengan struktur balok hollow double dilapisi cat epoxy anti karat dan penutup kaca tempered tebal 10mm transparan.',
    finishedYear: '2025',
    duration: '14 Hari Kerja',
    material: 'Besi Hollow Double 5x10 & Kaca Tempered 10mm'
  },
  {
    id: 'p-pintu',
    title: 'Pintu Gerbang Besi Custom Laser Cut',
    category: 'Pintu',
    image: IMAGES.serviceDoor,
    description: 'Pintu utama rumah premium dengan panel baja motif daun tropis laser cut presisi tinggi dipadu gagang pintu stainless custom panjang 1.5 meter.',
    finishedYear: '2026',
    duration: '12 Hari Kerja',
    material: 'Steel Laser Cutting 2mm, Hollow Galvanis'
  },
  {
    id: 'p-stairs',
    title: 'Tangga Rebah Konstruksi WF Pijakan Jati',
    category: 'Tangga',
    image: IMAGES.portfolioStairs,
    description: 'Tangga lurus indoor bergaya modern industrial menggunakan kolom penyangga utama baja WF 150 dan anak tangga berlapis papan kayu Jati Jepara finishing semi-gloss.',
    finishedYear: '2025',
    duration: '8 Hari Kerja',
    material: 'Baja WF, Plat Siku 5x5, Kayu Jati Solid 3cm'
  },
  {
    id: 'p-balkon',
    title: 'Railing Balkon Kaca & Handrail Merbau',
    category: 'Railing',
    image: IMAGES.portfolioBalcony,
    description: 'Railing pengaman area balkon luar lantai 2 dengan tiang penyangga besi hollow hitam, kaca tempered bening, dan handrail kayu merbau oven profil bulat.',
    finishedYear: '2026',
    duration: '6 Hari Kerja',
    material: 'Hollow Galvanis 4x4, Kaca Tempered 8mm, Kayu Merbau'
  },
  {
    id: 'p-tralis',
    title: 'Tralis Jendela Solid Square Minimalis',
    category: 'Tralis',
    image: IMAGES.portfolioTrellis,
    description: 'Pemasangan paket tralis di 12 jendela rumah tinggal, menggunakan besi nako padat ukuran 12mm x 12mm yang kokoh, anti gergaji, dirakit presisi.',
    finishedYear: '2026',
    duration: '5 Hari Kerja',
    material: 'Besi Nako Bulat/Kotak Solid 12mm'
  }
];

export const BEFORE_AFTER: BeforeAfterItem[] = [
  {
    id: 'ba-pagar',
    title: 'Renovasi Pagar Depan Rumah Mewah',
    description: 'Tampilan depan rumah tanpa pagar terlihat tidak rapi dan kurang privasi, kini bertransformasi menjadi megah dan aman dengan pagar modern industrial.',
    beforeImage: IMAGES.beforeFence,
    afterImage: IMAGES.serviceFence,
    beforeLabel: 'Sebelum Pemasangan Pagar',
    afterLabel: 'Setelah Pagar Matte-Black Terpasang'
  },
  {
    id: 'ba-kanopi',
    title: 'Instalasi Atap Kanopi Carport Depan',
    description: 'Suhu lantai carport terasa sangat terik dan merusak cat mobil karena paparan sinar langsung, kini terlindungi dengan kanopi hollow modern beraliran udara sejuk.',
    beforeImage: IMAGES.beforeCanopy,
    afterImage: IMAGES.serviceCanopy,
    beforeLabel: 'Carport Panas Tanpa Atap',
    afterLabel: 'Kanopi Premium Finishing Cantik'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Budi Hartono',
    role: 'Pemilik Rumah Tinggal',
    company: 'Serpong Harmony Residence',
    content: 'Sangat puas dengan pengerjaan pagarnya. Las-lasannya luar biasa rapi, tidak ada sisa slag atau lubang kecil. Dicat dasar zinc chromate tebal jadi tidak rewel karat meskipun kehujanan terus. Terima kasih BB JASA LAS!',
    rating: 5,
    avatar: 'BH'
  },
  {
    id: 't2',
    name: 'Mega Lestari',
    role: 'Arsitek & Kontraktor Utama',
    company: 'Studio Cipta Ruang Semesta',
    content: 'Sebagai arsitek, saya sangat menuntut detail presisi. Tim BB Jasa Las mampu merealisasikan gambar CAD tangga melayang industrial kami tanpa deviasi ukuran. Sambungan las dihaluskan sempurna menggunakan amplas flap disc profesional.',
    rating: 5,
    avatar: 'ML'
  },
  {
    id: 't3',
    name: 'Andre Sugiyono',
    role: 'Pemilik Cafe "Kopi Ruang Sela"',
    company: 'Sektor 9 Tangerang',
    content: 'Mempercayakan pembuatan mezanin besi serta railing tangga cafe di sini. Pengerjaan cepat di malam hari agar tidak mengganggu operasional cafe. Kokoh, tidak goyang, dan harganya sangat bersahabat dibanding kontraktor sipil.',
    rating: 5,
    avatar: 'AS'
  },
  {
    id: 't4',
    name: 'Herry Prasetyo',
    role: 'Developer Perumahan Mandiri',
    company: 'PT Graha Abadi Persada',
    content: 'BB JASA LAS adalah mitra terpercaya kami untuk tralis dan pintu besi utama perumahan cluster kami. Selalu tepat waktu memenuhi tenggat proyek, material baja galvanis berstandar SNI asli berkualitas.',
    rating: 5,
    avatar: 'HP'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'q1',
    question: 'Berapa harga rincian jasa las di BB JASA LAS?',
    answer: 'Harga jasa las bervariasi bergantung pada jenis material (misal besi hollow galvanis, plat baja, atau baja WF), model/desain (semakin detail maka waktu fabricating nambah), ketebalan material yang dipilih, dan volume total. Kami menggunakan patokan harga per meter persegi (m²) atau per unit yang transparan. Hubungi kami untuk mendapatkan estimasi penawaran harga gratis beserta rincian material.'
  },
  {
    id: 'q2',
    question: 'Apakah saya bisa mendesain model custom sendiri?',
    answer: 'Sangat bisa! Kami menerima rujukan model dari Pinterest, Instagram, maupun gambar corat-coret sketsa Anda. Tim ahli gambar kami juga siap membantu mematangkan konsep visual melalui model rancangan 3D CAD sehingga proporsi desain dan beban aman teruji sebelum dikerjakan di workshop.'
  },
  {
    id: 'q3',
    question: 'Apakah melayani kunjungan survey dan luar kota?',
    answer: 'Ya, kami melayani jasa survey gratis ke wilayah JABODETABEK untuk melakukan pengukuran presisi dan konsultasi material langsung di tempat. Untuk pengerjaan volume sekala besar seperti cafe, perkantoran, ruko, maupun pergudangan, kami melayani proyek ke seluruh kota di Pulau Jawa.'
  },
  {
    id: 'q4',
    question: 'Berapa lama proses fabrikasi di workshop hingga instalasi?',
    answer: 'Estimasi pengerjaan bergantung volume proyek. Untuk produk standar seperti Pagar Minimalis, Pintu Besi, atau Railing Balkon rumah tinggal (volume < 15 m²), proses pengerjaan berkisar 7 sampai 12 hari kerja. Perakitan utama dilakukan di workshop kami, sehingga durasi pemasangan (instalasi) aktual di lokasi rumah Anda hanya memakan waktu 1 hingga 2 hari.'
  },
  {
    id: 'q5',
    question: 'Apakah pekerjaan las kami bergaransi?',
    answer: 'Setiap hasil pekerjaan fabrikasi BB JASA LAS disertai dengan Garansi Konstruksi Rigid selama 1 Tahun. Kami menjamin kekuatan struktural sambungan las tidak akan lepas, serta memberikan garansi perbaikan cat mengelupas gratis dalam jangka waktu 3 bulan pertama setelah serah terima.'
  }
];
