"use client";

import { useMemo, useState } from "react";

const cards = [
  { icon: "☀️", title: "Energi Surya", color: "sun", front: "Cahaya matahari diubah menjadi listrik dengan panel surya.", back: "Contoh: lampu jalan tenaga surya dan PLTS atap.\n\nKelebihan: melimpah dan tidak menghasilkan asap saat digunakan.\n\nTantangan: produksi listrik berkurang saat mendung atau malam." },
  { icon: "💨", title: "Energi Angin", color: "wind", front: "Gerakan angin memutar turbin untuk menghasilkan listrik.", back: "Contoh: PLTB Sidrap di Sulawesi Selatan.\n\nKelebihan: bersih dan dapat diperbarui.\n\nTantangan: membutuhkan wilayah dengan angin yang cukup stabil." },
  { icon: "💧", title: "Energi Air", color: "water", front: "Aliran atau jatuhan air memutar turbin pembangkit listrik.", back: "Contoh: PLTA, PLTMH, dan turbin pada bendungan.\n\nKelebihan: dapat menghasilkan listrik dengan stabil.\n\nTantangan: pembangunan harus memperhatikan ekosistem sungai." },
  { icon: "🌿", title: "Biomassa", color: "bio", front: "Bahan organik seperti sisa tanaman dan kotoran ternak diolah menjadi energi.", back: "Contoh: biogas dari kotoran ternak dan briket dari limbah pertanian.\n\nKelebihan: memanfaatkan limbah.\n\nTantangan: harus dikelola agar tidak menyebabkan polusi atau penggundulan hutan." },
  { icon: "🌋", title: "Panas Bumi", color: "geo", front: "Panas dari dalam bumi dimanfaatkan untuk menghasilkan listrik.", back: "Indonesia memiliki potensi besar karena berada di kawasan gunung api.\n\nKelebihan: dapat beroperasi siang dan malam.\n\nTantangan: hanya tersedia di lokasi tertentu dan biaya awalnya tinggi." },
];

const quiz = [
  { q: "Sumber energi yang tidak akan habis dalam waktu singkat disebut…", options: ["Energi fosil", "Energi terbarukan", "Energi kimia", "Energi buatan"], answer: 1, fact: "Energi terbarukan berasal dari proses alam yang terus tersedia atau dapat pulih kembali." },
  { q: "Alat yang mengubah cahaya matahari menjadi listrik adalah…", options: ["Turbin air", "Panel surya", "Baterai", "Generator diesel"], answer: 1, fact: "Sel fotovoltaik pada panel surya mengubah cahaya menjadi energi listrik." },
  { q: "Manakah contoh pemanfaatan biomassa?", options: ["Bensin untuk motor", "Batu bara untuk PLTU", "Biogas dari kotoran ternak", "Panel surya di atap"], answer: 2, fact: "Biogas dapat dibuat dari penguraian bahan organik tanpa oksigen." },
  { q: "Mengapa energi fosil perlu dikurangi?", options: ["Cepat diperbarui", "Tidak menghasilkan emisi", "Persediaannya terbatas dan menghasilkan emisi", "Hanya dapat dipakai malam hari"], answer: 2, fact: "Batu bara, minyak, dan gas terbentuk sangat lama serta melepaskan gas rumah kaca saat dibakar." },
  { q: "Tindakan hemat energi yang tepat di sekolah adalah…", options: ["Menyalakan semua lampu", "Membuka kulkas terus-menerus", "Mematikan proyektor setelah digunakan", "Mengisi daya sepanjang malam"], answer: 2, fact: "Energi paling bersih adalah energi yang tidak perlu kita gunakan. Hemat energi dimulai dari kebiasaan kecil." },
];

