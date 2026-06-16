import React, { useState } from 'react';
import { Calculator, ArrowRight, ClipboardCheck, MessageSquare, ShieldAlert } from 'lucide-react';

interface ModelType {
  id: string;
  name: string;
  pricePerUnit: number;
  unit: 'm²' | 'm¹' | 'unit' | 'lubang' | 'meter tinggi';
  desc: string;
}

const ITEMS: ModelType[] = [
  { id: 'pagar', name: 'Pagar Besi Minimalis', pricePerUnit: 750000, unit: 'm²', desc: 'Besi hollow galvanis, model jari-jari lurus rapat' },
  { id: 'kanopi', name: 'Kanopi Besi & Hollow', pricePerUnit: 850000, unit: 'm²', desc: 'Rangka hollow besi galvanis kokoh, atap Alderon / Solarflat' },
  { id: 'pintu', name: 'Pintu Gerbang & Lipat', pricePerUnit: 1500000, unit: 'unit', desc: 'Plat besi tebal minimum, engsel bearing premium' },
  { id: 'tralis', name: 'Tralis Jendela Pengaman', pricePerUnit: 450000, unit: 'lubang', desc: 'Besi behel padat / nako solid, anti paku gergaji' },
  { id: 'tangga', name: 'Tangga Besi Industrial', pricePerUnit: 1800000, unit: 'meter tinggi', desc: 'Struktur baja rigid, opsi trap kayu / plat bordes' },
  { id: 'balkon', name: 'Railing Balkon / Mezanin', pricePerUnit: 700000, unit: 'm¹', desc: 'Pengaman kaca tempered / hollow rapat finishing mulus' },
  { id: 'railing-t', name: 'Railing Tangga Pegangan Kayu', pricePerUnit: 650000, unit: 'm¹', desc: 'Pegangan kayu solid, jari-jari hollow modern' },
];

const GRADES = [
  { id: 'base', name: 'Standard Medium Class', multiplier: 0.95, desc: 'Besi hollow galvanis ketebalan 1.2mm, cat finishing standard.' },
  { id: 'premium', name: 'Premium Heavy-Duty SNI', multiplier: 1.15, desc: 'Besi hollow SNI ketebalan 1.6 - 1.8mm, dobel finishing epoxy zinc anti-rust.' },
  { id: 'luxury', name: 'Luxury Industrial Custom', multiplier: 1.45, desc: 'Besi/baja plat tebal solid, laser-cutting dekoratif atau kombinasi kayu keras oven.' },
];

