import React, { useState } from 'react';
import { Calendar, Mail, MapPin, Phone, Clock, Send, MessageSquare, CheckCircle2, Copy } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    serviceType: 'Pagar Besi',
    message: '',
    surveyDate: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Mohon isi minimal Nama dan Nomor WhatsApp Anda.");
      return;
    }

    setIsSubmitting(true);

    // Simulate server-side API processing or submission log
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const getWAInquiryUrl = () => {
    const text = `Halo Admin BB JASA LAS,%0APikiran%20saya%20ingin%20mengajukan%20konsultasi%20langsung:%0A-%20Nama:%20${encodeURIComponent(formData.name)}%0A-%20WhatsApp:%20${encodeURIComponent(formData.phone)}%0A-%20Alamat%20Lokasi:%20${encodeURIComponent(formData.address)}%0A-%20Kebutuhan%20Jasa:%20${encodeURIComponent(formData.serviceType)}%0A-%20Tanggal%20Rencana%20Survey:%20${encodeURIComponent(formData.surveyDate)}%0A-%20Komentar%20Detail:%20${encodeURIComponent(formData.message)}`;
    return `https://api.whatsapp.com/send?phone=6282123456789&text=${text}`;
  };

  return (
    <section id="contact" className="py-20 bg-industrial-gray border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            <Calendar className="h-3.5 w-3.5" />
            <span>Kirim Pesan Penawaran</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Diskusikan Kebutuhan Las Anda Sekarang
          </h2>
          <p className="font-sans text-gray-400">
            Hubungi tim teknis kami untuk merundingkan rancangan, survey lokasi offline cuma-cuma, dan permohonan brosur bahan baja pilihan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Block: Contact Details & Simulated Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick badges */}
            <div className="bg-industrial-black p-6 rounded-xl border border-gray-800/80 space-y-6">
              <h3 className="font-display text-lg font-bold text-white mb-4 border-b border-gray-800 pb-3">
                Informasi Kantor & Bengkel
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="bg-primary/10 p-2.5 rounded border border-primary/25 text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-mono font-bold block">Alamat Workshop Utama</span>
                    <p className="font-sans text-sm text-gray-300 mt-0.5 leading-relaxed">
                      Jl. Raya Puspitek No. 88, Babakan, Kec. Setu, Kota Tangerang Selatan, Banten 15315
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="bg-primary/10 p-2.5 rounded border border-primary/25 text-primary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-mono font-bold block">WhatsApp & Telepon</span>
                    <p className="font-sans text-sm text-gray-300 mt-0.5">
                      +62 821-2345-6789
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="bg-primary/10 p-2.5 rounded border border-primary/25 text-primary shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-mono font-bold block">Jam Operasional</span>
                    <p className="font-sans text-sm text-gray-300 mt-0.5">
                      Senin - Sabtu: <span className="text-white">08.00 - 17.00 WIB</span> <br/>
                      <span className="text-gray-500">(Minggu & Hari Libur Nasional: Tutup)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SLEEK MAP SIMULATION */}
            <div className="bg-industrial-black rounded-xl overflow-hidden border border-gray-800 shadow-xl relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-transparent to-transparent z-10 pointer-events-none"></div>
              
              {/* Sleek simulated map layout */}
              <div className="h-[250px] w-full bg-slate-900 overflow-hidden relative flex items-center justify-center p-4">
                {/* Visual grid pattern */}
                <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-slate-900 to-black bg-[size:20px_20px] bg-repeat"></div>
                
                {/* SVG Mocking a sleek GPS dashboard style map */}
                <svg className="absolute inset-0 w-full h-full stroke-gray-700/50 fill-none" viewBox="0 0 500 250">
                  <path d="M 0,50 L 500,70 M 0,180 L 500,160 M 120,0 L 140,250 M 340,0 L 310,250" strokeWidth="4" />
                  <path d="M 50,0 Q 150,120 250,250" strokeWidth="2" strokeDasharray="5,5" stroke="#f97316" />
                  {/* Rivers / Lakes */}
                  <path d="M 0,220 Q 200,210 500,240" stroke="#1e293b" strokeWidth="24" />
                  {/* Buildings mock blocks */}
                  <rect x="30" y="80" width="60" height="40" fill="#1e293b" stroke="#334155" rx="3" />
                  <rect x="200" y="20" width="100" height="50" fill="#1e293b" stroke="#334155" rx="3" />
                  <rect x="360" y="90" width="80" height="60" fill="#1e293b" stroke="#334155" rx="3" />
                  <rect x="180" y="110" width="90" height="40" fill="#1e293b" stroke="#334155" rx="3" />
                  {/* Marker spark effect */}
                  <circle cx="210" cy="115" r="14" fill="#f97316" className="animate-ping opacity-20" />
                  <circle cx="210" cy="115" r="6" fill="#f97316" />
                </svg>

                {/* Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-industrial-gray/95 backdrop-blur p-3.5 rounded border border-gray-800 z-12 flex items-center justify-between shadow-2xl">
                  <div>
                    <h4 className="font-display font-bold text-xs text-white">Workshop BB JASA LAS</h4>
                    <p className="text-[10px] text-gray-400 mt-0.5 font-sans">Babakan Setu, Tangerang Selatan</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Jl+Raya+Puspitek+Tangerang+Selatan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-primary font-bold hover:underline shrink-0"
                  >
                    Buka Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive Form */}
          <div className="lg:col-span-7 bg-industrial-black p-6 sm:p-8 rounded-xl border border-gray-800 shadow-2xl relative">
            
            {isSuccess ? (
              <div className="text-center py-12 space-y-6 animate-fade-in">
                <div className="inline-flex p-4 bg-emerald-500/10 rounded-full text-emerald-500 border border-emerald-500/20">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Formulir Terkirim!</h3>
                  <p className="font-sans text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                    Data Anda telah berhasil diproses oleh sistem admin kami. Hubungi WhatsApp admin kami di bawah ini untuk memulai chat instan menggunakan data yang baru saja dimasukkan!
                  </p>
                </div>

                <div className="bg-industrial-gray p-6 rounded-lg border border-gray-800 max-w-md mx-auto text-left space-y-3">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-primary border-b border-gray-800 pb-2">
                    Rincian Jadwal Konsultasi Anda
                  </h4>
                  <div className="text-xs space-y-1.5 font-sans text-gray-300">
                    <p><span className="text-gray-500">Nama:</span> <b className="text-white">{formData.name}</b></p>
                    <p><span className="text-gray-500">Kebutuhan Jasa:</span> <b className="text-white">{formData.serviceType}</b></p>
                    <p><span className="text-gray-500">Lokasi Survey:</span> <b className="text-white">{formData.address || '-'}</b></p>
                    <p><span className="text-gray-500">Jadwal Survey:</span> <b className="text-white">{formData.surveyDate || 'Segera Dihubungi'}</b></p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto pt-4">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        phone: '',
                        address: '',
                        serviceType: 'Pagar Besi',
                        message: '',
                        surveyDate: '',
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3 border border-gray-700 text-xs uppercase font-mono text-gray-400 hover:text-white hover:border-gray-500 rounded transition duration-200"
                  >
                    Kirim Form Baru
                  </button>
                  <a
                    href={getWAInquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs uppercase font-mono font-bold rounded flex items-center justify-center space-x-2 shadow-lg shadow-green-500/10 transition-all duration-300"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Lanjutkan Konsultasi WA</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-industrial-gray border border-gray-800 rounded px-4 py-2.5 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-sans text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                      Nomor WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="Contoh: 0821xxxxxxxx"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-industrial-gray border border-gray-800 rounded px-4 py-2.5 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-sans text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                      Pilih Klasifikasi Jasa
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full bg-industrial-gray border border-gray-800 rounded px-4 py-2.5 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-sans text-sm"
                    >
                      <option value="Pagar Besi">Pagar Besi Minimalis</option>
                      <option value="Kanopi Besi">Kanopi Besi & Hollow</option>
                      <option value="Pintu Besi">Pintu Besi Custom</option>
                      <option value="Tralis Jendela">Tralis Jendela</option>
                      <option value="Tangga Besi">Tangga Besi / Mezanin</option>
                      <option value="Railing Balkon">Railing Balkon / Tangga</option>
                      <option value="Konstruksi Besi Custom">Konstruksi Custom Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                      Rencana Tanggal Survey (Opsional)
                    </label>
                    <input
                      type="date"
                      name="surveyDate"
                      value={formData.surveyDate}
                      onChange={handleChange}
                      className="w-full bg-industrial-gray border border-gray-800 rounded px-4 py-2.5 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-mono text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Alamat Lokasi Pemasangan
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Contoh: Perumahan Indah, Sektor C, Tangerang Selatan"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-industrial-gray border border-gray-800 rounded px-4 py-2.5 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Jelaskan Kebutuhan Desain / Ukuran Estimasi
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Contoh: Ingin membuat pagar minimalis hitam model hollow ukuran panjang 6 meter tinggi 1.8 meter..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-industrial-gray border border-gray-800 rounded px-4 py-2.5 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-sans text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary-dark hover:brightness-110 disabled:opacity-55 text-white font-sans text-sm font-bold uppercase tracking-all py-3.5 px-6 rounded shadow-lg shadow-primary/20 hover:shadow-primary/45 transition duration-300 flex items-center justify-center space-x-2 active:scale-98"
                  >
                    {isSubmitting ? (
                      <span>Mentransmisikan Data...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Kirim Formulir Konsultasi</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct WhatsApp Big Box */}
                <div className="border-t border-gray-800 pt-5 mt-6 text-center">
                  <span className="text-xs text-gray-500 font-sans block mb-3">Atau Klik Hubungi Langsung Via WhatsApp di Bawah</span>
                  <a
                    href="https://api.whatsapp.com/send?phone=6282123456789&text=Halo%20Admin%20BB%20JASA%20LAS,%20saya%20tertarik%20dengan%20layanan%20pengelasan%20jasa%20Anda."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-white bg-emerald-600 hover:bg-emerald-700 font-sans font-bold text-sm tracking-wide px-6 py-3 rounded-lg shadow-md transitionduration-300 transform hover:-translate-y-0.5"
                  >
                    <MessageSquare className="h-5 w-5 shrink-0 text-white" />
                    <span>WhatsApp Fast Response +62 821-2345-6789</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
