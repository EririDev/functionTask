let lanjut = confirm(`Paham ngga lu?Lanjut ngga volume dan Luas?`)
if (lanjut) {
   let p = parseInt(prompt("Masukkan Panjang = "));
   let l = parseInt(prompt("Masukkan Lebar = "));
   let t = parseInt(prompt("Masukkan Tinggi = ")); 
   let luasPermukaan = (p,l,t) => 2 * (p * l) + 2 * (p * t) + 2 * (l * t)
   let hasilLuasPermukaan =luasPermukaan (p,l,t)
   let volume = (p, l, t) => p * l * t
   let hasilVolume = volume(p,l,t)
   document.write(`Anda Memasukkan Panjang = ${p}<br>Anda Memasukkan Lebar = ${l}<br>Anda Memasukkan Tinggi${t}<br>Volume Balok adalah = ${hasilVolume}<br>Luas Permukaan Balok adalah = ${hasilLuasPermukaan}`)
}
