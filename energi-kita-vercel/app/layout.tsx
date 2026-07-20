import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets:["latin"], variable:"--font-plus-jakarta", display:"swap" });

export const metadata: Metadata = {
  title:"Energi Kita — Media Belajar Interaktif",
  description:"Pelajari energi terbarukan melalui materi, flashcard, simulasi, dan kuis interaktif.",
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="id"><body className={jakarta.variable}>{children}</body></html>;
}
