import Link from "next/link";

export default function Nav({ active = "beranda" }: { active?: "beranda" | "belajar" | "kuis" }) {
  return <nav className="nav">
    <Link href="/" className="brand"><span>⚡</span> ENERGI KITA</Link>
    <div className="navlinks">
      <Link className={active === "beranda" ? "active" : ""} href="/">Beranda</Link>
      <Link className={active === "belajar" ? "active" : ""} href="/belajar">Belajar</Link>
      <Link className={active === "kuis" ? "active" : ""} href="/kuis">Kuis</Link>
    </div>
    <Link href="/kuis" className="navCta">Uji Pemahaman <span>→</span></Link>
  </nav>;
}