export default function Home() {
  const [flipped, setFlipped] = useState<number[]>([]);
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [started, setStarted] = useState(false);
  const [pledges, setPledges] = useState<string[]>([]);
  const [pledge, setPledge] = useState("");
  const score = useMemo(() => answers.filter((a, i) => a === quiz[i].answer).length, [answers]);

  const choose = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
  };
  const next = () => {
    if (selected === null) return;
    const updated = [...answers, selected];
    setAnswers(updated);
    if (question < quiz.length - 1) { setQuestion(question + 1); setSelected(null); }
    else setQuestion(quiz.length);
  };
  const restart = () => { setQuestion(0); setAnswers([]); setSelected(null); };

  return (
    <main>
      <nav className="nav">
        <a href="#awal" className="brand"><span>⚡</span> ENERGI KITA</a>
        <div className="navlinks"><a href="#jelajah">Jelajah</a><a href="#flashcard">Flashcard</a><a href="#kuis">Kuis</a></div>
        <a href="#kuis" className="navCta">Mulai Kuis <span>→</span></a>
      </nav>

      <section className="hero" id="awal">
        <div className="heroCopy">
          <div className="eyebrow">🌱 BELAJAR ENERGI, JAGA BUMI</div>
          <h1>Kenali Energi<br/><em>untuk Masa Depan</em></h1>
          <p>Dari cahaya matahari hingga aliran air—jelajahi sumber energi bersih yang ada di sekitar kita.</p>
          <div className="heroActions"><a href="#jelajah" className="primary">Mulai Menjelajah <span>↓</span></a><span className="time">◷ &nbsp;15 menit belajar</span></div>
        </div>
        <div className="heroVisual" aria-label="Ilustrasi bumi dan energi terbarukan">
          <div className="orbit orbit1"></div><div className="orbit orbit2"></div>
          <div className="planet"><span>🌏</span></div>
          <div className="float sunFloat">☀️<small>SURYA</small></div>
          <div className="float windFloat">💨<small>ANGIN</small></div>
          <div className="float waterFloat">💧<small>AIR</small></div>
          <div className="leaf l1">🌿</div><div className="leaf l2">🍃</div>
        </div>
        <div className="scrollHint">GULIR UNTUK JELAJAHI <span>↓</span></div>
      </section>

      <section className="intro" id="jelajah">
        <div><span className="sectionNo">01 — KENALAN DULU</span><h2>Apa itu energi<br/>terbarukan?</h2></div>
        <div className="introText"><p>Energi terbarukan berasal dari sumber alam yang <strong>terus tersedia atau dapat pulih kembali</strong>, seperti sinar matahari, angin, air, panas bumi, dan biomassa.</p><div className="compare"><span className="good">✓ Dapat diperbarui</span><span className="bad">× Fosil terbatas</span></div></div>
      </section>

      <section className="cardsSection" id="flashcard">
        <div className="sectionHead"><div><span className="sectionNo light">02 — KLIK & TEMUKAN</span><h2>Lima sumber energi bersih</h2></div><p>Klik kartu untuk membalik dan membaca contoh, kelebihan, serta tantangannya.</p></div>
        <div className="cards">
          {cards.map((card, i) => <button key={card.title} className={`energyCard ${card.color} ${flipped.includes(i) ? "isFlipped" : ""}`} onClick={() => setFlipped(f => f.includes(i) ? f.filter(x => x !== i) : [...f, i])} aria-label={`Balik kartu ${card.title}`}>
            <div className="cardInner"><div className="cardFace front"><span className="cardNum">0{i+1}</span><div className="cardIcon">{card.icon}</div><h3>{card.title}</h3><p>{card.front}</p><span className="flipLabel">KLIK UNTUK BALIK ↗</span></div><div className="cardFace back"><span className="cardNum">0{i+1}</span><h3>{card.title}</h3><p>{card.back}</p><span className="flipLabel">KLIK UNTUK KEMBALI ↙</span></div></div>
          </button>)}
        </div>
      </section>

      <section className="impact">
        <div className="impactTitle"><span className="sectionNo">03 — KENAPA PENTING?</span><h2>Pilihan energi kita<br/>berpengaruh pada bumi.</h2></div>
        <div className="impactGrid"><article><b>01</b><span>🌬️</span><h3>Udara Lebih Bersih</h3><p>Lebih sedikit asap dan polusi dari pembakaran bahan bakar fosil.</p></article><article><b>02</b><span>🌡️</span><h3>Kurangi Emisi</h3><p>Membantu menekan gas rumah kaca penyebab perubahan iklim.</p></article><article><b>03</b><span>♾️</span><h3>Tersedia Kembali</h3><p>Sumbernya terus hadir melalui proses alam yang berulang.</p></article></div>
      </section>

      <section className="quizSection" id="kuis">
        <div className="quizInfo"><span className="sectionNo light">04 — UJI PEMAHAMAN</span><h2>Siap jadi<br/>Pahlawan Energi?</h2><p>Lima pertanyaan singkat untuk menguji apa yang sudah kamu pelajari.</p><div className="quizMeta"><span>5 SOAL</span><span>± 3 MENIT</span></div></div>
        <div className="quizBox">
          {!started ? <div className="quizStart"><div className="bolt">⚡</div><h3>Tantangan Energi</h3><p>Pilih satu jawaban terbaik. Kamu akan langsung melihat penjelasannya.</p><button onClick={() => setStarted(true)}>Mulai Kuis <span>→</span></button></div> : question < quiz.length ? <>
            <div className="progress"><span>SOAL {question+1} DARI {quiz.length}</span><div><i style={{width: `${((question+1)/quiz.length)*100}%`}}></i></div></div>
            <h3 className="question">{quiz[question].q}</h3>
            <div className="options">{quiz[question].options.map((o,i) => <button key={o} onClick={() => choose(i)} className={selected === null ? "" : i === quiz[question].answer ? "correct" : i === selected ? "wrong" : "muted"}><b>{String.fromCharCode(65+i)}</b>{o}<span>{selected !== null && i === quiz[question].answer ? "✓" : selected === i ? "×" : ""}</span></button>)}</div>
            {selected !== null && <div className={`feedback ${selected === quiz[question].answer ? "yes" : "no"}`}><strong>{selected === quiz[question].answer ? "Tepat!" : "Belum tepat."}</strong> {quiz[question].fact}</div>}
            <button className="next" disabled={selected === null} onClick={next}>{question === quiz.length-1 ? "Lihat Hasil" : "Soal Berikutnya"} →</button>
          </> : <div className="result"><div className="scoreRing"><strong>{score}</strong><span>/ {quiz.length}</span></div><h3>{score === 5 ? "Luar biasa!" : score >= 3 ? "Kerja bagus!" : "Yuk, pelajari lagi!"}</h3><p>Kamu menjawab {score} dari {quiz.length} soal dengan benar.</p><button onClick={restart}>Ulangi Kuis ↻</button></div>}
        </div>
      </section>

      <section className="action">
        <span className="sectionNo">05 — AKSI KECILMU</span><h2>Energi masa depan<br/>dimulai dari <em>kita.</em></h2><p>Tuliskan satu kebiasaan hemat energi yang akan kamu lakukan mulai hari ini.</p>
        <form onSubmit={e => {e.preventDefault(); if(pledge.trim()){setPledges([pledge.trim(), ...pledges].slice(0,4));setPledge("")}}}><input value={pledge} onChange={e=>setPledge(e.target.value)} placeholder="Contoh: mematikan lampu saat tidak digunakan" maxLength={80}/><button>Kirim Aksi ⚡</button></form>
        {pledges.length > 0 && <div className="pledges">{pledges.map((p,i)=><span key={i}>🌱 “{p}”</span>)}</div>}
      </section>
      <footer><div className="brand"><span>⚡</span> ENERGI KITA</div><p>Media belajar interaktif energi terbarukan untuk siswa SMP.</p><a href="#awal">KEMBALI KE ATAS ↑</a></footer>
    </main>
  );
}
