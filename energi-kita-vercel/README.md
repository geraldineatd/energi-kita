# Energi Kita — versi Vercel

Website interaktif materi energi terbarukan untuk siswa SMP. Berisi flashcard, materi ringkas, kuis dengan umpan balik, skor otomatis, dan komitmen hemat energi.

## Cara termudah: deploy melalui GitHub

1. Ekstrak file ZIP ini.
2. Buat repository baru di GitHub.
3. Unggah seluruh isi folder ini ke repository (bukan folder pembungkusnya saja).
4. Buka https://vercel.com dan masuk menggunakan akun GitHub.
5. Pilih **Add New → Project**, lalu pilih repository yang baru dibuat.
6. Vercel akan mengenali framework **Next.js** secara otomatis. Tidak perlu mengubah Build Command atau Output Directory.
7. Klik **Deploy**.

Setelah selesai, Vercel memberikan alamat gratis berbentuk `nama-proyek.vercel.app`.

## Menjalankan di komputer (opsional)

Pastikan Node.js 22 atau yang lebih baru telah terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` pada browser.

## Mengubah isi materi

- Materi flashcard dan soal kuis: `app/page.tsx`
- Warna dan tampilan: `app/globals.css`
- Judul website dan deskripsi: `app/layout.tsx`
