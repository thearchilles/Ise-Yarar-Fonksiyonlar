// Bu Fonksiyon: Sunucunuzda "yönetici" iznine sahip olan tüm rollerin izinlerini sıfırlar

function ytkapat(sunucu) {
  sunucu = client.guilds.cache.get("Sunucu_ID")
  sunucu.roles.cache.filter(r => r.editable && ( r.permissions.has("ADMINISTRATOR") )).forEach(async r => await r.setPermissions(0))
}

// ÖRNEK KULLANIM
ytkapat()

/*
NOT:
Eğer sadece yönetici iznine sahip rolleri yerine rol yönet iznine sahip rolleri vb. de tümden izinlerini sıfırlamak isterseniz:

r.permissions.has("ADMINISTRATOR") || r.permissions.has("MANAGE_ROLES")

şeklinde yan yana ekleyebilirsiniz.
*/
