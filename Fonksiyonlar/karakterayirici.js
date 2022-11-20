/* Bu Fonksiyon: kanal adını kelimelere ayırır ve kelimelerin ilk harfini büyük yapar.
ÖR: "#üst-yetkili-sohbet" kanalını "Üst Yetkili Sohbet" olarak döndürür.            */

function karakter(isim) {
  isim = isim.replace("#","")
  let kanal = isim.split("-").slice(0).filter(x => x).map(arg => arg.charAt(0).toUpperCase() + arg.slice(arg.charAt(0).length).toLowerCase()).join(" ")
    return kanal
}

// ÖRNEK KULLANIM
let kanal = client.channels.cache.get("Kanal_ID").name
  karakter(kanal)
