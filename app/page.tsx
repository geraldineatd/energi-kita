import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Home() {
  return <main><Nav active="beranda" />
    <section className="hero">
      <div className="heroCopy"><div className="eyebrow">🌱 BELAJAR ENERGI, JAGA BUMI</div><h1>Energi hari ini<br/><em>menentukan esok.</em></h1><p>Temukan cara matahari, angin, air, biomassa, dan panas bumi dapat menjadi energi—lalu uji pemahamanmu lewat aktivitas interaktif.</p><div className="heroActions"><Link href="/belajar" className="primary">Mulai Belajar <span>→</span></Link><Link href="/kuis" className="secondary">Langsung ke kuis</Link></div><div className="learningMeta"><span><b>5</b>Sumber energi</span><span><b>4</b>Aktivitas</span><span><b>10</b>Soal kuis</span></div></div>
      <div className="heroVisual" aria-label="Ilustrasi bumi dan energi terbarukan"><div className="orbit"></div><div className="orbit orbit2"></div><div className="planet"><span>🌏</span></div><div className="float sunFloat">☀️<small>SURYA</small></div><div className="float windFloat">💨<small>ANGIN</small></div><div className="float waterFloat">💧<small>AIR</small></div></div>
    </section>
    <section className="pathSection"><span className="sectionNo">ALUR BELAJAR</span><h2>Belajar bertahap, bukan sekadar membaca.</h2><div className="pathGrid"><article><b>01</b><span>📖</span><h3>Pahami konsep</h3><p>Kenali perubahan bentuk energi, perbedaan sumber terbarukan dan fosil, serta alasan transisi energi diperlukan.</p></article><article><b>02</b><span>🧩</span><h3>Eksplorasi</h3><p>Balik flashcard, susun alur pembangkit, bandingkan sumber energi, dan hitung pemakaian listrik sederhana.</p></article><article><b>03</b><span>🏆</span><h3>Uji diri</h3><p>Kerjakan sepuluh soal kontekstual dan baca pembahasan setiap jawaban.</p></article></div></section>
    <section className="why"><div><span className="sectionNo light">MENGAPA PENTING?</span><h2>Indonesia punya peluang energi bersih yang besar.</h2></div><div><p>Letak Indonesia di wilayah tropis dan Cincin Api menyediakan sinar matahari, aliran air, biomassa, angin di lokasi tertentu, serta panas bumi. Namun, setiap sumber memiliki kelebihan, keterbatasan, biaya, dan dampak lingkungan yang perlu dipertimbangkan.</p><Link href="/belajar" className="textLink">Jelajahi materinya →</Link></div></section>
    <Footer /></main>;
}
