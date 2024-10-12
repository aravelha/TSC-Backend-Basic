const daftarBuku = [
  {
      judul: "Belajar JavaScript",
      penulis: "John Doe",
      penerbit: "Gramedia",
      genre: "Pendidikan"
  },
  {
      judul: "Petualangan si Kancil",
      penulis: "Budi Santoso",
      penerbit: "Erlangga",
      genre: "Cerita Anak"
  },
  {
      judul: "Kotlin untuk Pemula",
      penulis: "Siti Aminah",
      penerbit: "Gramedia",
      genre: "Teknologi"
  },
  {
      judul: "Pendidikan Karakter",
      penulis: "Rina Yulia",
      penerbit: "Pustaka Cendekia",
      genre: "Sosial"
  },
  {
      judul: "Menguasai Algoritma",
      penulis: "David Smith",
      penerbit: "Oxford University Press",
      genre: "Teknologi"
  }
];

daftarBuku.push({
  judul: "On Earth We're Briefly Gorgeous",
  penulis: "Ocean Vuong",
  penerbit: "Penguin Press",
  genre: "Fiksi Sastra"
});


console.log("1a. Daftar semua buku:");
daftarBuku.forEach(buku => {
  console.log(`Judul: ${buku.judul}, Penulis: ${buku.penulis}, Penerbit: ${buku.penerbit}, Genre: ${buku.genre}`);
});

console.log("\n 1b. Buku yang diterbitkan oleh Gramedia:");
for (let i = 0; i < daftarBuku.length; i++) {
  if (daftarBuku[i].penerbit === "Gramedia") {
      console.log(`Judul: ${daftarBuku[i].judul}, Penulis: ${daftarBuku[i].penulis}, Penerbit: ${daftarBuku[i].penerbit}, Genre: ${daftarBuku[i].genre}`);
  }
}
