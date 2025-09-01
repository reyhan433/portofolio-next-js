import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <Image
          src="/fotoprofil.jpg"
          alt="Profile Picture"
          width={180}
          height={180}
          className="profile-pic"
        />
        <h2>Halo aku Reyhan</h2>
        <p>Saya adalah siswa SMK NEGERI 8 MALANG | JURUSAN REKAYASA PERANGKAT LUNAK</p>
      </section>
    </main>
  );
}
