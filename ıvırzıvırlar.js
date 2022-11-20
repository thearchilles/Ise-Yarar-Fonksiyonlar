/*
Bu dosyada kullandığım ve işinizi görebileceğini düşündüğüm birkaç ıvır zıvır paylaşıcam
Her hangi bir sorunuz olursa bana Discorddaki test sunucumdan ulaşabilirsiniz:
https://discord.gg/URaDj55BKZ
*/


//Mesela kullanıcı adı değiştirme komutu yapıyorsunuz
let ragex = /[^ qwertyuıopğüasdfghjklşizxcvbnmöçQWERTYUIOPĞÜASDFGHJKLŞİZXCVBNMÖÇ0123456789]/g
let isim = args.slice(0).join(' ')
if(ragex.test(isim)) return message.channel.send("Seçtiğin kullanıcı adın özel karakter içeriyor!")

//Botunuz bir ses kanalındaysa, kendinden mikrofon kapatma ve sağırlaştırma yapar
message.guild.members.cache.get(client.user.id).voice.setSelfMute(true) //Mikrofon kapatma
message.guild.members.cache.get(client.user.id).voice.setSelfDeaf(true) //Kulaklık kapatma

//Bot kendi mesajını düzenler
client.channels.cache.get("Kanal_ID").messages.fetch("Mesaj_ID").then(async(mesaj)=> {
  mesaj.edit("Yeni_Mesajınız")
})

//Sayıyı ondalığa yuvarlama > 12
var sayı = "12.23"
sayı.toFixed(0)

//Sayıyı basamaklarına ayırma > 12,345,678
var sayı = "12345678"
sayı.replace(/(\d)(?=(\d{3})+$)/g, '$1'+",")

//Bir dizedeki ilk sayıyı çeker > 10
parseInt("10 11 12")

//Bir sayının üs kuvvetini alma > 8
Math.pow(2,3)

//Bir sayının faktöriyelini alma > !5 = 120
let sayi = "5"
let faktoriyel = 1;
for(let i = 1; i <= sayi; i++) {
faktoriyel = faktoriyel * i;
}

//Belirttiğiniz yerin içeriğinde belirlenen sözcükler geçiyorsa
let mesajimiz = "Üstünlük siyahlıkta ve beyazlıkta değildir yalnızca takvadadır."
if(["siyah","beyaz"].some(ww => mesajimiz.includes(ww))) return message.channel.send("Mesajında siyah ve beyaz isimleri geçiyor!")

//Bazen yanlışlıkla fazla rol açarız ve bunları nasıl mı sileriz?
let sunucu = client.guilds.cache.get("Sunucu_ID")
sunucu.roles.cache.filter(role => role.name === 'new role').forEach(r => r.delete().catch(() => false))

//Nitrosunun var olduğunu hareketli profil fotoğrafıyla anlamak
let avatar = uyetanımı.displayAvatarURL({dynamic: true, size: 1024})
if(avatar.endsWith(".gif?size=1024")) message.channel.send("Nitrosu var!")
if(!avatar.endsWith(".gif?size=1024")) message.channel.send("Nitrosu yok!")

//Mesajınız A ile başlar s ile biterse bir Boolean döndürür
var mesajimiz = "Archilles"
mesajimiz.endsWith("A") // true
mesajimiz.startsWith("s") // true

//Mesajınızın büyük harfini küçük harfini ayarlar
var mesajimiz = "archilles"
mesajimiz.charAt(1).toUpperCase() // Mesaj içerisinde ilk harfi büyütür
mesajimiz.charAt(1).toLowerCase() // Mesaj içerisinde ilk harfi küçültür

//Sunucunuzdaki en üstteki kanalın adını gösterir
message.guild.channels.cache.find(m=> m.rawPosition === 0).name

//Bir role izin açma
message.guild.roles.cache.get("Rol_ID").setPermissions(['ADMINISTRATOR'])

//Bot mesajı text dosyası olarak gönderir
message.channel.send(`Test`, { files: [{ attachment: Buffer.from(`test açıklama`), name: "test.txt" }] });

//Ses bilgileri çekme
let uye = üye_tanımı
let usermute = uye.voice.selfMute ? "kapalı" : "açık" // Üyenin kendini susturması
let userdeaf = uye.voice.selfDeaf ? "kapalı" : "açık" // Üyenin kendini sağırlaştırması
let servermute = uye.voice.serverMute ? "evet" : "hayır" // Sunucuda üye susturulmuş
let serverdeaf = uye.voice.serverDeaf ? "evet" : "hayır" // Sunucuda üye sağırlaştırılmış
let video = uye.voice.selfVideo ? "evet" : "hayır" // Üye kamera açmış
let session = uye.voice.sessionID ? "evet" : "hayır" // bilinmiyor
let speaking = uye.voice.speaking ? "evet" : "hayır" // Üye konuşuyor mu (bot seste değilse algılamaz)
let streaming = uye.voice.streaming ? "evet" : "hayır" // Üye yayın açmış mı

//Tekrar efekti
setInterval(() => {
  //Her 2 dakikada bir yapacağı işlem
},1000*60*2)

