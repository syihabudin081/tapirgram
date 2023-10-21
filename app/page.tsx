import Image from 'next/image';
import Feed from './feed/page';
import Cookies from 'js-cookie'; // Import library js-cookie

export default function Home() {
  // Cek apakah token ada di cookie
  const token = Cookies.get('token');

  if (token) {
    // Jika token ada, arahkan pengguna ke komponen Feed
    return (
      <main className="min-h-screen">
        <Feed />
      </main>
    );
  } else {
    // Jika tidak ada token, tampilkan halaman login
    return (
      <main className="min-h-screen">
        {/* Tampilkan halaman login di sini */}
      </main>
    );
  }
}