export default function BudgetEstimator() {
  const [selectedItem, setSelectedItem] = useState(ITEMS[0]);
  const [selectedGrade, setSelectedGrade] = useState(GRADES[1]); // Premium as default
  const [length, setLength] = useState<number>(4);
  const [height, setHeight] = useState<number>(2);
  const [calculatedCost, setCalculatedCost] = useState<number | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const calculateBudget = () => {
    let units = 1;
    if (selectedItem.unit === 'm²') {
      units = length * height;
    } else if (selectedItem.unit === 'm¹' || selectedItem.unit === 'meter tinggi') {
      units = length; // linear meters or height meters
    } else if (selectedItem.unit === 'lubang' || selectedItem.unit === 'unit') {
      units = length; // item count
    }

    const baseCost = selectedItem.pricePerUnit * units;
    const finalCost = Math.round(baseCost * selectedGrade.multiplier);
    setCalculatedCost(finalCost);
  };

  const getWAUrl = () => {
    const formattedPrice = calculatedCost ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(calculatedCost) : '';
    const text = `Halo Admin BB JASA LAS, saya ingin konsultasi mengenai simulasi anggaran las rincian berikut:
- *Produk*: ${selectedItem.name} (${selectedItem.unit === 'm²' ? `Ukur ${length}m x ${height}m` : `Volume: ${length} ${selectedItem.unit}`})
- *Kualitas Bahan*: ${selectedGrade.name} (Multiplier ${selectedGrade.multiplier}x)
- *Estimasi Anggaran*: ~ ${formattedPrice}

Apakah saya bisa menjadwalkan survey lokasi gratis untuk pengukuran riil?`;
    return `https://api.whatsapp.com/send?phone=6282123456789&text=${encodeURIComponent(text)}`;
  };

  const handleCopy = () => {
    const formattedPrice = calculatedCost ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(calculatedCost) : '';
    const text = `Simulasi Anggaran BB JASA LAS:
- Layanan: ${selectedItem.name}
- Spek: ${selectedGrade.name}
- Volume: ${selectedItem.unit === 'm²' ? `${length}m x ${height}m` : `${length} ${selectedItem.unit}`}
- Estimasi Total: ${formattedPrice}`;
    
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="estimator" className="py-20 bg-industrial-black border-b border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            <Calculator className="h-3.5 w-3.5" />
            <span>Kalkulator Transparan</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Simulasi Rencana Anggaran Biaya (RAB)
          </h2>
          <p className="font-sans text-gray-400">
            Dapatkan kisaran estimasi biaya kebutuhan las Anda secara instan sebelum melakukan survey lokasi. Transparansi harga tanpa biaya tambahan tersembunyi.
          </p>
        </div>

        {/* Form and calculation section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left panel: configure choices */}
          <div className="lg:col-span-7 bg-industrial-gray p-6 sm:p-8 rounded-xl border border-gray-800 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Step 1: select type */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-3">
                  1. Pilih Jenis Kebutuhan Las
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ITEMS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className={`text-left p-3.5 rounded border transition-all duration-300 ${
                        selectedItem.id === item.id
                          ? 'bg-primary/10 border-primary text-white font-bold'
                          : 'bg-industrial-black/50 border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
                      }`}
                    >
                      <div className="text-sm">{item.name}</div>
                      <div className="font-mono text-[10px] text-primary mt-1">
                        Mulai Rp {item.pricePerUnit.toLocaleString('id-ID')}/{item.unit}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: select quality */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-3">
                  2. Pilih Grade Kualitas Bahan
                </label>
                <div className="space-y-3">
                  {GRADES.map((grade) => (
                    <button
                      key={grade.id}
                      type="button"
                      onClick={() => setSelectedGrade(grade)}
                      className={`w-full text-left p-4 rounded border transition-all duration-300 flex items-start justify-between gap-4 ${
                        selectedGrade.id === grade.id
                          ? 'bg-primary/5 border-primary text-white font-bold'
                          : 'bg-industrial-black/40 border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      <div className="text-sm">
                        <span className={selectedGrade.id === grade.id ? 'text-primary' : 'text-gray-300'}>
                          {grade.name}
                        </span>
                        <p className="text-xs text-gray-400 mt-1 font-normal">{grade.desc}</p>
                      </div>
                      <div className="font-mono text-xs font-bold text-gray-400 text-right bg-industrial-black px-2 py-1 rounded border border-gray-800">
                        x{grade.multiplier}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: dimensions inputs */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-3">
                  3. Masukkan Ukuran & Volume Luas Pekerjaan
                </label>
                
                {selectedItem.unit === 'm²' ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-gray-400 block mb-1.5 font-mono">Panjang / Lebar (m)</span>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={length}
                        onChange={(e) => setLength(Math.max(1, parseFloat(e.target.value) || 0))}
                        className="w-full bg-industrial-black border border-gray-800 rounded px-3.5 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-mono text-sm"
                      />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 block mb-1.5 font-mono">Tinggi Pagar/Kanopi (m)</span>
                      <input
                        type="number"
                        min="0.5"
                        max="20"
                        step="0.1"
                        value={height}
                        onChange={(e) => setHeight(Math.max(0.1, parseFloat(e.target.value) || 0))}
                        className="w-full bg-industrial-black border border-gray-800 rounded px-3.5 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-mono text-sm"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <span className="text-xs text-gray-400 block mb-1.5 font-mono">
                      {selectedItem.unit === 'm¹' || selectedItem.unit === 'meter tinggi'
                        ? 'Panjang Total Lintasan / Tinggi Tangga (meter)'
                        : `Jumlah Item Keseluruhan (${selectedItem.unit})`}
                    </span>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={length}
                      onChange={(e) => setLength(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full bg-industrial-black border border-gray-800 rounded px-3.5 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-mono text-sm"
                    />
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={calculateBudget}
              className="mt-8 w-full bg-gradient-to-r from-primary to-primary-dark hover:brightness-110 text-white font-sans font-bold uppercase tracking-wider py-4 rounded shadow-lg shadow-primary/20 hover:shadow-primary/45 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Kalkulasi Anggaran Estimasi</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Right panel: show calculation result */}
          <div className="lg:col-span-5 bg-industrial-gray border border-gray-800 rounded-xl relative overflow-hidden flex flex-col justify-between">
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
              
              {calculatedCost !== null ? (
                <div className="space-y-6 text-center animate-fade-in">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full text-primary border border-primary/20 mb-2">
                    <ClipboardCheck className="h-8 w-8" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block">Estimasi Rencana Anggaran Masuk</span>
                    <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mt-1.5">
                      {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(calculatedCost)}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      *Estimasi berdasarkan volume sebesar:{' '}
                      <span className="text-white font-mono">
                        {selectedItem.unit === 'm²'
                          ? `${length}m x ${height}m = ${(length * height).toFixed(1)} m²`
                          : `${length} ${selectedItem.unit}`}
                      </span>
                    </p>
                  </div>

                  <div className="border-t border-dashed border-gray-800 pt-6 text-left space-y-3.5">
                    <div className="flex justify-between items-start text-xs border-b border-gray-800/40 pb-2.5">
                      <span className="text-gray-400">Pekerjaan Jasa</span>
                      <span className="text-white font-medium">{selectedItem.name}</span>
                    </div>
                    <div className="flex justify-between items-start text-xs border-b border-gray-800/40 pb-2.5">
                      <span className="text-gray-400">Spesifikasi Kelas</span>
                      <span className="text-white font-medium">{selectedGrade.name}</span>
                    </div>
                    <div className="flex justify-between items-start text-xs">
                      <span className="text-gray-400">Tipe Unit Penghitungan</span>
                      <span className="text-white font-mono">{selectedItem.unit}</span>
                    </div>
                  </div>

                  {/* Operational caution */}
                  <div className="bg-industrial-black p-3.5 rounded border border-gray-800 flex items-start space-x-2 text-left">
                    <ShieldAlert className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-gray-500 leading-normal">
                      Harga final dapat berubah tergantung pada tingkat kerumitan di lokasi, jarak instalasi, dan modifikasi material yang disetujui saat survey riil.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10">
                  <div className="inline-flex p-4 bg-industrial-black rounded-full text-gray-600 border border-gray-800 mb-4 animate-pulse">
                    <Calculator className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">Belum Ada Kalkulasi</h3>
                  <p className="font-sans text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                    Silakan tentukan jenis jasa, spesifikasi grade baja, dan rincian panjang-tinggi Anda lalu tekan tombol kalkulasi untuk melihat rincian anggaran.
                  </p>
                </div>
              )}
            </div>

            {/* CTAs at bottom of calculation */}
            {calculatedCost !== null && (
              <div className="bg-industrial-black p-6 border-t border-gray-800 grid grid-cols-2 gap-4">
                <button
                  onClick={handleCopy}
                  className="w-full text-center bg-industrial-gray hover:bg-industrial-charcoal text-white font-sans text-xs py-3 rounded border border-gray-800 transition duration-300"
                >
                  {isCopied ? 'Tersalin!' : 'Copy Rincian'}
                </button>
                <a
                  href={getWAUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans text-xs font-bold py-3 rounded transition duration-300"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Kirim ke WA</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
