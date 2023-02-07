let p = parseInt(prompt("Masukkan Panjang ="))
let l = parseInt(prompt("Masukkan Lebar ="));
const hitungLuasPersegiPanjang = (p, l) => p * l
let hasil = hitungLuasPersegiPanjang(p,l)
document.write(`Panjang adalah = ${p}<br>Lebar adalah = ${l}<br>Luas Persegi Panjang adalah = ${hasil}`)