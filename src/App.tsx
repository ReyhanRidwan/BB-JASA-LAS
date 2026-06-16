import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import BudgetEstimator from './components/BudgetEstimator';
import ContactForm from './components/ContactForm';
import { SERVICES, PORTFOLIO, TESTIMONIALS, FAQS, IMAGES } from './data';
import { 
  Building2, Home, Store, Coffee, Briefcase, Construction,
  CheckCircle, ArrowUpRight, Flame, Shield, Clock, Handshake, 
  Settings, Award, Sparkles, Star, ChevronDown, MessageCircle, HelpCircle
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'Semua' | 'Pagar' | 'Kanopi' | 'Pintu' | 'Tralis' | 'Tangga' | 'Railing' | 'Konstruksi'>('Semua');
  const [faqOpen, setFaqOpen] = useState<Record<string, boolean>>({
    'q1': true, // Keep first open by default
  });

  const toggleFaq = (id: string) => {
    setFaqOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredPortfolio = activeTab === 'Semua' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(p => p.category === activeTab);

  const contactWA = "https://api.whatsapp.com/send?phone=6282123456789&text=Halo%20BB%20JASA%20LAS.%20Saya%20tertarik%20dengan%20pekerjaan%20las%20premium%20Anda.%20Bisa%20bantu%20survey?";

  return (
    <div className="bg-industrial-black min-h-screen font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      
      {/* Dynamic Header & Navigation */}
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden border-b border-gray-800/60">
        {/* Background Image with elegant linear overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Pekerjaan las berkualitas tinggi BB Jasa Las" 
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-industrial-black/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-black via-industrial-black/40 to-transparent"></div>
        </div>

        {/* Industrial orange flare lights */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              {/* Top Industrial Badge */}
              <div className="inline-flex items-center space-x-2 bg-industrial-gray/90 border border-gray-800 rounded-full px-4.5 py-2">
                <Flame className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-widest text-gray-300">
                  STANDARD FABRIKASI INDUSTRI PREMIUM
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] " id="hero-headline">
                Jasa Las Profesional untuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">Pagar, Kanopi & Konstruksi Besi</span> Berkualitas
              </h1>

              {/* Subheadline */}
              <p className="font-sans text-lg text-gray-300 leading-relaxed max-w-2xl">
                Melayani pembuatan Pagar, Pintu, Kanopi, Railing Balkon, Tangga Industrial, Tralis, dan berbagai kebutuhan konstruksi besi custom dengan hasil super rapi, kuat, presisi, dan bergaransi 1 tahun di wilayah JABODETABEK.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href="#contact"
                  className="bg-primary hover:bg-primary-dark text-white font-sans text-sm font-bold uppercase tracking-wider px-8 py-4 rounded shadow-lg shadow-primary/25 hover:shadow-primary/45 text-center transition-all duration-300 transform active:scale-95 flex items-center justify-center space-x-2"
                >
                  <span>Konsultasi Gratis</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
                <a
                  href="#portfolio"
                  className="bg-industrial-gray hover:bg-industrial-charcoal text-white font-sans text-sm font-semibold border border-gray-800 hover:border-gray-600 px-8 py-4 rounded text-center transition duration-300"
                >
                  Lihat Portofolio Projek
                </a>
                <a
                  href={contactWA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans text-sm font-bold px-6 py-4 rounded text-center transition duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  <span>Hubungi WhatsApp</span>
                </a>
              </div>

              {/* Brief stats/trustmarks */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-800/80 max-w-lg">
                <div>
                  <span className="block font-display text-2xl font-extrabold text-white">100%</span>
                  <span className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mt-1">Besi SNI Kokoh</span>
                </div>
                <div>
                  <span className="block font-display text-2xl font-extrabold text-white">1 Tahun</span>
                  <span className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mt-1">Garansi Konstruksi</span>
                </div>
                <div>
                  <span className="block font-display text-2xl font-extrabold text-white">GRATIS</span>
                  <span className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mt-1">Survey & Pengukuran</span>
                </div>
              </div>
            </div>

            {/* Hero Right Picture / Cards Stack */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                {/* Visual shadow effect behind image */}
                <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-4 translate-y-4 blur-sm z-0"></div>
                
                {/* Main floating high-quality showcase card */}
                <div className="relative bg-industrial-gray border border-gray-800 p-3 rounded-2xl shadow-2xl z-10 overflow-hidden transform hover:-translate-y-1 transition duration-500">
                  <img 
                    src={IMAGES.portfolioWelding} 
                    alt="Proses welding besi SNI professional" 
                    className="w-full h-72 sm:h-96 object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-4 bg-industrial-black/90 backdrop-blur rounded-xl border border-gray-800 mt-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider">SEDANG BERLANGSUNG</span>
                      <h4 className="font-display font-bold text-sm text-white mt-0.5">Fabrikasi di Workshop</h4>
                      <p className="text-xs text-gray-400 mt-1">Pengelasan CO² MIG rapi, anti kropos.</p>
                    </div>
                    <div className="flex space-x-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-primary absolute"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TARGET PELANGGAN & SECTOR */}
      <section className="py-12 bg-industrial-gray border-b border-gray-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="shrink-0 max-w-xs text-center md:text-left mb-4 md:mb-0">
              <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase">Target Konsumen</span>
              <h3 className="font-display text-lg font-bold text-white mt-1">Kami Melayani Berbagai Sektor Kontrak:</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 w-full">
              {[
                { name: 'Pemilik Rumah', icon: Home, desc: 'Pagar & Kanopi' },
                { name: 'Pemilik Ruko', icon: Store, desc: 'Pintu Rol & Tralis' },
                { name: 'Kos-kosan', icon: Building2, desc: 'Pagar & Balkon' },
                { name: 'Cafe & Resto', icon: Coffee, desc: 'Desain Industrial' },
                { name: 'Perkantoran', icon: Briefcase, desc: 'Emergency Door' },
                { name: 'Developer', icon: Construction, desc: 'Sektor Cluster' }
              ].map((sector) => {
                const Icon = sector.icon;
                return (
                  <div key={sector.name} className="bg-industrial-black/50 border border-gray-800/80 rounded-xl p-4 text-center hover:border-primary/50 transition-colors duration-300">
                    <div className="inline-flex p-2 bg-industrial-charcoal rounded-lg mb-2 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="block font-display text-xs font-bold text-white">{sector.name}</span>
                    <span className="block text-[10px] text-gray-500 font-mono mt-0.5">{sector.desc}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION LAYANAAN (SERVICE CARDS) */}
      <section id="layanan" className="py-24 bg-industrial-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              <Settings className="h-3.5 w-3.5" />
              <span>Klasifikasi Layanan Kami</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Konstruksi Besi & Jasa Las Premium
            </h2>
            <p className="font-sans text-gray-400">
              Setiap pekerjaan dikerjakan oleh tim welder bersertifikasi standar industri dengan ketelitian tinggi, sambungan padat, diamplas halus sebelum dilapis epoxy antikarat primer.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                className="bg-industrial-gray rounded-xl overflow-hidden border border-gray-800/80 hover:border-primary/60 transition-all duration-300 shadow-xl flex flex-col justify-between group"
                id={`card-${service.id}`}
              >
                <div>
                  {/* Photo area */}
                  <div className="relative h-48 overflow-hidden bg-gray-900 border-b border-gray-800">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-gray via-transparent to-transparent"></div>
                  </div>

                  {/* Text area */}
                  <div className="p-5 space-y-4">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-primary transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    <div className="border-t border-gray-800/80 pt-3.5 space-y-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 block">Fitur Utama:</span>
                      <ul className="space-y-1.5">
                        {service.features.map((feat, i) => (
                          <li key={i} className="text-xs text-gray-300 flex items-start space-x-1.5">
                            <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-2">
                  <div className="border-t border-gray-800/80 pt-3.5 mb-4 flex justify-between items-center bg-industrial-black/10">
                    <span className="text-[10px] font-mono text-gray-500 uppercase">Kisaran Biaya</span>
                    <span className="text-xs font-mono font-bold text-primary">{service.priceRange}</span>
                  </div>
                  <a
                    href={`https://api.whatsapp.com/send?phone=6282123456789&text=Halo%20Admin%20BB%20JASA%20LAS,%20saya%20tertarik%20dengan%20layanan%20*${encodeURIComponent(service.title)}*.%20Berapa%20perkiraan%20biayanya?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-industrial-black hover:bg-primary hover:text-white text-gray-300 font-sans text-xs font-bold uppercase tracking-wider py-2.5 rounded border border-gray-800 hover:border-primary transition duration-300"
                  >
                    Tanya Desain & Price
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PORTFOLIO SHOWROOM (WITH CATEGORIES) */}
      <section id="portfolio" className="py-24 bg-industrial-gray border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl text-left">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                <Award className="h-3.5 w-3.5" />
                <span>Showcase Proyek Selesai</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Galeri Hasil Kerja Las Premium
              </h2>
              <p className="font-sans text-sm text-gray-400 mt-2 max-w-lg">
                Beberapa dokumentasi projek arsitektur rumah dan kafe di wilayah Tangerang, Jakarta Timur, Depok, dan Bekasi yang baru saja rampung dikerjakan.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {(['Semua', 'Pagar', 'Kanopi', 'Pintu', 'Tangga', 'Railing', 'Tralis'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider uppercase rounded transition-all duration-300 ${
                    activeTab === cat
                      ? 'bg-primary text-white'
                      : 'bg-industrial-black text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((project) => (
              <div 
                key={project.id}
                className="bg-industrial-black rounded-xl overflow-hidden border border-gray-800/60 shadow-xl group hover:border-primary/45 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-gray-950">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded tracking-wide uppercase shadow">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="font-display text-base font-bold text-white group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="border-t border-gray-850 pt-4 grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] font-mono text-gray-500 uppercase block">Material:</span>
                        <span className="text-[11px] font-sans text-gray-300 font-semibold block truncate">{project.material}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-gray-500 uppercase block">Durasi Pengerjaan:</span>
                        <span className="text-[11px] font-sans text-gray-300 font-semibold block">{project.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={`https://api.whatsapp.com/send?phone=6282123456789&text=Halo%20Admin%20BB%20JASA%20LAS,%20saya%20tertarik%20dengan%20projek%20anda%20*${encodeURIComponent(project.title)}*.%20Apakah%20bisa%20di-custom%20sesuai%20ukuran%20rumah%20hadap%20saya?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1.5 w-full bg-industrial-gray hover:bg-primary-dark/85 text-center text-white font-sans text-xs font-bold uppercase tracking-wider py-3 rounded border border-gray-800 hover:border-transparent transition duration-300"
                  >
                    <span>Pesan Model Seperti Ini</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE BEFORE-AFTER SLIDER IMPORTED */}
      <BeforeAfterSlider />

      {/* 6. MENGAPA MEMILIH KAMI (ADVANTAGES) */}
      <section id="keunggulan" className="py-24 bg-industrial-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              <Shield className="h-3.5 w-3.5" />
              <span>Alasan Memilih Bengkel Las Kami</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Keunggulan Mutu Bengkel Produksi BB JASA LAS
            </h2>
            <p className="font-sans text-gray-400">
              Kami menolak berkompromi dengan kualitas. Dari ketebalan plat hingga ketepatan jadwal instalasi, kepuasan Anda adalah representasi reputasi tim kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Hasil Las Rapi & Halus',
                icon: Sparkles,
                desc: 'Sambungan las dipastikan penuh, rata, kokoh, kemudian digerinda licin tanpa pori untuk mengantisipasi masuknya air yang memicu karat.'
              },
              {
                title: 'Material SNI Berkualitas',
                icon: Shield,
                desc: 'Hanya menggunakan besi hollow & plat hitam bersertifikasi SNI asli. Kami infokan ketebalan riil milimeter besi secara transparan sebelum tanda tangan kontrak.'
              },
              {
                title: 'Bebas Desain Custom 3D',
                icon: Construction,
                desc: 'Tidak terbatas pada katalog yang ada. Tim kami melayani penerjemahan gambar custom rujukan Anda dan memformulasikan rancangan sebelum diproduksi.'
              },
              {
                title: 'Harga Kompetitif & Jujur',
                icon: Award,
                desc: 'Rincian anggaran dijabarkan transparan sejak awal. Tanpa ada biaya tambahan aneh di akhir projek di luar kesepakatan tertulis.'
              },
              {
                title: 'pengerjaan Tepat Waktu',
                icon: Clock,
                desc: 'Mematok target hari kerja yang realistis. Fabrikasi utama dilakukan di dalam workshop kami untuk mencegah mengotori halaman rumah pelanggan terlalu lama.'
              },
              {
                title: 'Garansi Resmi 1 Tahun',
                icon: Handshake,
                desc: 'Garansi kaku struktural selama 1 tahun penuh. Adanya bagian yang patah atau jebol akan langsung kami las ulang sepenuhnya tanpa biaya.'
              },
              {
                title: 'Sertifikasi Welder Berpengalaman',
                icon: Settings,
                desc: 'Welder kami memiliki pengalaman fabrikasi bervolume berat selama tahunan. Paham tatanan konstruksi penopang beban struktural kanopi bentang lebar.'
              },
              {
                title: 'Survey & Konsultasi Gratis',
                icon: Home,
                desc: 'Kunjungan survey wilayah JABODETABEK untuk keperluan pengukuran presisi di lokasi dan pengantaran katalog material dilakukan tanpa pungutan biaya.'
              }
            ].map((adv, index) => {
              const Icon = adv.icon;
              return (
                <div 
                  key={index}
                  className="bg-industrial-gray p-6 rounded-xl border border-gray-800/80 hover:border-primary/40 transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div className="p-3 bg-industrial-black rounded-lg inline-flex text-primary border border-gray-800 shadow mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-base font-bold text-white mb-2">{adv.title}</h3>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed">{adv.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. ALUR PROSES PENGERJAAN */}
      <section id="alur-kerja" className="py-24 bg-industrial-gray border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              <Clock className="h-3.5 w-3.5" />
              <span>Sistem Alur Kerja Profesional</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              8 Langkah Pengerjaan Terstruktur
            </h2>
            <p className="font-sans text-gray-400">
              Prosedur operasional kami dirancang transparan memastikan hasil pesanan sesuai dengan keinginan Anda sejak awal hingga serah terima kunci.
            </p>
          </div>

          {/* Step Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              { num: '01', title: 'Konsultasi Konten', desc: 'Diskusikan model, rujukan gambar, spesifikasi bahan, dan koordinat area yang ingin dipasangi teralis atau kanopi.' },
              { num: '02', title: 'Survey Lokasi', desc: 'Tim pengukur kami bertolak ke lokasi Anda membawa sampel besi. Memetakan sudut kemiringan dlsb.' },
              { num: '03', title: 'Pengukuran Presisi', desc: 'Mengukur real milimeter area untuk menyesuaikan lebar gap dinding agar barang presisi pas dipasang.' },
              { num: '04', title: 'Pembuatan Desain 3D', desc: 'Bila perlu, kami buat draf visual desain model 3D CAD agar Anda ada bayangan proporsi riil.' },
              { num: '05', title: 'Produksi Workshop', desc: 'Pemotong baja dan perakitan panel utama dilakukan di pabrikasi workshop kami dengan alat protektif lengkap.' },
              { num: '06', title: 'Instalasi Lapangan', desc: 'Tim logistik membawa barang rintisan las untuk disetel kokoh di lokasi Anda secara aman.' },
              { num: '07', title: 'Finishing Sempurna', desc: 'Meratakan dempul sambungan, menembakkan top coat cat penutup tebal untuk hasil indah maksimal.' },
              { num: '08', title: 'Serah Terima Projek', desc: 'Inspeksi hasil rapi pengerjaan bersama Anda. Penyerahan sertifikat garansi tertulis 1 tahun.' }
            ].map((step, idx) => (
              <div 
                key={idx}
                className="bg-industrial-black p-6 rounded-xl border border-gray-800 relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute top-2 right-2 text-7xl font-display font-extrabold text-white/[0.03] select-none group-hover:text-primary/[0.04] transition-colors duration-300">
                  {step.num}
                </div>
                <div className="font-mono text-xs font-bold text-primary mb-3">LANGKAH {step.num}</div>
                <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-primary transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BUDGET ESTIMATOR IMPORTED */}
      <BudgetEstimator />

      {/* 9. TESTIMONI INTEGRATED */}
      <section id="testimoni" className="py-24 bg-industrial-gray border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              <Star className="h-3.5 w-3.5 animate-spin" />
              <span>Review Dan Testimoni Riil</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Ulasan Pelanggan BB JASA LAS
            </h2>
            <p className="font-sans text-gray-400">
              Kepuasan pelanggan adalah parameter kesuksesan tertinggi fabrikasi kami. Berikut pandangan asli dari pemilik rumah, arsitek, dan pemilik unit bisnis usaha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id}
                className="bg-industrial-black p-6 sm:p-8 rounded-xl border border-gray-800 shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-1 text-primary">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-sans text-sm text-gray-300 leading-relaxed italic">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center space-x-3.5 pt-6 mt-6 border-t border-gray-800/80">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 text-primary flex items-center justify-center font-display font-extrabold text-sm tracking-wider">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">{t.name}</h4>
                    <span className="block text-xs text-gray-500 font-mono">
                      {t.role} <span className="text-gray-600">|</span> <span className="text-primary">{t.company}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQS SECTION (ACCORDION ACCORDANCES) */}
      <section id="faq" className="py-24 bg-industrial-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Pertanyaan yang Sering Diajukan</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-all text-white mb-4">
              Tanya Jawab Umum Seputar Las
            </h2>
            <p className="font-sans text-gray-400">
              Temukan solusi jawaban cepat dari beberapa keraguan umum pelanggan seputar tarif dasar material, sistem DP, dan proses garansi pasca perakitan.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = faqOpen[faq.id];
              return (
                <div 
                  key={faq.id}
                  className="bg-industrial-gray rounded-xl border border-gray-850 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-6 py-4.5 font-display font-semibold text-white hover:text-primary transition-colors flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out border-gray-900 ${
                      isOpen ? 'max-h-[500px] border-t p-6 bg-industrial-black/50' : 'max-h-0 overflow-hidden'
                    }`}
                  >
                    <p className="font-sans text-xs sm:text-sm text-gray-450 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. CONTACT & CONSULTATION FORM SECTION */}
      <ContactForm />

      {/* 12. FLOATING WHATSAPP BUTTON (ALWAYS ACCESSIBLE WITH GENTLE ANIMATIONS) */}
      <a
        href={contactWA}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center justify-center group focus:outline-none"
        id="floating-cta-whatsapp"
        aria-label="Direct Chat WhatsApp BB JASA LAS"
      >
        <span className="absolute right-full mr-3 bg-industrial-black/95 text-white text-xs font-mono font-bold tracking-wider uppercase px-3 py-1.5 rounded border border-gray-850 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          Hubungi Admin WA (Fast)
        </span>
        
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-ping z-0 group-hover:bg-[#25D366]/40"></span>
        
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 relative z-10 text-white animate-bounce" />
      </a>

      {/* 13. FOOTER SECTION WITH KEYWORDS SEO OPTIMIZED */}
      <footer className="bg-industrial-black border-t border-gray-850 text-gray-500 py-16 text-center lg:text-left relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Block 1: About */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-lg font-display text-white font-bold tracking-wider uppercase">
                BB JASA <span className="text-primary">LAS</span>
              </span>
              <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-md">
                BB JASA LAS adalah bengkel las besi kontemporer premium. Berbekal komitmen menghantarkan kerapian, kejujuran sertifikasi SNI, dan layanan service bergaransi penuh 1 tahun. Kami melayani perumahan elite, ruko komersial, gedung instansi, perkantoran, dan mezzanine cafe.
              </p>
              <div className="pt-2 text-xs text-gray-400 font-mono tracking-wide">
                Welding Expert Jamin Bebas Karat & Bullseye Welding Joint
              </div>
            </div>

            {/* Block 2: Quick Links */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">Menu Layanan Utama</h4>
              <ul className="text-xs space-y-2 text-gray-400">
                <li><a href="#layanan" className="hover:text-primary transition">Jasa Las Pagar</a></li>
                <li><a href="#layanan" className="hover:text-primary transition">Jasa Las Kanopi</a></li>
                <li><a href="#layanan" className="hover:text-primary transition">Jasa Las Pintu Besi</a></li>
                <li><a href="#layanan" className="hover:text-primary transition">Jasa Railing Balkon & Tangga</a></li>
                <li><a href="#layanan" className="hover:text-primary transition">Konstruksi Besi Custom & Mezzanine</a></li>
              </ul>
            </div>

            {/* Block 3: SEO Keywords Information Block */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">Search Tag SEO Optimize</h4>
              <p className="text-[10px] font-sans text-gray-500 leading-relaxed">
                Kami siap melayani kebutuhan pencarian Anda untuk: <strong className="text-gray-400">Jasa Las, Jasa Las Pagar, Jasa Las Kanopi, Jasa Las Pintu, Jasa Las Tralis, Jasa Las Railing, Tukang Las Terdekat</strong>, Bengkel Las Tangerang Selatan, Bengkel Las Profesional Karawaci, Kanopi Besi Minimalis Serpong, Pagar Besi Modern BSD, Pintu Besi Garasi Sliding, Mezanin Besi Jakarta Barat, Tangga Putar Industrial ruko.
              </p>
              <p className="text-[10px] text-gray-500">
                Melayani Jakarta, Bogor, Depok, Tangerang, South Tangerang, Bekasi, Cikarang.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-850/80 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p className="font-mono text-gray-600">
              &copy; {new Date().getFullYear()} BB JASA LAS. All Rights Reserved. Made with Welding Passion.
            </p>
            <div className="flex space-x-4 text-gray-650">
              <a href="#layanan" className="hover:underline transition">Privacy Policy</a>
              <span>&bull;</span>
              <a href="#contact" className="hover:underline transition">Survey Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
