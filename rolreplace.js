function rolrep(izinler) {
  return izinler.replace("ADMINISTRATOR","Yönetici").replace("MANAGE_GUILD","Sunucuyu Yönet").replace("MANAGE_ROLES","Rolleri Yönet").replace("MANAGE_CHANNELS","Kanalları Yönet").replace("KICK_MEMBERS","Üyeleri At").replace("BAN_MEMBERS","Üyeleri Yasakla").replace("ADD_REACTIONS","Tepki Ekle").replace("VIEW_AUDIT_LOG","Denetim Kaydını Görüntüle").replace("PRIORITY_SPEAKER","Öncelikli Konuşmacı").replace("STREAM","Video").replace("CREATE_INSTANT_INVITE","Davet Oluştur").replace("VIEW_CHANNEL","Kanalı Görüntüle").replace("SEND_MESSAGES","Mesaj Gönder").replace("SEND_TTS_MESSAGES","Metin Okuma Mesajı Gönder").replace("MANAGE_MESSAGES","Mesajları Yönet").replace("EMBED_LINKS","Bağlantı Yerleştir").replace("ATTACH_FILES","Dosya Ekle").replace("READ_MESSAGE_HISTORY","Mesaj Geçmişini Oku").replace("MENTION_EVERYONE","@everyone, @here kullan ve Tüm Rollerden bahset").replace("USE_EXTERNAL_EMOJIS","Harici Emoji Kullan").replace("VIEW_GUILD_INSIGHTS","Sunucu Bilgilerini Görüntüle").replace("CONNECT","Bağlan").replace("SPEAK","Konuş").replace("MUTE_MEMBERS","Üyeleri Sustur").replace("DEAFEN_MEMBERS","Üyeleri Sağırlaştır").replace("MOVE_MEMBERS","Üyeleri Taşı").replace("USE_VAD","Ses Eylemi Kullan").replace("CHANGE_NICKNAME","Kullanıcı Adı Değiştir").replace("MANAGE_NICKNAMES","Kullanıcı Adlarını Yönet").replace("MANAGE_WEBHOOKS","Webhook'ları yönet").replace("MANAGE_EMOJIS","Emojileri Yönet") 
}


// ÖRNEK KULLANIMLAR

// Bir rolün izinlerini çekme
let guild = client.guilds.cache.get("Sunucu_ID")
let role = guild.roles.cache.get("Rol_ID")
let izinler = role.permissions.toArray().map(a=>a).join(", ")
  message.channel.send(rolrep(izinler))

// Bir üyenin sahip olduğu izinleri çekme
