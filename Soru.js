

/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran

Special Thanks:
@PrensesdcBot for soruce!
@bberc for soruce!
@1305025157 for ideas!
And other helpers...
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const cof = require('../config');

const rep = "*Lütfen Herhangi Bir Kullanıcının Mesajını Yanıtlayın!*"
const SORU = {
    none: 'Arkadaşlarınıza sorabileceğiniz güzel ve düşündürücü sorular.',
    zor: 'Normalden daha zorlayıcı sorular için hazırlan.',
    nsfw: '+18 doğruluk soruları sorar.',
    lgbt: 'LGBT konuları hakkında soru sorar'
};

if (cof.WORKTYPE == 'public') {
    Asena.addCommand({pattern: 'soru', fromMe: false, desc: SORU.none}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid, rep, MessageType.text);

        await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *İşte Sorun Geliyor..* 🤭 ', MessageType.text, {
            quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

        });

        await new Promise(r => setTimeout(r, 2100));

        var r_text = new Array ();
    r_text[0] = " *Telefonunda en son aradığın şey neydi?* ";
    r_text[1] = " *Birisi kız arkadaşın / erkek arkadaşından ayrılmak için sana 1 milyon tl önerseydi, yapar mıydın?* ";
    r_text[2] = " *Yerden bir şeyi alıp hiç yedin mi?* ";
    r_text[3] = " *Yılan, kurbağa gibi şeylerden yemek zorunda kaldın mı?* ";
    r_text[4] = " *Bir gün karşı cins olarak uyanırsan, ilk yapacağın şey nedir?* ";
    r_text[5] = " *Büyüyen hayali bir arkadaşınız var mıydı?* ";
    r_text[6] = " *En kötü alışkanlığınız nedir?* ";
    r_text[7] = " *Banyoda şarkı söyler misin?* ";
    r_text[8] = " *Toplumda en utanç verici anınız neydi?* ";
    r_text[9] = " *Aynada kendinle hiç konuştun mu?* ";
    r_text[10] = " *Web geçmişinizi, birileri görürse utanacağınız şey ne olurdu?* ";
    r_text[11] = " *Uykunda konuşur musun?* ";
    r_text[12] = " *Özelden sana yazan birine son attığın mesaj neydi?* ";
    r_text[13] = " *Söylediğiniz veya yaptığınız bir şeyi silmek için zamanda geriye gidebilseydiniz, bu ne olurdu?* ";
    r_text[14] = " *Yeniden doğmuş olsaydın, hangi yüz yılda doğmak isterdin?* ";
    r_text[15] = " *Hala yaptığın en çocukça şey nedir?* ";
    r_text[16] = " *Hangi çocuk filmini tekrar tekrar izleyebilirsin?* ";
    r_text[17] = " *Saçma takma adların var mı?* ";
    r_text[18] = " *Telefonunuzda hangi uygulamada en çok zaman harcıyorsunuz?* ";
    r_text[19] = " *Tek bir oturuşta yediğin en çok yemek ne?* ";
    r_text[20] = " *Tek başınayken dans ediyor musun?* ";
    r_text[21] = " *Karanlıktan korkar mısın?*" ;
    r_text[22] = " *Bütün gün evdeysen ne yapardın?*" ;
    r_text[23] = " *Günde kaç öz çekim yapıyorsunuz?*" ;
    r_text[24] = " *En son ne zaman dişlerini fırçaladın?*" ;
    r_text[25] = " *En sevdiğin pijamalar neye benziyor?*" ;
    r_text[26] = " *Yapmaman gereken bir şeyi yaparken hiç yakalandın mı? Eğer yakalandıysan yaptığın şey ne?*" ;
    r_text[27] = " *Vücudunun hangi bölümünü seviyorsun, hangi kısmından nefret ediyorsun?* ";
    r_text[28] = " *Hiç bitlendin mi?* ";
    r_text[29] = " *Pantolonunu moda için hiç kestin mi?* ";
    r_text[30] = " *Tabağını yalıyor musun?* ";
    r_text[31] = " *Kimsenin senin hakkında bilmediği bir şey varmı?* ";
    r_text[32] = " *Eğer bu gruptaki herkesi yanan bir binadan kurtarmaya çalışıyor olsaydın ve birini geride bırakmak zorunda kalırsan, kimi geride bırakırdın?* ";
    r_text[33] = " *Telefonda aradığın son şey neydi?* ";
    r_text[34] = " *Hiç asansörde gaz kaçırdın mı?* ";
    r_text[35] = " *Banyodayken yanlışlıkla hiç kimse içeri girdi mi?* ";
    r_text[36] = " *Bir günlüğüne karşı cins olsan ne yapardın?* ";
    r_text[37] = " *Hayatınızda bir şey değiştirebilseydiniz, ne olurdu?* ";
    r_text[38] = " *En büyük pişmanlığın nedir?* ";
    r_text[39] = " *Kimsenin bulamadığı kötü bir şey yaptınız mı?* ";
    r_text[40] = " *Telefonunuzdaki en utanç verici fotoğraf hangisidir?* ";
    r_text[41] = " *Şimdiye kadar gördüğünüz en korkunç rüya nedir?* ";
    r_text[42] = " *Çorabını değiştirirken ayağını koklar mısın?* ";
    r_text[43] = " *Bir ilişkinizdeki en büyük korkunuz nedir?* ";
    r_text[44] = " *Hiç yaşınız hakkında yalan söylediniz mi?* ";
    r_text[45] = " *En komik ilk randevunuz neydi?* ";
    r_text[46] = " *En garip alışkanlığın nedir?* ";
    r_text[47] = " *Kaç tane çocuk sahibi olmak istersiniz?* ";
    r_text[48] = " *Çocukluktaki lakabın neydi?* ";
    r_text[49] = " *En sevdiğiniz yemek nedir?* ";
    r_text[50] = " *Hayalindeki meslek ne?* ";
    r_text[51] = " *Bir adada 3 gün sıkışıp kalırsan, ne yaparsın?* ";
    r_text[52] = " *En sevdiğiniz kişi kimlerdir ve neden?* ";
    r_text[53] = " *İlk görüşte aşka inanır mısın?* ";
    r_text[54] = " *Aşka inanıyor musunuz?* ";
    r_text[55] = " *Şansınız olursa hangi ülkede yaşamak istersiniz?* ";
    r_text[56] = " *Hayalinizdeki düğün nedir?* ";
    r_text[57] = " *Şimdiye dek yaşadığınız en garip rüyayı açıklayabilir misiniz?* ";
    r_text[58] = " *En büyük pişmanlığın nedir?* ";
    r_text[59] = " *Saçını yıkamadan en uzun ne kadar süre bekledin?* ";
    r_text[60] = " *Herhangi bir ünlü ile evlenseydin, kim olurdu?* ";
    r_text[61] = " *Kaç tane erkek/kız arkadaşın oldu?* ";
    r_text[62] = " *Şu an sevgilin varmı?* ";
    r_text[63] = " *Şu an sevdiğin varmı?* ";
    r_text[64] = " *Vücudunun hangi bölümünü seviyorsun, hangi kısmından nefret ediyorsun?* ";
    r_text[65] = " *Aynada kendine hayran hayran bakar mısın?* ";
    r_text[66] = " *Hayran olduğun ünlü kim?* ";
    r_text[67] = " *Sevdiğiniz birinin önünde söylediğiniz veya yaptığınız en utanç verici şey nedir?* ";
    r_text[68] = " *Hayallerinizdeki insanla evleneceksin denilse, telefonsuz bir yıl geçirir miydiniz?* ";
    r_text[69] = " *Hayatınızın geri kalanında sadece tek bir saç modeli yapabilseydin, kıvırcık saçları mı yoksa düz saçları mı seçerdin?* ";
    r_text[70] = " *Senden daha kısa biriyle çıkar mısın?* ";
    r_text[71] = " *Aynaya uzun süre bakmak seni korkutur mu?* ";
    r_text[72] = " *Sevgilinle ilgili yaptığın en utanç verici şey nedir?* ";
    r_text[73] = " *Issız bir adada bu gruptan kimin mahsur kalmasını isterdiniz?* ";
    r_text[74] = " *Hiç terk edildin mi? Bunun nedeni neydi?* ";
    r_text[75] = " *Yapabilseydin kendin üzerinde değiştirebileceğin bir fiziksel özellik nedir?* ";
    r_text[76] = " *Hayatında yaptığın en doğru şey?* ";
    r_text[77] = " *Doğa üstü bi yetenek edinebilsen bu ne olurdu?* ";
    r_text[78] = " *Birine sevdiğini nasıl belli edersin?* ";
    r_text[79] = " *Çocukluğun nasıl geçti?* ";
    r_text[80] = " *Bi kelime üret ve ne anlama geldiğini söyle* ";
    r_text[81] = " *Mucizelere inanır mısın?* ";
    r_text[82] = " *Seni en çok ne sinirlendirir?* ";
    r_text[83] = " *Hayatta unutmadığın biri var mı?* ";
    r_text[84] = " *Dövme yaptırmak istesen ne yaptırırdın?* ";
    r_text[85] = " *Eğer bir zaman makinen olsaydı ve geçmişe gidip yaptığın tek bir şeyi silebilecek olsaydın, neyi silerdin?* ";
    r_text[86] = " *Seni ve sevgilini esir alsalar, ya onun canı ya senin canın deseler kimi seçerdin?* ";
    r_text[87] = " *Şekil değiştirme özelliğin olsaydı ilk neye dönüşürdün?* ";
    r_text[88] = " *Hiç sevgilin oldu mu?* ";
    r_text[89] = " *İnsanlardan uzak kalmayı sever misin?* ";
    r_text[90] = " *Gece mi Gündüz mü?* ";
    r_text[91] = " *İnsanların düşüncelerini okuyabilseydin ilk kiminkini okurdun?* ";
    r_text[92] = " *Senin için çok özel birine büyük bir yalan söyledin mi?* ";
    r_text[93] = " *Bu gruptan biriyle çıkmak istesen o kim olurdu?* ";
    r_text[94] = " *Sana göre bu gruptaki kim seni daha çok seviyor?* ";
    r_text[95] = " *Yanlız kaldığında ne tür hayaller kurarsın?* ";
    r_text[96] = " *Yağmurlu bir sonbahar akşamı mı yoksa karlı bir kış gecesimi?* ";
    r_text[97] = " *Bu grupta kendini kime daha yakın hissediyorsun?* ";
    r_text[98] = " *Bu gruptaki herkes tehlikede! Sadece bir kişiyi kurtarma şansın var. Diğer kalanlar %40 ihtimalle hayatta kalacaklar. Kimi kurtarırsın?* ";
    r_text[99] = " *Hiç sana aşkını itiraf eden birini reddettinmi? Ettiysen ismi ne?* ";
    r_text[100] = " *Sevgili mi kanka mı?* ";
    r_text[101] = " *İtiraf Vakti! Hiç daha önce birini aldattı mı?* ";
    r_text[102] = " *İtiraf Vakti! Hiç özelini başka biriyle paylaştın mı?* ";
    r_text[103] = " *İtiraf Vakti! Gece gizlice düşündüğün biri varmı? Varsa adı ne?* ";
    r_text[104] = " *İtiraf Vakti! Daha önce hiç aşkını kalbine gömdün mü?* ";
    r_text[105] = " *İtiraf Vakti! Bu grupta sana aşık olabilecek kimler var?* ";
    r_text[106] = " *İtiraf Vakti! Hayalindeki sevgili için en yakın arkadaşından vazgeçermisin?* ";
    r_text[107] = " *İtiraf Vakti! Bu grupta fizik ve çekicilik olarak en fazla beğendiğin kişi kim?* ";
    r_text[108] = " *Kapana Kısıldın! Çabuk cevap ver! Aileni terkedip en fazla arzuladığın kişinin yanına gitmek mi yoksa 40'ına kadar aile evinde oturmak mı?* ";
    r_text[109] = " *Kapana Kısıldın! Başına silah doğrultulmuş ve ya senin canın yada ailenin canı. Hangisini seçersin?* ";
    r_text[110] = " *Kapana Kısıldın! Çirkin ama zengin biriyle mi çıkmak istersin yada güzel ama fakir biriyle mi?* ";
    r_text[111] = " *Joker Soru! Bu soruya denk gelmek senin çok şanslı olduğunu gösterir. İşte sana sorum:\nAşk mı Para mı?* ";

    var i = Math.floor(112*Math.random())

    await message.client.sendMessage(
        message.jid,
        `${r_text[i]}`,
        MessageType.text
    );

    }));

    Asena.addCommand({pattern: 'soru', fromMe: true, desc: SORU.none}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid, rep, MessageType.text);

        await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *İşte Sorun Geliyor..* 🤭 ', MessageType.text, {
            quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

        });

        await new Promise(r => setTimeout(r, 2100));

        var r_text = new Array ();
    r_text[0] = " *Telefonunda en son aradığın şey neydi?* ";
    r_text[1] = " *Birisi kız arkadaşın / erkek arkadaşından ayrılmak için sana 1 milyon tl önerseydi, yapar mıydın?* ";
    r_text[2] = " *Yerden bir şeyi alıp hiç yedin mi?* ";
    r_text[3] = " *Yılan, kurbağa gibi şeylerden yemek zorunda kaldın mı?* ";
    r_text[4] = " *Bir gün karşı cins olarak uyanırsan, ilk yapacağın şey nedir?* ";
    r_text[5] = " *Büyüyen hayali bir arkadaşınız var mıydı?* ";
    r_text[6] = " *En kötü alışkanlığınız nedir?* ";
    r_text[7] = " *Banyoda şarkı söyler misin?* ";
    r_text[8] = " *Toplumda en utanç verici anınız neydi?* ";
    r_text[9] = " *Aynada kendinle hiç konuştun mu?* ";
    r_text[10] = " *Web geçmişinizi, birileri görürse utanacağınız şey ne olurdu?* ";
    r_text[11] = " *Uykunda konuşur musun?* ";
    r_text[12] = " *Özelden sana yazan birine son attığın mesaj neydi?* ";
    r_text[13] = " *Söylediğiniz veya yaptığınız bir şeyi silmek için zamanda geriye gidebilseydiniz, bu ne olurdu?* ";
    r_text[14] = " *Yeniden doğmuş olsaydın, hangi yüz yılda doğmak isterdin?* ";
    r_text[15] = " *Hala yaptığın en çocukça şey nedir?* ";
    r_text[16] = " *Hangi çocuk filmini tekrar tekrar izleyebilirsin?* ";
    r_text[17] = " *Saçma takma adların var mı?* ";
    r_text[18] = " *Telefonunuzda hangi uygulamada en çok zaman harcıyorsunuz?* ";
    r_text[19] = " *Tek bir oturuşta yediğin en çok yemek ne?* ";
    r_text[20] = " *Tek başınayken dans ediyor musun?* ";
    r_text[21] = " *Karanlıktan korkar mısın?*" ;
    r_text[22] = " *Bütün gün evdeysen ne yapardın?*" ;
    r_text[23] = " *Günde kaç öz çekim yapıyorsunuz?*" ;
    r_text[24] = " *En son ne zaman dişlerini fırçaladın?*" ;
    r_text[25] = " *En sevdiğin pijamalar neye benziyor?*" ;
    r_text[26] = " *Yapmaman gereken bir şeyi yaparken hiç yakalandın mı? Eğer yakalandıysan yaptığın şey ne?*" ;
    r_text[27] = " *Vücudunun hangi bölümünü seviyorsun, hangi kısmından nefret ediyorsun?* ";
    r_text[28] = " *Hiç bitlendin mi?* ";
    r_text[29] = " *Pantolonunu moda için hiç kestin mi?* ";
    r_text[30] = " *Tabağını yalıyor musun?* ";
    r_text[31] = " *Kimsenin senin hakkında bilmediği bir şey varmı?* ";
    r_text[32] = " *Eğer bu gruptaki herkesi yanan bir binadan kurtarmaya çalışıyor olsaydın ve birini geride bırakmak zorunda kalırsan, kimi geride bırakırdın?* ";
    r_text[33] = " *Telefonda aradığın son şey neydi?* ";
    r_text[34] = " *Hiç asansörde gaz kaçırdın mı?* ";
    r_text[35] = " *Banyodayken yanlışlıkla hiç kimse içeri girdi mi?* ";
    r_text[36] = " *Bir günlüğüne karşı cins olsan ne yapardın?* ";
    r_text[37] = " *Hayatınızda bir şey değiştirebilseydiniz, ne olurdu?* ";
    r_text[38] = " *En büyük pişmanlığın nedir?* ";
    r_text[39] = " *Kimsenin bulamadığı kötü bir şey yaptınız mı?* ";
    r_text[40] = " *Telefonunuzdaki en utanç verici fotoğraf hangisidir?* ";
    r_text[41] = " *Şimdiye kadar gördüğünüz en korkunç rüya nedir?* ";
    r_text[42] = " *Çorabını değiştirirken ayağını koklar mısın?* ";
    r_text[43] = " *Bir ilişkinizdeki en büyük korkunuz nedir?* ";
    r_text[44] = " *Hiç yaşınız hakkında yalan söylediniz mi?* ";
    r_text[45] = " *En komik ilk randevunuz neydi?* ";
    r_text[46] = " *En garip alışkanlığın nedir?* ";
    r_text[47] = " *Kaç tane çocuk sahibi olmak istersiniz?* ";
    r_text[48] = " *Çocukluktaki lakabın neydi?* ";
    r_text[49] = " *En sevdiğiniz yemek nedir?* ";
    r_text[50] = " *Hayalindeki meslek ne?* ";
    r_text[51] = " *Bir adada 3 gün sıkışıp kalırsan, ne yaparsın?* ";
    r_text[52] = " *En sevdiğiniz kişi kimlerdir ve neden?* ";
    r_text[53] = " *İlk görüşte aşka inanır mısın?* ";
    r_text[54] = " *Aşka inanıyor musunuz?* ";
    r_text[55] = " *Şansınız olursa hangi ülkede yaşamak istersiniz?* ";
    r_text[56] = " *Hayalinizdeki düğün nedir?* ";
    r_text[57] = " *Şimdiye dek yaşadığınız en garip rüyayı açıklayabilir misiniz?* ";
    r_text[58] = " *En büyük pişmanlığın nedir?* ";
    r_text[59] = " *Saçını yıkamadan en uzun ne kadar süre bekledin?* ";
    r_text[60] = " *Herhangi bir ünlü ile evlenseydin, kim olurdu?* ";
    r_text[61] = " *Kaç tane erkek/kız arkadaşın oldu?* ";
    r_text[62] = " *Şu an sevgilin varmı?* ";
    r_text[63] = " *Şu an sevdiğin varmı?* ";
    r_text[64] = " *Vücudunun hangi bölümünü seviyorsun, hangi kısmından nefret ediyorsun?* ";
    r_text[65] = " *Aynada kendine hayran hayran bakar mısın?* ";
    r_text[66] = " *Hayran olduğun ünlü kim?* ";
    r_text[67] = " *Sevdiğiniz birinin önünde söylediğiniz veya yaptığınız en utanç verici şey nedir?* ";
    r_text[68] = " *Hayallerinizdeki insanla evleneceksin denilse, telefonsuz bir yıl geçirir miydiniz?* ";
    r_text[69] = " *Hayatınızın geri kalanında sadece tek bir saç modeli yapabilseydin, kıvırcık saçları mı yoksa düz saçları mı seçerdin?* ";
    r_text[70] = " *Senden daha kısa biriyle çıkar mısın?* ";
    r_text[71] = " *Aynaya uzun süre bakmak seni korkutur mu?* ";
    r_text[72] = " *Sevgilinle ilgili yaptığın en utanç verici şey nedir?* ";
    r_text[73] = " *Issız bir adada bu gruptan kimin mahsur kalmasını isterdiniz?* ";
    r_text[74] = " *Hiç terk edildin mi? Bunun nedeni neydi?* ";
    r_text[75] = " *Yapabilseydin kendin üzerinde değiştirebileceğin bir fiziksel özellik nedir?* ";
    r_text[76] = " *Hayatında yaptığın en doğru şey?* ";
    r_text[77] = " *Doğa üstü bi yetenek edinebilsen bu ne olurdu?* ";
    r_text[78] = " *Birine sevdiğini nasıl belli edersin?* ";
    r_text[79] = " *Çocukluğun nasıl geçti?* ";
    r_text[80] = " *Bi kelime üret ve ne anlama geldiğini söyle* ";
    r_text[81] = " *Mucizelere inanır mısın?* ";
    r_text[82] = " *Seni en çok ne sinirlendirir?* ";
    r_text[83] = " *Hayatta unutmadığın biri var mı?* ";
    r_text[84] = " *Dövme yaptırmak istesen ne yaptırırdın?* ";
    r_text[85] = " *Eğer bir zaman makinen olsaydı ve geçmişe gidip yaptığın tek bir şeyi silebilecek olsaydın, neyi silerdin?* ";
    r_text[86] = " *Seni ve sevgilini esir alsalar, ya onun canı ya senin canın deseler kimi seçerdin?* ";
    r_text[87] = " *Şekil değiştirme özelliğin olsaydı ilk neye dönüşürdün?* ";
    r_text[88] = " *Hiç sevgilin oldu mu?* ";
    r_text[89] = " *İnsanlardan uzak kalmayı sever misin?* ";
    r_text[90] = " *Gece mi Gündüz mü?* ";
    r_text[91] = " *İnsanların düşüncelerini okuyabilseydin ilk kiminkini okurdun?* ";
    r_text[92] = " *Senin için çok özel birine büyük bir yalan söyledin mi?* ";
    r_text[93] = " *Bu gruptan biriyle çıkmak istesen o kim olurdu?* ";
    r_text[94] = " *Sana göre bu gruptaki kim seni daha çok seviyor?* ";
    r_text[95] = " *Yanlız kaldığında ne tür hayaller kurarsın?* ";
    r_text[96] = " *Yağmurlu bir sonbahar akşamı mı yoksa karlı bir kış gecesimi?* ";
    r_text[97] = " *Bu grupta kendini kime daha yakın hissediyorsun?* ";
    r_text[98] = " *Bu gruptaki herkes tehlikede! Sadece bir kişiyi kurtarma şansın var. Diğer kalanlar %40 ihtimalle hayatta kalacaklar. Kimi kurtarırsın?* ";
    r_text[99] = " *Hiç sana aşkını itiraf eden birini reddettinmi? Ettiysen ismi ne?* ";
    r_text[100] = " *Sevgili mi kanka mı?* ";
    r_text[101] = " *İtiraf Vakti! Hiç daha önce birini aldattı mı?* ";
    r_text[102] = " *İtiraf Vakti! Hiç özelini başka biriyle paylaştın mı?* ";
    r_text[103] = " *İtiraf Vakti! Gece gizlice düşündüğün biri varmı? Varsa adı ne?* ";
    r_text[104] = " *İtiraf Vakti! Daha önce hiç aşkını kalbine gömdün mü?* ";
    r_text[105] = " *İtiraf Vakti! Bu grupta sana aşık olabilecek kimler var?* ";
    r_text[106] = " *İtiraf Vakti! Hayalindeki sevgili için en yakın arkadaşından vazgeçermisin?* ";
    r_text[107] = " *İtiraf Vakti! Bu grupta fizik ve çekicilik olarak en fazla beğendiğin kişi kim?* ";
    r_text[108] = " *Kapana Kısıldın! Çabuk cevap ver! Aileni terkedip en fazla arzuladığın kişinin yanına gitmek mi yoksa 40'ına kadar aile evinde oturmak mı?* ";
    r_text[109] = " *Kapana Kısıldın! Başına silah doğrultulmuş ve ya senin canın yada ailenin canı. Hangisini seçersin?* ";
    r_text[110] = " *Kapana Kısıldın! Çirkin ama zengin biriyle mi çıkmak istersin yada güzel ama fakir biriyle mi?* ";
    r_text[111] = " *Joker Soru! Bu soruya denk gelmek senin çok şanslı olduğunu gösterir. İşte sana sorum:\nAşk mı Para mı?* ";

    var i = Math.floor(112*Math.random())

    await message.client.sendMessage(
        message.jid,
        `${r_text[i]}`,
        MessageType.text
    );

    }));

    Asena.addCommand({pattern: 'zorsoru', fromMe: false, desc: SORU.zor}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,rep, MessageType.text);

        await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Senin İçin En Zor Soruları Seçiyorum..* 😈 ', MessageType.text, {
            quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

        });

        await new Promise(r => setTimeout(r, 2100));

        var r_text = new Array ();
    r_text[0] = " *Biriyle çıkarken yaptığın en utanç verici şey neydi?* ";
    r_text[1] = " *Toplu taşıma araçlarında yaptığın en çılgınca şey neydi?* ";
    r_text[2] = " *Şimdiye kadar bir başkasına söylediğin en acımasızca şey neydi?* ";
    r_text[3] = " *Hiçbir sonucu olmayacağını bilsen ne yapmak isterdin?* ";
    r_text[4] = " *Arkadaşlarınla yapmayı sevdiğin ama sevgilinin önünde asla yapmayacağın şey nedir?* ";
    r_text[5] = " *Bu hayatta en çok kimi kıskanıyorsun?* ";
    r_text[6] = " *Aşk için her şeyi yaparım ama “bunu” yapmam dediğin şey nedir?* ";
    r_text[7] = " *Çeşitli batıl inançların var mı? Varsa onlar neler?* ";
    r_text[8] = " *Sevdiğini itiraf etmekten utandığın film hangisidir?* ";
    r_text[9] = " *En utan verici kişisel bakım alışkanlığın nedir?* ";
    r_text[10] = " *Kimsenin bilmeyeceği garanti olsa kimi öldürmek isterdin?* ";
    r_text[11] = " *Başkası için aldığın en ucuz hediye nedir?* ";
    r_text[12] = " *Hiç toplum içinde çıplak kaldın mı?* ";
    r_text[13] = " *Hiç toplum içindeyken burnunu karıştırdın mı?* ";
    r_text[14] = " *Gece geç saatte yaptığın en utanç verici şey nedir?* ";
    r_text[15] = " *Çıplak olmak mı yoksa düşündüğün her şeyin tişörtünde yazması mı? Hangisini seçerdin?* ";
    r_text[16] = " *Hiç havuza işeyip hiçbir şey olmamış gibi davrandın mı?* ";
    r_text[17] = " *Sence bu grupta en kötü giyinen kişi kimdir?* ";
    r_text[18] = " *Bu odadaki insanlardan kiminle hayatını değiştirmek isterdin? Neden?* ";
    r_text[19] = " *Tuvalete oturduğun zaman ne düşünürsün?* ";
    r_text[20] = " *Yaptığında utanmana neden olan mahcup zevkin nedir?* ";
    r_text[21] = " *Burnunu karıştırır mısın?*" ;
    r_text[22] = " *En utanç verici anın neydi?*" ;
    r_text[23] = " *Hiç sınıfta yüksek sesle osurdun mu?*" ;
    r_text[24] = " *Hiç seksi bir fotoğrafını çekmeyi denedin mi?*" ;
    r_text[25] = " *Gizli aşkın kim?*" ;
    r_text[26] = " *Yapmaman gereken bir şeyi yaparken hiç yakalandın mı? Eğer yakalandıysan yaptığın şey ne?*" ;
    r_text[27] = " *Bu odadaki en seksi kişi sence kim?* ";
    r_text[28] = " *Mevcut sevgilinle evleneceğini düşünüyor musun?* ";
    r_text[29] = " *Kimsenin senin hakkında bilmediği şey nedir?* ";
    r_text[30] = " *Hiç izlememen gereken bir film izledin mi? İzlediysen adı ne?* ";
    r_text[31] = " *Yaptığın en yasa dışı şey neydi?* ";
    r_text[32] = " *Kardeşini 1 milyon TL karşılığında başka bir kardeşle değişir misin?* ";
    r_text[33] = " *Birden fazla kişiyle evlenme şansın olsa kimleri seçerdin?* ";
    r_text[34] = " *Sence bu gruptaki en kötü insan kim olabilir?* ";
    r_text[35] = " *Sevgilinden ayrılman için birisi sana 1 milyon TL verse ayrılır mıydın?* ";
    r_text[36] = " *Sevgilin seni hiç utandırdı mı? Utandırdıysa o nedir?* ";
    r_text[37] = " *Hiç sevgilini aldatmayı düşündün mü?* ";
    r_text[38] = " *Hiç birini gözetlerken yakalandın mı?* ";
    r_text[39] = " *Hiç burnunu karıştırırken yakalandın mı?* ";
    r_text[40] = " *Hiç sosyal medyada pişman olduğun bir şey paylaştın mı? Paylaştıysan konusu ne?* ";
    r_text[41] = " *Duşta işiyor musun?* ";
    r_text[42] = " *Çorabını değiştirirken ayağını koklar mısın?* ";
    r_text[43] = " *Hayatının en utanç verici anı neydi?* ";
    r_text[44] = " *Birisi sana dünyanın en zengini olmayı teklif etse bile asla yapmayacağın şey nedir?* ";
    r_text[45] = " *Bu gruptan kiminle sevgili olmak isterdin?* ";
    r_text[46] = " *Sence bu grupta yer alan ve en kötü sevgili olacak kişi kimdir?* ";
    r_text[47] = " *Hiç sevgilinin arkadaşına aşık oldun mu?* ";
    r_text[48] = " *Hayatında yaptığın en kaba şey neydi?* ";
    r_text[49] = " *Birine yaptığın en iğrenç şaka neydi?* ";
    r_text[50] = " *Sevgilinle yapmak istediğin en çılgınca şey nedir?* ";
    r_text[51] = " *Bir başkasından etkilenerek yaptığın en çılgınca şey neydi?* ";
    r_text[52] = " *Çıplak kalmak veya aklından geçenlerin kafanın üstünde yazması arasında bir seçim yapmak zorunda olsan hangisini seçerdin?* ";
    r_text[53] = " *Daha önce hiç sümüğünün tadına baktın mı?* ";
    r_text[54] = " *Tuvalette otururken düşündüğün bazı şeyler nelerdir?* ";
    r_text[55] = " *Bir parçası olduğun en utanç verici durum neydi?* ";
    r_text[56] = " *En utanç verici alışkanlığın nedir?* ";
    r_text[57] = " *Daha önce hiç altına işediğin oldu mu?* ";    
    r_text[58] = " *İnsanların içindeyken en utandığın an neydi?* ";
    r_text[59] = " *İnsanlara ters gelmesine rağmen yapmaktan en büyük keyif aldığın şey nedir?* ";
    r_text[60] = " *Gizliden gizliye ilgi duyduğun kişi kim?* ";
    r_text[61] = " *Görünümünü 1-10 arasında nasıl değerlendirirsin?* ";
    r_text[62] = " *Hiç yanlışlıkla bir arkadaşının sırrını ortaya çıkardın mı? Çıkardıysan o nedir?* ";
    r_text[63] = " *Şu anki kız arkadaşınla/erkek arkadaşınla evleneceğini düşünüyor musun?* ";
    r_text[64] = " *Hiç kulak kirinin tadına baktın mı?* ";
    r_text[65] = " *Hiç terinin tadına baktın mı?* ";   
    r_text[66] = " *Bu grupta yer alan ve tanıdığın en kötü kişi olduğuna inandığın kişi kim?* ";
    r_text[67] = " *Sevdiğiniz birinin önünde söylediğiniz veya yaptığınız en utanç verici şey nedir?* ";
    r_text[68] = " *Gerçek dışı olan en büyük korkun nedir?* ";
    r_text[69] = " *Aşık olduğun kişinin önünde en çok utandığın zaman ne zamandı?* ";
    r_text[70] = " *Yatağını en son ne zaman ıslattın?* ";
    r_text[71] = " *Kimsenin bilmediği en büyük sırrın nedir?* ";
    r_text[72] = " *Kendini seksi yapmak için ne yaparsın?* ";
    r_text[73] = " *Seni en çok ne tahrik eder?* ";
    r_text[74] = " *Başka birinin kız arkadaşıyla çıkabilecek olsaydın bu kim olurdu?* ";
    r_text[75] = " *Aşık olduğun kişiye sınır tanımadan bir mesaj gönderecek olsaydın bu ne olurdu?* ";
    r_text[76] = " *Bu gruptan bir kişiyle evlenmek isteseydin bu kim olurdu?* ";

    var i = Math.floor(77*Math.random())

    await message.client.sendMessage(
        message.jid,
        `${r_text[i]}`,
        MessageType.text
    );

    }));

    Asena.addCommand({pattern: 'zorsoru', fromMe: true, desc: SORU.zor}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,rep, MessageType.text);

        await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Senin İçin En Zor Soruları Seçiyorum..* 😈 ', MessageType.text, {
            quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

        });

        await new Promise(r => setTimeout(r, 2100));

        var r_text = new Array ();
    r_text[0] = " *Biriyle çıkarken yaptığın en utanç verici şey neydi?* ";
    r_text[1] = " *Toplu taşıma araçlarında yaptığın en çılgınca şey neydi?* ";
    r_text[2] = " *Şimdiye kadar bir başkasına söylediğin en acımasızca şey neydi?* ";
    r_text[3] = " *Hiçbir sonucu olmayacağını bilsen ne yapmak isterdin?* ";
    r_text[4] = " *Arkadaşlarınla yapmayı sevdiğin ama sevgilinin önünde asla yapmayacağın şey nedir?* ";
    r_text[5] = " *Bu hayatta en çok kimi kıskanıyorsun?* ";
    r_text[6] = " *Aşk için her şeyi yaparım ama “bunu” yapmam dediğin şey nedir?* ";
    r_text[7] = " *Çeşitli batıl inançların var mı? Varsa onlar neler?* ";
    r_text[8] = " *Sevdiğini itiraf etmekten utandığın film hangisidir?* ";
    r_text[9] = " *En utan verici kişisel bakım alışkanlığın nedir?* ";
    r_text[10] = " *Kimsenin bilmeyeceği garanti olsa kimi öldürmek isterdin?* ";
    r_text[11] = " *Başkası için aldığın en ucuz hediye nedir?* ";
    r_text[12] = " *Hiç toplum içinde çıplak kaldın mı?* ";
    r_text[13] = " *Hiç toplum içindeyken burnunu karıştırdın mı?* ";
    r_text[14] = " *Gece geç saatte yaptığın en utanç verici şey nedir?* ";
    r_text[15] = " *Çıplak olmak mı yoksa düşündüğün her şeyin tişörtünde yazması mı? Hangisini seçerdin?* ";
    r_text[16] = " *Hiç havuza işeyip hiçbir şey olmamış gibi davrandın mı?* ";
    r_text[17] = " *Sence bu grupta en kötü giyinen kişi kimdir?* ";
    r_text[18] = " *Bu odadaki insanlardan kiminle hayatını değiştirmek isterdin? Neden?* ";
    r_text[19] = " *Tuvalete oturduğun zaman ne düşünürsün?* ";
    r_text[20] = " *Yaptığında utanmana neden olan mahcup zevkin nedir?* ";
    r_text[21] = " *Burnunu karıştırır mısın?*" ;
    r_text[22] = " *En utanç verici anın neydi?*" ;
    r_text[23] = " *Hiç sınıfta yüksek sesle osurdun mu?*" ;
    r_text[24] = " *Hiç seksi bir fotoğrafını çekmeyi denedin mi?*" ;
    r_text[25] = " *Gizli aşkın kim?*" ;
    r_text[26] = " *Yapmaman gereken bir şeyi yaparken hiç yakalandın mı? Eğer yakalandıysan yaptığın şey ne?*" ;
    r_text[27] = " *Bu odadaki en seksi kişi sence kim?* ";
    r_text[28] = " *Mevcut sevgilinle evleneceğini düşünüyor musun?* ";
    r_text[29] = " *Kimsenin senin hakkında bilmediği şey nedir?* ";
    r_text[30] = " *Hiç izlememen gereken bir film izledin mi? İzlediysen adı ne?* ";
    r_text[31] = " *Yaptığın en yasa dışı şey neydi?* ";
    r_text[32] = " *Kardeşini 1 milyon TL karşılığında başka bir kardeşle değişir misin?* ";
    r_text[33] = " *Birden fazla kişiyle evlenme şansın olsa kimleri seçerdin?* ";
    r_text[34] = " *Sence bu gruptaki en kötü insan kim olabilir?* ";
    r_text[35] = " *Sevgilinden ayrılman için birisi sana 1 milyon TL verse ayrılır mıydın?* ";
    r_text[36] = " *Sevgilin seni hiç utandırdı mı? Utandırdıysa o nedir?* ";
    r_text[37] = " *Hiç sevgilini aldatmayı düşündün mü?* ";
    r_text[38] = " *Hiç birini gözetlerken yakalandın mı?* ";
    r_text[39] = " *Hiç burnunu karıştırırken yakalandın mı?* ";
    r_text[40] = " *Hiç sosyal medyada pişman olduğun bir şey paylaştın mı? Paylaştıysan konusu ne?* ";
    r_text[41] = " *Duşta işiyor musun?* ";
    r_text[42] = " *Çorabını değiştirirken ayağını koklar mısın?* ";
    r_text[43] = " *Hayatının en utanç verici anı neydi?* ";
    r_text[44] = " *Birisi sana dünyanın en zengini olmayı teklif etse bile asla yapmayacağın şey nedir?* ";
    r_text[45] = " *Bu gruptan kiminle sevgili olmak isterdin?* ";
    r_text[46] = " *Sence bu grupta yer alan ve en kötü sevgili olacak kişi kimdir?* ";
    r_text[47] = " *Hiç sevgilinin arkadaşına aşık oldun mu?* ";
    r_text[48] = " *Hayatında yaptığın en kaba şey neydi?* ";
    r_text[49] = " *Birine yaptığın en iğrenç şaka neydi?* ";
    r_text[50] = " *Sevgilinle yapmak istediğin en çılgınca şey nedir?* ";
    r_text[51] = " *Bir başkasından etkilenerek yaptığın en çılgınca şey neydi?* ";
    r_text[52] = " *Çıplak kalmak veya aklından geçenlerin kafanın üstünde yazması arasında bir seçim yapmak zorunda olsan hangisini seçerdin?* ";
    r_text[53] = " *Daha önce hiç sümüğünün tadına baktın mı?* ";
    r_text[54] = " *Tuvalette otururken düşündüğün bazı şeyler nelerdir?* ";
    r_text[55] = " *Bir parçası olduğun en utanç verici durum neydi?* ";
    r_text[56] = " *En utanç verici alışkanlığın nedir?* ";
    r_text[57] = " *Daha önce hiç altına işediğin oldu mu?* ";    
    r_text[58] = " *İnsanların içindeyken en utandığın an neydi?* ";
    r_text[59] = " *İnsanlara ters gelmesine rağmen yapmaktan en büyük keyif aldığın şey nedir?* ";
    r_text[60] = " *Gizliden gizliye ilgi duyduğun kişi kim?* ";
    r_text[61] = " *Görünümünü 1-10 arasında nasıl değerlendirirsin?* ";
    r_text[62] = " *Hiç yanlışlıkla bir arkadaşının sırrını ortaya çıkardın mı? Çıkardıysan o nedir?* ";
    r_text[63] = " *Şu anki kız arkadaşınla/erkek arkadaşınla evleneceğini düşünüyor musun?* ";
    r_text[64] = " *Hiç kulak kirinin tadına baktın mı?* ";
    r_text[65] = " *Hiç terinin tadına baktın mı?* ";   
    r_text[66] = " *Bu grupta yer alan ve tanıdığın en kötü kişi olduğuna inandığın kişi kim?* ";
    r_text[67] = " *Sevdiğiniz birinin önünde söylediğiniz veya yaptığınız en utanç verici şey nedir?* ";
    r_text[68] = " *Gerçek dışı olan en büyük korkun nedir?* ";
    r_text[69] = " *Aşık olduğun kişinin önünde en çok utandığın zaman ne zamandı?* ";
    r_text[70] = " *Yatağını en son ne zaman ıslattın?* ";
    r_text[71] = " *Kimsenin bilmediği en büyük sırrın nedir?* ";
    r_text[72] = " *Kendini seksi yapmak için ne yaparsın?* ";
    r_text[73] = " *Seni en çok ne tahrik eder?* ";
    r_text[74] = " *Başka birinin kız arkadaşıyla çıkabilecek olsaydın bu kim olurdu?* ";
    r_text[75] = " *Aşık olduğun kişiye sınır tanımadan bir mesaj gönderecek olsaydın bu ne olurdu?* ";
    r_text[76] = " *Bu gruptan bir kişiyle evlenmek isteseydin bu kim olurdu?* ";

    var i = Math.floor(77*Math.random())

    await message.client.sendMessage(
        message.jid,
        `${r_text[i]}`,
        MessageType.text
    );

    }));

    Asena.addCommand({pattern: '18soru', fromMe: false, desc: SORU.nsfw}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,rep, MessageType.text);

        await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' 💋 *Hazır mısın* 👅 ', MessageType.text, {
            quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

        });

        await new Promise(r => setTimeout(r, 2100));

        var r_text = new Array ();
    r_text[0] = " *Bu gruptan bir karşı cins ile yatmak isteseydin o kim olurdu?* ";
    r_text[1] = " *Önünde iki seçenek var, 1 yıl sex kölesi mi olmak istersin yoksa cinsel organına kötü bir ameliyat mı?* ";
    r_text[2] = " *Kendini çıplak hayal ediyormusun?* ";
    r_text[3] = " *Hangi ünlü ile sex yapmak isterdin?* ";
    r_text[4] = " *Seviştiğin en sıradışı yer neresi?* ";
    r_text[5] = " *En son ne zaman masturbasyon yaptın?* ";
    r_text[6] = " *Kendine dokunurken nasıl hissedersin?* ";
    r_text[7] = " *Hiç başka bir çifti seks yaparken izledin mi?* ";
    r_text[8] = " *Birinin sana söylediği en seksi şeyler neler?* ";
    r_text[9] = " *Hiç aynada kendi vücuduna uzun süre bakıp hayal kurdun mu?* ";
    r_text[10] = " *Hiç bir gecelik ilişki hikayen oldu mu?* ";
    r_text[11] = " *Hiç Nude attın mı?* ";
    r_text[12] = " *Hiç bir öğretmeninle ilgili fantezi kurdun mu?* ";
    r_text[13] = " *Zevk vermeyi mi almayı mı tercih edersin?* ";
    r_text[14] = " *Asla yapmayacağın bir cinsel aktivite söyle.* ";
    r_text[15] = " *Ergenken yaparken yakalandığın en müstehcen şey?* ";
    r_text[16] = " *Hayatında kaç tane cinsel partnerin oldu?* ";   
    r_text[17] = " *Sana ilk orgazmını kim yaşattı?* ";
    r_text[18] = " *Hiç birinin bekaretini bozdun mu?* ";
    r_text[19] = " *En sevdiğin porno türü ne?* ";
    r_text[20] = " *Hiç halka açık bir tuvalette mastürbasyon yaptın mı?* ";
    r_text[21] = " *Hiç bir seks oyuncağı kullandın mı?* ";
    r_text[22] = " *Hiç anal seks denedin mi?* ";
    r_text[23] = " *Vücuduna başkasının dokunması seni ateşlendirirmi?* ";
    r_text[24] = " *Birisinde cinsel olarak çekici bulduğun ilk şey nedir?* ";
    r_text[25] = " *Mastürbasyon yaptığın en garip yer neresiydi?* ";
    r_text[26] = " *Cinsel tercihin ne?*" ;
    r_text[27] = " *Seks arzun ne kadar yüksek?* ";
    r_text[28] = " *Sana şaplak atılmasını sever misin?* ";
    r_text[29] = " *Seni tahrik etmenin en kesin yolu nedir?* ";
    r_text[30] = " *Dirty talk sever misin?* ";
    r_text[31] = " *Üstte olmayı mı tercih edersin, altta olmayı mı?* ";
    r_text[32] = " *Birini orgazm yapmak için neresinden öpersin?* ";
    r_text[33] = " *Karşı cinsi nasıl orgazm yaparsın?* ";
    r_text[34] = " *İlk öpücüğünü açıkla.* ";
    r_text[35] = " *Kaç kişiyle seks yaptın?* ";
    r_text[36] = " *Sexting’i ilk kiminle yaptın? İyi miydi?* ";
    r_text[37] = " *Hiç seks yaparken yakalandın mı?* ";
    r_text[38] = " *Penisin ya da vajinan olsa ilk ne yapardın?* ";
    r_text[39] = " *Bugüne kadar cinsellik hakkında düşüncen nedir?* ";
    r_text[40] = " *Vücudundan memnun musun?* ";
    r_text[41] = " *Eğer erkeksen penisinin boyutunu ve şeklini açıkla. Bundan memnun musun?* ";
    r_text[42] = " *Kendi spermini tattın mı? Beğendin mi?* ";
    r_text[43] = " *En sıradışı / tabu fantezilerini tarif et.* ";
    r_text[44] = " *Hayalini kurduğun en garip kişi kim?* ";
    r_text[45] = " *Mastürbasyon yaparken hep hayal kurar mısın?* ";
    r_text[46] = " *En garip alışkanlığın nedir?* ";
    r_text[47] = " *Utandığın herhangi bir fikrin var mı? Varsa nedir?* ";
    r_text[48] = " *Boşalırken ne hissediyorsun?* ";
    r_text[49] = " *Boşalırken hiç fışkırıyor musun?* ";
    r_text[50] = " *Cinsel organına dokunmadan orgazm olabilir misin?* ";
    r_text[51] = " *Meme uçların ne kadar hassas? Meme ucunla oynar mısın?* ";
    r_text[52] = " *Başka bir kişiyle ya da mastürbasyon yoluyla orgazm yapmayı daha kolay buluyor musun?* ";
    r_text[53] = " *Hard veya soft bir temastan hangisiyle daha kolay boşalırsın?* ";
    r_text[54] = " *Sevgilinle ilgili yaptığın en utanç verici şey nedir?* ";
    r_text[55] = " *Bu Soruyu Cevaplamak Zorundasın!*\nSevglinin seni tahrik eden en sexy yeri neresidir?* ";
    r_text[56] = " *Bu Soruyu Cevaplamak Zorundasın!*\nSana en yakın karşı cins kuzenin ile sex yapmak istedin mi?* ";
    r_text[57] = " *Bu Soruyu Cevaplamak Zorundasın!*\nBu gruptaki karşı cins birini çıplak görme şansın var! Kimi görmek isterdin?* ";
    r_text[58] = " *Bu Soruyu Cevaplamak Zorundasın!*\nMazoşist ve sexy bir sevgili ile ateşli geceler geçirmek mi yoksa sıradan ve sana göre çok daha az sexy biri ile ateşli geceler geçirmek mi?* ";
    r_text[59] = " *Bu Soruyu Cevaplamak Zorundasın!*\nBu gruptaki birinin nude fotoğrafını görebileceksin ama 1 ay mastürbasyon yapmayacaksın. Yinede görmek ister miydin?* ";
    r_text[60] = " *Bu Soruyu Cevaplamak Zorundasın!*\nErkekler için; Tek gecelik ilişki hakkın ve önünde iki seçenek var: Lana Rhoads mu Barabara Palvin mi\nKızlar İçin; Johnny Sins mi Jordi mi?* ";
    r_text[61] = " *Bu Soruyu Cevaplamak Zorundasın!*\nBu gruptan kimle gelecek vaat eden hayaller kurdun?* ";
    r_text[62] = " *Bu Soruyu Cevaplamak Zorundasın!*\nSana nerdeyse insan kadar gerçekçi ve aşırı sexy bir robot verecekler ama ayda sadece 1 kez ilişkiye girebileceksin yada orta çekicilik düzeyinde bir insan ile istediğin zaman sex yapabileceksin. Hangisini seçerdin? ";
    r_text[63] = " *Bu Soruyu Cevaplamak Zorundasın!*\nHayalindeki öpüşme sahnesi ve kimle yapmak istediğini açıkla. ";
    r_text[64] = " *Bu Soruyu Cevaplamak Zorundasın!*\nHiç beklemediğin bir orgazm oldu mu? ";
    r_text[65] = " *Bu Soruyu Cevaplamak Zorundasın!*\nAynı anda birden fazla kişi tarafından etkilendin mi? ";

    var i = Math.floor(66*Math.random())

    await message.client.sendMessage(
        message.jid,
        `${r_text[i]}`,
        MessageType.text
    );

    }));

    Asena.addCommand({pattern: '18soru', fromMe: true, desc: SORU.nsfw}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,rep, MessageType.text);

        await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' 💋 *Hazır mısın* 👅 ', MessageType.text, {
            quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

        });

        await new Promise(r => setTimeout(r, 2100));

        var r_text = new Array ();
    r_text[0] = " *Bu gruptan bir karşı cins ile yatmak isteseydin o kim olurdu?* ";
    r_text[1] = " *Önünde iki seçenek var, 1 yıl sex kölesi mi olmak istersin yoksa cinsel organına kötü bir ameliyat mı?* ";
    r_text[2] = " *Kendini çıplak hayal ediyormusun?* ";
    r_text[3] = " *Hangi ünlü ile sex yapmak isterdin?* ";
    r_text[4] = " *Seviştiğin en sıradışı yer neresi?* ";
    r_text[5] = " *En son ne zaman masturbasyon yaptın?* ";
    r_text[6] = " *Kendine dokunurken nasıl hissedersin?* ";
    r_text[7] = " *Hiç başka bir çifti seks yaparken izledin mi?* ";
    r_text[8] = " *Birinin sana söylediği en seksi şeyler neler?* ";
    r_text[9] = " *Hiç aynada kendi vücuduna uzun süre bakıp hayal kurdun mu?* ";
    r_text[10] = " *Hiç bir gecelik ilişki hikayen oldu mu?* ";
    r_text[11] = " *Hiç Nude attın mı?* ";
    r_text[12] = " *Hiç bir öğretmeninle ilgili fantezi kurdun mu?* ";
    r_text[13] = " *Zevk vermeyi mi almayı mı tercih edersin?* ";
    r_text[14] = " *Asla yapmayacağın bir cinsel aktivite söyle.* ";
    r_text[15] = " *Ergenken yaparken yakalandığın en müstehcen şey?* ";
    r_text[16] = " *Hayatında kaç tane cinsel partnerin oldu?* ";   
    r_text[17] = " *Sana ilk orgazmını kim yaşattı?* ";
    r_text[18] = " *Hiç birinin bekaretini bozdun mu?* ";
    r_text[19] = " *En sevdiğin porno türü ne?* ";
    r_text[20] = " *Hiç halka açık bir tuvalette mastürbasyon yaptın mı?* ";
    r_text[21] = " *Hiç bir seks oyuncağı kullandın mı?* ";
    r_text[22] = " *Hiç anal seks denedin mi?* ";
    r_text[23] = " *Vücuduna başkasının dokunması seni ateşlendirirmi?* ";
    r_text[24] = " *Birisinde cinsel olarak çekici bulduğun ilk şey nedir?* ";
    r_text[25] = " *Mastürbasyon yaptığın en garip yer neresiydi?* ";
    r_text[26] = " *Cinsel tercihin ne?*" ;
    r_text[27] = " *Seks arzun ne kadar yüksek?* ";
    r_text[28] = " *Sana şaplak atılmasını sever misin?* ";
    r_text[29] = " *Seni tahrik etmenin en kesin yolu nedir?* ";
    r_text[30] = " *Dirty talk sever misin?* ";
    r_text[31] = " *Üstte olmayı mı tercih edersin, altta olmayı mı?* ";
    r_text[32] = " *Birini orgazm yapmak için neresinden öpersin?* ";
    r_text[33] = " *Karşı cinsi nasıl orgazm yaparsın?* ";
    r_text[34] = " *İlk öpücüğünü açıkla.* ";
    r_text[35] = " *Kaç kişiyle seks yaptın?* ";
    r_text[36] = " *Sexting’i ilk kiminle yaptın? İyi miydi?* ";
    r_text[37] = " *Hiç seks yaparken yakalandın mı?* ";
    r_text[38] = " *Penisin ya da vajinan olsa ilk ne yapardın?* ";
    r_text[39] = " *Bugüne kadar cinsellik hakkında düşüncen nedir?* ";
    r_text[40] = " *Vücudundan memnun musun?* ";
    r_text[41] = " *Eğer erkeksen penisinin boyutunu ve şeklini açıkla. Bundan memnun musun?* ";
    r_text[42] = " *Kendi spermini tattın mı? Beğendin mi?* ";
    r_text[43] = " *En sıradışı / tabu fantezilerini tarif et.* ";
    r_text[44] = " *Hayalini kurduğun en garip kişi kim?* ";
    r_text[45] = " *Mastürbasyon yaparken hep hayal kurar mısın?* ";
    r_text[46] = " *En garip alışkanlığın nedir?* ";
    r_text[47] = " *Utandığın herhangi bir fikrin var mı? Varsa nedir?* ";
    r_text[48] = " *Boşalırken ne hissediyorsun?* ";
    r_text[49] = " *Boşalırken hiç fışkırıyor musun?* ";
    r_text[50] = " *Cinsel organına dokunmadan orgazm olabilir misin?* ";
    r_text[51] = " *Meme uçların ne kadar hassas? Meme ucunla oynar mısın?* ";
    r_text[52] = " *Başka bir kişiyle ya da mastürbasyon yoluyla orgazm yapmayı daha kolay buluyor musun?* ";
    r_text[53] = " *Hard veya soft bir temastan hangisiyle daha kolay boşalırsın?* ";
    r_text[54] = " *Sevgilinle ilgili yaptığın en utanç verici şey nedir?* ";
    r_text[55] = " *Bu Soruyu Cevaplamak Zorundasın!*\nSevglinin seni tahrik eden en sexy yeri neresidir?* ";
    r_text[56] = " *Bu Soruyu Cevaplamak Zorundasın!*\nSana en yakın karşı cins kuzenin ile sex yapmak istedin mi?* ";
    r_text[57] = " *Bu Soruyu Cevaplamak Zorundasın!*\nBu gruptaki karşı cins birini çıplak görme şansın var! Kimi görmek isterdin?* ";
    r_text[58] = " *Bu Soruyu Cevaplamak Zorundasın!*\nMazoşist ve sexy bir sevgili ile ateşli geceler geçirmek mi yoksa sıradan ve sana göre çok daha az sexy biri ile ateşli geceler geçirmek mi?* ";
    r_text[59] = " *Bu Soruyu Cevaplamak Zorundasın!*\nBu gruptaki birinin nude fotoğrafını görebileceksin ama 1 ay mastürbasyon yapmayacaksın. Yinede görmek ister miydin?* ";
    r_text[60] = " *Bu Soruyu Cevaplamak Zorundasın!*\nErkekler için; Tek gecelik ilişki hakkın ve önünde iki seçenek var: Lana Rhoads mu Barabara Palvin mi\nKızlar İçin; Johnny Sins mi Jordi mi?* ";
    r_text[61] = " *Bu Soruyu Cevaplamak Zorundasın!*\nBu gruptan kimle gelecek vaat eden hayaller kurdun?* ";
    r_text[62] = " *Bu Soruyu Cevaplamak Zorundasın!*\nSana nerdeyse insan kadar gerçekçi ve aşırı sexy bir robot verecekler ama ayda sadece 1 kez ilişkiye girebileceksin yada orta çekicilik düzeyinde bir insan ile istediğin zaman sex yapabileceksin. Hangisini seçerdin? ";
    r_text[63] = " *Bu Soruyu Cevaplamak Zorundasın!*\nHayalindeki öpüşme sahnesi ve kimle yapmak istediğini açıkla. ";
    r_text[64] = " *Bu Soruyu Cevaplamak Zorundasın!*\nHiç beklemediğin bir orgazm oldu mu? ";
    r_text[65] = " *Bu Soruyu Cevaplamak Zorundasın!*\nAynı anda birden fazla kişi tarafından etkilendin mi? ";

    var i = Math.floor(66*Math.random())

    await message.client.sendMessage(
        message.jid,
        `${r_text[i]}`,
        MessageType.text
    );

    }));

    Asena.addCommand({pattern: 'lgbtsoru', fromMe: false, desc: SORU.lgbt}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,rep, MessageType.text);

        await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Sorun Geliyor..* 🏳️‍🌈 ', MessageType.text, { 
            quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
        });

        await new Promise(r => setTimeout(r, 2100));

        var r_text = new Array ();
    r_text[0] = " *Hiç hemcinsin ile ilgili +18 şeyler düşündün mü?* ";
    r_text[1] = " *Sadece hemcinsin ile ilişki yaşayacak olsan, bu gruptan kimle yapardın?* ";
    r_text[2] = " *Yaptığın şeyler yüzünden yada, konuşma şeklinden dolayı kendini “trans” olarak düşündün mü?* ";
    r_text[3] = " *Bu gruptan hemcinsin ile sevgili olsan kiminle olurdun?* ";
    r_text[4] = " *Gökkuşağı rengini severmisin?* ";
    r_text[5] = " *LGBT karakterlere sahip oyunları oynamaktan zevk alır mısın?* ";
    r_text[6] = " *1 Günlüğüne başka bir hemcinsine dönüşebilseydin bu kim olurdu?* ";
    r_text[7] = " *Arkadaşlarından sana göre kim daha çok LGBT biri olmaya daha yatkın?* ";
    r_text[8] = " *Dünyanın en zengin insanı olacaksın ama hemcins bir partnerin olacak yada fakirlikten kırılacaksın ama karşı cins bir partnerin olacak. Hangisini seçerdi?* ";
    r_text[9] = " *Hemcinsin ile yaşadığın her tek gecelik ilişkide 1 Milyon Dolar alacaksın. Ama bu para sadece 3 gün duracak. Birdaha almak için tekrar ilişkiye girermisin?* ";
    r_text[10] = " *Hiç kendini bu bedene ait olmadığını hissettiğin zaman oldu mu?* ";
    r_text[11] = " *Aşkını itiraf edicek olsan hangi hemcinsine bunu söylersin?* ";
    r_text[12] = " *Gökkuşağı renkli bir giysiyi giymekten çekinir misin?* ";
    r_text[13] = " *Sence normal ilişkimi yoksa hemcins ilişki mi daha zevkli?* ";
    r_text[14] = " *LGBT hakkında kötü düşünenler için sen ne düşünüyorsun?* ";
    r_text[15] = " *LGBT destekleyen kişileri sosyal medyadan takip edermisin?* ";
    r_text[16] = " *Sadece tek bir hemcinsin ile ilişki yaşayacaksan bu kim olurdu?* ";
    r_text[17] = " *Hiç kız/erkek olsam dedin mi?* ";
    r_text[18] = " *Karşı cins kıyafetlerini giymek ister misin? Sana yakışacağını düşünüyor musun?* ";
    r_text[19] = " *Hiçbir baskı olmasa ve %100 cinsiyet değiştirme ameliyatı olsa bunu yapar mıydın?* ";
    r_text[20] = " *Hemcinsinin giydiği hangi kıyafetler seni tahrik eder?* ";
    r_text[21] = " *Yıllardır en yakın arkadaşın ve herşeyiniz bir olan biri sana ilgi duymaya başladı. Onu hayatından çıkarır mısın?* ";
    r_text[22] = " *Hemcinsin sana aşkını itiraf etse ilk tepkin ve sonrasında ne olurdu?* ";
    r_text[23] = " *200 Lira karşılığında LGBT bayrağı olan bir hoodie’yi 1 günlüğüne giyer misin?* ";
    r_text[24] = " *1000 Lira karşılığında hemcinsin ile dudaktan öpüşür müsün? Üstelik bunu her yaptığında 1000 lira alacaksın. Daha da fazla yapar mısın?* ";
    r_text[25] = " *En yakın hemcins arkadaşın seni tahrik etmeye çalışıyor. Bunun olmasına izin verir misin?* ";
    r_text[26] = " *Hemcinsin ile aşırı ateşli bir ortam oluşturdunuz. Kontrolü kaybediyorsunuz.. Bundan zevk alıp akışına bırakır mısın yoksa DUR mu dersin?* ";
    r_text[27] = " *Karşı cinsinden aradığın aşkı ve sevgiyi hemcinsin sana çok daha fazlası ile veriyor. İkiniz için bir şansın olduğunu düşünür müsün?* ";

    var i = Math.floor(27*Math.random())

    await message.client.sendMessage(
        message.jid,
        `${r_text[i]}`,
         MessageType.text
    );

    }));

    Asena.addCommand({pattern: 'lgbtsoru', fromMe: true, desc: SORU.lgbt}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,rep, MessageType.text);

        await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Sorun Geliyor..* 🏳️‍🌈 ', MessageType.text, {
            quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
        });

        await new Promise(r => setTimeout(r, 2100));

        var r_text = new Array ();
    r_text[0] = " *Hiç hemcinsin ile ilgili +18 şeyler düşündün mü?* ";
    r_text[1] = " *Sadece hemcinsin ile ilişki yaşayacak olsan, bu gruptan kimle yapardın?* ";
    r_text[2] = " *Yaptığın şeyler yüzünden yada, konuşma şeklinden dolayı kendini “trans” olarak düşündün mü?* ";
    r_text[3] = " *Bu gruptan hemcinsin ile sevgili olsan kiminle olurdun?* ";
    r_text[4] = " *Gökkuşağı rengini severmisin?* ";
    r_text[5] = " *LGBT karakterlere sahip oyunları oynamaktan zevk alır mısın?* ";
    r_text[6] = " *1 Günlüğüne başka bir hemcinsine dönüşebilseydin bu kim olurdu?* ";
    r_text[7] = " *Arkadaşlarından sana göre kim daha çok LGBT biri olmaya daha yatkın?* ";
    r_text[8] = " *Dünyanın en zengin insanı olacaksın ama hemcins bir partnerin olacak yada fakirlikten kırılacaksın ama karşı cins bir partnerin olacak. Hangisini seçerdi?* ";
    r_text[9] = " *Hemcinsin ile yaşadığın her tek gecelik ilişkide 1 Milyon Dolar alacaksın. Ama bu para sadece 3 gün duracak. Birdaha almak için tekrar ilişkiye girermisin?* ";
    r_text[10] = " *Hiç kendini bu bedene ait olmadığını hissettiğin zaman oldu mu?* ";
    r_text[11] = " *Aşkını itiraf edicek olsan hangi hemcinsine bunu söylersin?* ";
    r_text[12] = " *Gökkuşağı renkli bir giysiyi giymekten çekinir misin?* ";
    r_text[13] = " *Sence normal ilişkimi yoksa hemcins ilişki mi daha zevkli?* ";
    r_text[14] = " *LGBT hakkında kötü düşünenler için sen ne düşünüyorsun?* ";
    r_text[15] = " *LGBT destekleyen kişileri sosyal medyadan takip edermisin?* ";
    r_text[16] = " *Sadece tek bir hemcinsin ile ilişki yaşayacaksan bu kim olurdu?* ";
    r_text[17] = " *Hiç kız/erkek olsam dedin mi?* ";
    r_text[18] = " *Karşı cins kıyafetlerini giymek ister misin? Sana yakışacağını düşünüyor musun?* ";
    r_text[19] = " *Hiçbir baskı olmasa ve %100 cinsiyet değiştirme ameliyatı olsa bunu yapar mıydın?* ";
    r_text[20] = " *Hemcinsinin giydiği hangi kıyafetler seni tahrik eder?* ";
    r_text[21] = " *Yıllardır en yakın arkadaşın ve herşeyiniz bir olan biri sana ilgi duymaya başladı. Onu hayatından çıkarır mısın?* ";
    r_text[22] = " *Hemcinsin sana aşkını itiraf etse ilk tepkin ve sonrasında ne olurdu?* ";
    r_text[23] = " *200 Lira karşılığında LGBT bayrağı olan bir hoodie’yi 1 günlüğüne giyer misin?* ";
    r_text[24] = " *1000 Lira karşılığında hemcinsin ile dudaktan öpüşür müsün? Üstelik bunu her yaptığında 1000 lira alacaksın. Daha da fazla yapar mısın?* ";
    r_text[25] = " *En yakın hemcins arkadaşın seni tahrik etmeye çalışıyor. Bunun olmasına izin verir misin?* ";
    r_text[26] = " *Hemcinsin ile aşırı ateşli bir ortam oluşturdunuz. Kontrolü kaybediyorsunuz.. Bundan zevk alıp akışına bırakır mısın yoksa DUR mu dersin?* ";
    r_text[27] = " *Karşı cinsinden aradığın aşkı ve sevgiyi hemcinsin sana çok daha fazlası ile veriyor. İkiniz için bir şansın olduğunu düşünür müsün?* ";

    var i = Math.floor(27*Math.random())

    await message.client.sendMessage(
        message.jid,
        `${r_text[i]}`,
         MessageType.text
    );

    }));
}
else if (cof.WORKTYPE == 'private') {
    Asena.addCommand({pattern: 'soru', fromMe: true, desc: SORU.none}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid, rep, MessageType.text);

        await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *İşte Sorun Geliyor..* 🤭 ', MessageType.text, {
            quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

        });

        await new Promise(r => setTimeout(r, 2100));

        var r_text = new Array ();
    r_text[0] = " *Telefonunda en son aradığın şey neydi?* ";
    r_text[1] = " *Birisi kız arkadaşın / erkek arkadaşından ayrılmak için sana 1 milyon tl önerseydi, yapar mıydın?* ";
    r_text[2] = " *Yerden bir şeyi alıp hiç yedin mi?* ";
    r_text[3] = " *Yılan, kurbağa gibi şeylerden yemek zorunda kaldın mı?* ";
    r_text[4] = " *Bir gün karşı cins olarak uyanırsan, ilk yapacağın şey nedir?* ";
    r_text[5] = " *Büyüyen hayali bir arkadaşınız var mıydı?* ";
    r_text[6] = " *En kötü alışkanlığınız nedir?* ";
    r_text[7] = " *Banyoda şarkı söyler misin?* ";
    r_text[8] = " *Toplumda en utanç verici anınız neydi?* ";
    r_text[9] = " *Aynada kendinle hiç konuştun mu?* ";
    r_text[10] = " *Web geçmişinizi, birileri görürse utanacağınız şey ne olurdu?* ";
    r_text[11] = " *Uykunda konuşur musun?* ";
    r_text[12] = " *Özelden sana yazan birine son attığın mesaj neydi?* ";
    r_text[13] = " *Söylediğiniz veya yaptığınız bir şeyi silmek için zamanda geriye gidebilseydiniz, bu ne olurdu?* ";
    r_text[14] = " *Yeniden doğmuş olsaydın, hangi yüz yılda doğmak isterdin?* ";
    r_text[15] = " *Hala yaptığın en çocukça şey nedir?* ";
    r_text[16] = " *Hangi çocuk filmini tekrar tekrar izleyebilirsin?* ";
    r_text[17] = " *Saçma takma adların var mı?* ";
    r_text[18] = " *Telefonunuzda hangi uygulamada en çok zaman harcıyorsunuz?* ";
    r_text[19] = " *Tek bir oturuşta yediğin en çok yemek ne?* ";
    r_text[20] = " *Tek başınayken dans ediyor musun?* ";
    r_text[21] = " *Karanlıktan korkar mısın?*" ;
    r_text[22] = " *Bütün gün evdeysen ne yapardın?*" ;
    r_text[23] = " *Günde kaç öz çekim yapıyorsunuz?*" ;
    r_text[24] = " *En son ne zaman dişlerini fırçaladın?*" ;
    r_text[25] = " *En sevdiğin pijamalar neye benziyor?*" ;
    r_text[26] = " *Yapmaman gereken bir şeyi yaparken hiç yakalandın mı? Eğer yakalandıysan yaptığın şey ne?*" ;
    r_text[27] = " *Vücudunun hangi bölümünü seviyorsun, hangi kısmından nefret ediyorsun?* ";
    r_text[28] = " *Hiç bitlendin mi?* ";
    r_text[29] = " *Pantolonunu moda için hiç kestin mi?* ";
    r_text[30] = " *Tabağını yalıyor musun?* ";
    r_text[31] = " *Kimsenin senin hakkında bilmediği bir şey varmı?* ";
    r_text[32] = " *Eğer bu gruptaki herkesi yanan bir binadan kurtarmaya çalışıyor olsaydın ve birini geride bırakmak zorunda kalırsan, kimi geride bırakırdın?* ";
    r_text[33] = " *Telefonda aradığın son şey neydi?* ";
    r_text[34] = " *Hiç asansörde gaz kaçırdın mı?* ";
    r_text[35] = " *Banyodayken yanlışlıkla hiç kimse içeri girdi mi?* ";
    r_text[36] = " *Bir günlüğüne karşı cins olsan ne yapardın?* ";
    r_text[37] = " *Hayatınızda bir şey değiştirebilseydiniz, ne olurdu?* ";
    r_text[38] = " *En büyük pişmanlığın nedir?* ";
    r_text[39] = " *Kimsenin bulamadığı kötü bir şey yaptınız mı?* ";
    r_text[40] = " *Telefonunuzdaki en utanç verici fotoğraf hangisidir?* ";
    r_text[41] = " *Şimdiye kadar gördüğünüz en korkunç rüya nedir?* ";
    r_text[42] = " *Çorabını değiştirirken ayağını koklar mısın?* ";
    r_text[43] = " *Bir ilişkinizdeki en büyük korkunuz nedir?* ";
    r_text[44] = " *Hiç yaşınız hakkında yalan söylediniz mi?* ";
    r_text[45] = " *En komik ilk randevunuz neydi?* ";
    r_text[46] = " *En garip alışkanlığın nedir?* ";
    r_text[47] = " *Kaç tane çocuk sahibi olmak istersiniz?* ";
    r_text[48] = " *Çocukluktaki lakabın neydi?* ";
    r_text[49] = " *En sevdiğiniz yemek nedir?* ";
    r_text[50] = " *Hayalindeki meslek ne?* ";
    r_text[51] = " *Bir adada 3 gün sıkışıp kalırsan, ne yaparsın?* ";
    r_text[52] = " *En sevdiğiniz kişi kimlerdir ve neden?* ";
    r_text[53] = " *İlk görüşte aşka inanır mısın?* ";
    r_text[54] = " *Aşka inanıyor musunuz?* ";
    r_text[55] = " *Şansınız olursa hangi ülkede yaşamak istersiniz?* ";
    r_text[56] = " *Hayalinizdeki düğün nedir?* ";
    r_text[57] = " *Şimdiye dek yaşadığınız en garip rüyayı açıklayabilir misiniz?* ";
    r_text[58] = " *En büyük pişmanlığın nedir?* ";
    r_text[59] = " *Saçını yıkamadan en uzun ne kadar süre bekledin?* ";
    r_text[60] = " *Herhangi bir ünlü ile evlenseydin, kim olurdu?* ";
    r_text[61] = " *Kaç tane erkek/kız arkadaşın oldu?* ";
    r_text[62] = " *Şu an sevgilin varmı?* ";
    r_text[63] = " *Şu an sevdiğin varmı?* ";
    r_text[64] = " *Vücudunun hangi bölümünü seviyorsun, hangi kısmından nefret ediyorsun?* ";
    r_text[65] = " *Aynada kendine hayran hayran bakar mısın?* ";
    r_text[66] = " *Hayran olduğun ünlü kim?* ";
    r_text[67] = " *Sevdiğiniz birinin önünde söylediğiniz veya yaptığınız en utanç verici şey nedir?* ";
    r_text[68] = " *Hayallerinizdeki insanla evleneceksin denilse, telefonsuz bir yıl geçirir miydiniz?* ";
    r_text[69] = " *Hayatınızın geri kalanında sadece tek bir saç modeli yapabilseydin, kıvırcık saçları mı yoksa düz saçları mı seçerdin?* ";
    r_text[70] = " *Senden daha kısa biriyle çıkar mısın?* ";
    r_text[71] = " *Aynaya uzun süre bakmak seni korkutur mu?* ";
    r_text[72] = " *Sevgilinle ilgili yaptığın en utanç verici şey nedir?* ";
    r_text[73] = " *Issız bir adada bu gruptan kimin mahsur kalmasını isterdiniz?* ";
    r_text[74] = " *Hiç terk edildin mi? Bunun nedeni neydi?* ";
    r_text[75] = " *Yapabilseydin kendin üzerinde değiştirebileceğin bir fiziksel özellik nedir?* ";
    r_text[76] = " *Hayatında yaptığın en doğru şey?* ";
    r_text[77] = " *Doğa üstü bi yetenek edinebilsen bu ne olurdu?* ";
    r_text[78] = " *Birine sevdiğini nasıl belli edersin?* ";
    r_text[79] = " *Çocukluğun nasıl geçti?* ";
    r_text[80] = " *Bi kelime üret ve ne anlama geldiğini söyle* ";
    r_text[81] = " *Mucizelere inanır mısın?* ";
    r_text[82] = " *Seni en çok ne sinirlendirir?* ";
    r_text[83] = " *Hayatta unutmadığın biri var mı?* ";
    r_text[84] = " *Dövme yaptırmak istesen ne yaptırırdın?* ";
    r_text[85] = " *Eğer bir zaman makinen olsaydı ve geçmişe gidip yaptığın tek bir şeyi silebilecek olsaydın, neyi silerdin?* ";
    r_text[86] = " *Seni ve sevgilini esir alsalar, ya onun canı ya senin canın deseler kimi seçerdin?* ";
    r_text[87] = " *Şekil değiştirme özelliğin olsaydı ilk neye dönüşürdün?* ";
    r_text[88] = " *Hiç sevgilin oldu mu?* ";
    r_text[89] = " *İnsanlardan uzak kalmayı sever misin?* ";
    r_text[90] = " *Gece mi Gündüz mü?* ";
    r_text[91] = " *İnsanların düşüncelerini okuyabilseydin ilk kiminkini okurdun?* ";
    r_text[92] = " *Senin için çok özel birine büyük bir yalan söyledin mi?* ";
    r_text[93] = " *Bu gruptan biriyle çıkmak istesen o kim olurdu?* ";
    r_text[94] = " *Sana göre bu gruptaki kim seni daha çok seviyor?* ";
    r_text[95] = " *Yanlız kaldığında ne tür hayaller kurarsın?* ";
    r_text[96] = " *Yağmurlu bir sonbahar akşamı mı yoksa karlı bir kış gecesimi?* ";
    r_text[97] = " *Bu grupta kendini kime daha yakın hissediyorsun?* ";
    r_text[98] = " *Bu gruptaki herkes tehlikede! Sadece bir kişiyi kurtarma şansın var. Diğer kalanlar %40 ihtimalle hayatta kalacaklar. Kimi kurtarırsın?* ";
    r_text[99] = " *Hiç sana aşkını itiraf eden birini reddettinmi? Ettiysen ismi ne?* ";
    r_text[100] = " *Sevgili mi kanka mı?* ";
    r_text[101] = " *İtiraf Vakti! Hiç daha önce birini aldattı mı?* ";
    r_text[102] = " *İtiraf Vakti! Hiç özelini başka biriyle paylaştın mı?* ";
    r_text[103] = " *İtiraf Vakti! Gece gizlice düşündüğün biri varmı? Varsa adı ne?* ";
    r_text[104] = " *İtiraf Vakti! Daha önce hiç aşkını kalbine gömdün mü?* ";
    r_text[105] = " *İtiraf Vakti! Bu grupta sana aşık olabilecek kimler var?* ";
    r_text[106] = " *İtiraf Vakti! Hayalindeki sevgili için en yakın arkadaşından vazgeçermisin?* ";
    r_text[107] = " *İtiraf Vakti! Bu grupta fizik ve çekicilik olarak en fazla beğendiğin kişi kim?* ";
    r_text[108] = " *Kapana Kısıldın! Çabuk cevap ver! Aileni terkedip en fazla arzuladığın kişinin yanına gitmek mi yoksa 40'ına kadar aile evinde oturmak mı?* ";
    r_text[109] = " *Kapana Kısıldın! Başına silah doğrultulmuş ve ya senin canın yada ailenin canı. Hangisini seçersin?* ";
    r_text[110] = " *Kapana Kısıldın! Çirkin ama zengin biriyle mi çıkmak istersin yada güzel ama fakir biriyle mi?* ";
    r_text[111] = " *Joker Soru! Bu soruya denk gelmek senin çok şanslı olduğunu gösterir. İşte sana sorum:\nAşk mı Para mı?* ";

    var i = Math.floor(112*Math.random())

    await message.client.sendMessage(
        message.jid,
        `${r_text[i]}`,
        MessageType.text
    );

    }));

    Asena.addCommand({pattern: 'zorsoru', fromMe: true, desc: SORU.zor}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,rep, MessageType.text);

        await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Senin İçin En Zor Soruları Seçiyorum..* 😈 ', MessageType.text, {
            quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

        });

        await new Promise(r => setTimeout(r, 2100));

        var r_text = new Array ();
    r_text[0] = " *Biriyle çıkarken yaptığın en utanç verici şey neydi?* ";
    r_text[1] = " *Toplu taşıma araçlarında yaptığın en çılgınca şey neydi?* ";
    r_text[2] = " *Şimdiye kadar bir başkasına söylediğin en acımasızca şey neydi?* ";
    r_text[3] = " *Hiçbir sonucu olmayacağını bilsen ne yapmak isterdin?* ";
    r_text[4] = " *Arkadaşlarınla yapmayı sevdiğin ama sevgilinin önünde asla yapmayacağın şey nedir?* ";
    r_text[5] = " *Bu hayatta en çok kimi kıskanıyorsun?* ";
    r_text[6] = " *Aşk için her şeyi yaparım ama “bunu” yapmam dediğin şey nedir?* ";
    r_text[7] = " *Çeşitli batıl inançların var mı? Varsa onlar neler?* ";
    r_text[8] = " *Sevdiğini itiraf etmekten utandığın film hangisidir?* ";
    r_text[9] = " *En utan verici kişisel bakım alışkanlığın nedir?* ";
    r_text[10] = " *Kimsenin bilmeyeceği garanti olsa kimi öldürmek isterdin?* ";
    r_text[11] = " *Başkası için aldığın en ucuz hediye nedir?* ";
    r_text[12] = " *Hiç toplum içinde çıplak kaldın mı?* ";
    r_text[13] = " *Hiç toplum içindeyken burnunu karıştırdın mı?* ";
    r_text[14] = " *Gece geç saatte yaptığın en utanç verici şey nedir?* ";
    r_text[15] = " *Çıplak olmak mı yoksa düşündüğün her şeyin tişörtünde yazması mı? Hangisini seçerdin?* ";
    r_text[16] = " *Hiç havuza işeyip hiçbir şey olmamış gibi davrandın mı?* ";
    r_text[17] = " *Sence bu grupta en kötü giyinen kişi kimdir?* ";
    r_text[18] = " *Bu odadaki insanlardan kiminle hayatını değiştirmek isterdin? Neden?* ";
    r_text[19] = " *Tuvalete oturduğun zaman ne düşünürsün?* ";
    r_text[20] = " *Yaptığında utanmana neden olan mahcup zevkin nedir?* ";
    r_text[21] = " *Burnunu karıştırır mısın?*" ;
    r_text[22] = " *En utanç verici anın neydi?*" ;
    r_text[23] = " *Hiç sınıfta yüksek sesle osurdun mu?*" ;
    r_text[24] = " *Hiç seksi bir fotoğrafını çekmeyi denedin mi?*" ;
    r_text[25] = " *Gizli aşkın kim?*" ;
    r_text[26] = " *Yapmaman gereken bir şeyi yaparken hiç yakalandın mı? Eğer yakalandıysan yaptığın şey ne?*" ;
    r_text[27] = " *Bu odadaki en seksi kişi sence kim?* ";
    r_text[28] = " *Mevcut sevgilinle evleneceğini düşünüyor musun?* ";
    r_text[29] = " *Kimsenin senin hakkında bilmediği şey nedir?* ";
    r_text[30] = " *Hiç izlememen gereken bir film izledin mi? İzlediysen adı ne?* ";
    r_text[31] = " *Yaptığın en yasa dışı şey neydi?* ";
    r_text[32] = " *Kardeşini 1 milyon TL karşılığında başka bir kardeşle değişir misin?* ";
    r_text[33] = " *Birden fazla kişiyle evlenme şansın olsa kimleri seçerdin?* ";
    r_text[34] = " *Sence bu gruptaki en kötü insan kim olabilir?* ";
    r_text[35] = " *Sevgilinden ayrılman için birisi sana 1 milyon TL verse ayrılır mıydın?* ";
    r_text[36] = " *Sevgilin seni hiç utandırdı mı? Utandırdıysa o nedir?* ";
    r_text[37] = " *Hiç sevgilini aldatmayı düşündün mü?* ";
    r_text[38] = " *Hiç birini gözetlerken yakalandın mı?* ";
    r_text[39] = " *Hiç burnunu karıştırırken yakalandın mı?* ";
    r_text[40] = " *Hiç sosyal medyada pişman olduğun bir şey paylaştın mı? Paylaştıysan konusu ne?* ";
    r_text[41] = " *Duşta işiyor musun?* ";
    r_text[42] = " *Çorabını değiştirirken ayağını koklar mısın?* ";
    r_text[43] = " *Hayatının en utanç verici anı neydi?* ";
    r_text[44] = " *Birisi sana dünyanın en zengini olmayı teklif etse bile asla yapmayacağın şey nedir?* ";
    r_text[45] = " *Bu gruptan kiminle sevgili olmak isterdin?* ";
    r_text[46] = " *Sence bu grupta yer alan ve en kötü sevgili olacak kişi kimdir?* ";
    r_text[47] = " *Hiç sevgilinin arkadaşına aşık oldun mu?* ";
    r_text[48] = " *Hayatında yaptığın en kaba şey neydi?* ";
    r_text[49] = " *Birine yaptığın en iğrenç şaka neydi?* ";
    r_text[50] = " *Sevgilinle yapmak istediğin en çılgınca şey nedir?* ";
    r_text[51] = " *Bir başkasından etkilenerek yaptığın en çılgınca şey neydi?* ";
    r_text[52] = " *Çıplak kalmak veya aklından geçenlerin kafanın üstünde yazması arasında bir seçim yapmak zorunda olsan hangisini seçerdin?* ";
    r_text[53] = " *Daha önce hiç sümüğünün tadına baktın mı?* ";
    r_text[54] = " *Tuvalette otururken düşündüğün bazı şeyler nelerdir?* ";
    r_text[55] = " *Bir parçası olduğun en utanç verici durum neydi?* ";
    r_text[56] = " *En utanç verici alışkanlığın nedir?* ";
    r_text[57] = " *Daha önce hiç altına işediğin oldu mu?* ";    
    r_text[58] = " *İnsanların içindeyken en utandığın an neydi?* ";
    r_text[59] = " *İnsanlara ters gelmesine rağmen yapmaktan en büyük keyif aldığın şey nedir?* ";
    r_text[60] = " *Gizliden gizliye ilgi duyduğun kişi kim?* ";
    r_text[61] = " *Görünümünü 1-10 arasında nasıl değerlendirirsin?* ";
    r_text[62] = " *Hiç yanlışlıkla bir arkadaşının sırrını ortaya çıkardın mı? Çıkardıysan o nedir?* ";
    r_text[63] = " *Şu anki kız arkadaşınla/erkek arkadaşınla evleneceğini düşünüyor musun?* ";
    r_text[64] = " *Hiç kulak kirinin tadına baktın mı?* ";
    r_text[65] = " *Hiç terinin tadına baktın mı?* ";   
    r_text[66] = " *Bu grupta yer alan ve tanıdığın en kötü kişi olduğuna inandığın kişi kim?* ";
    r_text[67] = " *Sevdiğiniz birinin önünde söylediğiniz veya yaptığınız en utanç verici şey nedir?* ";
    r_text[68] = " *Gerçek dışı olan en büyük korkun nedir?* ";
    r_text[69] = " *Aşık olduğun kişinin önünde en çok utandığın zaman ne zamandı?* ";
    r_text[70] = " *Yatağını en son ne zaman ıslattın?* ";
    r_text[71] = " *Kimsenin bilmediği en büyük sırrın nedir?* ";
    r_text[72] = " *Kendini seksi yapmak için ne yaparsın?* ";
    r_text[73] = " *Seni en çok ne tahrik eder?* ";
    r_text[74] = " *Başka birinin kız arkadaşıyla çıkabilecek olsaydın bu kim olurdu?* ";
    r_text[75] = " *Aşık olduğun kişiye sınır tanımadan bir mesaj gönderecek olsaydın bu ne olurdu?* ";
    r_text[76] = " *Bu gruptan bir kişiyle evlenmek isteseydin bu kim olurdu?* ";

    var i = Math.floor(77*Math.random())

    await message.client.sendMessage(
        message.jid,
        `${r_text[i]}`,
        MessageType.text
    );

    }));

    Asena.addCommand({pattern: '18soru', fromMe: true, desc: SORU.nsfw}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,rep, MessageType.text);

        await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' 💋 *Hazır mısın* 👅 ', MessageType.text, {
            quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

        });

        await new Promise(r => setTimeout(r, 2100));

        var r_text = new Array ();
    r_text[0] = " *Bu gruptan bir karşı cins ile yatmak isteseydin o kim olurdu?* ";
    r_text[1] = " *Önünde iki seçenek var, 1 yıl sex kölesi mi olmak istersin yoksa cinsel organına kötü bir ameliyat mı?* ";
    r_text[2] = " *Kendini çıplak hayal ediyormusun?* ";
    r_text[3] = " *Hangi ünlü ile sex yapmak isterdin?* ";
    r_text[4] = " *Seviştiğin en sıradışı yer neresi?* ";
    r_text[5] = " *En son ne zaman masturbasyon yaptın?* ";
    r_text[6] = " *Kendine dokunurken nasıl hissedersin?* ";
    r_text[7] = " *Hiç başka bir çifti seks yaparken izledin mi?* ";
    r_text[8] = " *Birinin sana söylediği en seksi şeyler neler?* ";
    r_text[9] = " *Hiç aynada kendi vücuduna uzun süre bakıp hayal kurdun mu?* ";
    r_text[10] = " *Hiç bir gecelik ilişki hikayen oldu mu?* ";
    r_text[11] = " *Hiç Nude attın mı?* ";
    r_text[12] = " *Hiç bir öğretmeninle ilgili fantezi kurdun mu?* ";
    r_text[13] = " *Zevk vermeyi mi almayı mı tercih edersin?* ";
    r_text[14] = " *Asla yapmayacağın bir cinsel aktivite söyle.* ";
    r_text[15] = " *Ergenken yaparken yakalandığın en müstehcen şey?* ";
    r_text[16] = " *Hayatında kaç tane cinsel partnerin oldu?* ";   
    r_text[17] = " *Sana ilk orgazmını kim yaşattı?* ";
    r_text[18] = " *Hiç birinin bekaretini bozdun mu?* ";
    r_text[19] = " *En sevdiğin porno türü ne?* ";
    r_text[20] = " *Hiç halka açık bir tuvalette mastürbasyon yaptın mı?* ";
    r_text[21] = " *Hiç bir seks oyuncağı kullandın mı?* ";
    r_text[22] = " *Hiç anal seks denedin mi?* ";
    r_text[23] = " *Vücuduna başkasının dokunması seni ateşlendirirmi?* ";
    r_text[24] = " *Birisinde cinsel olarak çekici bulduğun ilk şey nedir?* ";
    r_text[25] = " *Mastürbasyon yaptığın en garip yer neresiydi?* ";
    r_text[26] = " *Cinsel tercihin ne?*" ;
    r_text[27] = " *Seks arzun ne kadar yüksek?* ";
    r_text[28] = " *Sana şaplak atılmasını sever misin?* ";
    r_text[29] = " *Seni tahrik etmenin en kesin yolu nedir?* ";
    r_text[30] = " *Dirty talk sever misin?* ";
    r_text[31] = " *Üstte olmayı mı tercih edersin, altta olmayı mı?* ";
    r_text[32] = " *Birini orgazm yapmak için neresinden öpersin?* ";
    r_text[33] = " *Karşı cinsi nasıl orgazm yaparsın?* ";
    r_text[34] = " *İlk öpücüğünü açıkla.* ";
    r_text[35] = " *Kaç kişiyle seks yaptın?* ";
    r_text[36] = " *Sexting’i ilk kiminle yaptın? İyi miydi?* ";
    r_text[37] = " *Hiç seks yaparken yakalandın mı?* ";
    r_text[38] = " *Penisin ya da vajinan olsa ilk ne yapardın?* ";
    r_text[39] = " *Bugüne kadar cinsellik hakkında düşüncen nedir?* ";
    r_text[40] = " *Vücudundan memnun musun?* ";
    r_text[41] = " *Eğer erkeksen penisinin boyutunu ve şeklini açıkla. Bundan memnun musun?* ";
    r_text[42] = " *Kendi spermini tattın mı? Beğendin mi?* ";
    r_text[43] = " *En sıradışı / tabu fantezilerini tarif et.* ";
    r_text[44] = " *Hayalini kurduğun en garip kişi kim?* ";
    r_text[45] = " *Mastürbasyon yaparken hep hayal kurar mısın?* ";
    r_text[46] = " *En garip alışkanlığın nedir?* ";
    r_text[47] = " *Utandığın herhangi bir fikrin var mı? Varsa nedir?* ";
    r_text[48] = " *Boşalırken ne hissediyorsun?* ";
    r_text[49] = " *Boşalırken hiç fışkırıyor musun?* ";
    r_text[50] = " *Cinsel organına dokunmadan orgazm olabilir misin?* ";
    r_text[51] = " *Meme uçların ne kadar hassas? Meme ucunla oynar mısın?* ";
    r_text[52] = " *Başka bir kişiyle ya da mastürbasyon yoluyla orgazm yapmayı daha kolay buluyor musun?* ";
    r_text[53] = " *Hard veya soft bir temastan hangisiyle daha kolay boşalırsın?* ";
    r_text[54] = " *Sevgilinle ilgili yaptığın en utanç verici şey nedir?* ";
    r_text[55] = " *Bu Soruyu Cevaplamak Zorundasın!*\nSevglinin seni tahrik eden en sexy yeri neresidir?* ";
    r_text[56] = " *Bu Soruyu Cevaplamak Zorundasın!*\nSana en yakın karşı cins kuzenin ile sex yapmak istedin mi?* ";
    r_text[57] = " *Bu Soruyu Cevaplamak Zorundasın!*\nBu gruptaki karşı cins birini çıplak görme şansın var! Kimi görmek isterdin?* ";
    r_text[58] = " *Bu Soruyu Cevaplamak Zorundasın!*\nMazoşist ve sexy bir sevgili ile ateşli geceler geçirmek mi yoksa sıradan ve sana göre çok daha az sexy biri ile ateşli geceler geçirmek mi?* ";
    r_text[59] = " *Bu Soruyu Cevaplamak Zorundasın!*\nBu gruptaki birinin nude fotoğrafını görebileceksin ama 1 ay mastürbasyon yapmayacaksın. Yinede görmek ister miydin?* ";
    r_text[60] = " *Bu Soruyu Cevaplamak Zorundasın!*\nErkekler için; Tek gecelik ilişki hakkın ve önünde iki seçenek var: Lana Rhoads mu Barabara Palvin mi\nKızlar İçin; Johnny Sins mi Jordi mi?* ";
    r_text[61] = " *Bu Soruyu Cevaplamak Zorundasın!*\nBu gruptan kimle gelecek vaat eden hayaller kurdun?* ";
    r_text[62] = " *Bu Soruyu Cevaplamak Zorundasın!*\nSana nerdeyse insan kadar gerçekçi ve aşırı sexy bir robot verecekler ama ayda sadece 1 kez ilişkiye girebileceksin yada orta çekicilik düzeyinde bir insan ile istediğin zaman sex yapabileceksin. Hangisini seçerdin? ";
    r_text[63] = " *Bu Soruyu Cevaplamak Zorundasın!*\nHayalindeki öpüşme sahnesi ve kimle yapmak istediğini açıkla. ";
    r_text[64] = " *Bu Soruyu Cevaplamak Zorundasın!*\nHiç beklemediğin bir orgazm oldu mu? ";
    r_text[65] = " *Bu Soruyu Cevaplamak Zorundasın!*\nAynı anda birden fazla kişi tarafından etkilendin mi? ";

    var i = Math.floor(66*Math.random())

    await message.client.sendMessage(
        message.jid,
        `${r_text[i]}`,
        MessageType.text
    );

    }));

    Asena.addCommand({pattern: 'lgbtsoru', fromMe: true, desc: SORU.lgbt}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,rep, MessageType.text);

        await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Sorun Geliyor..* 🏳️‍🌈 ', MessageType.text, {
            quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
        });

        await new Promise(r => setTimeout(r, 2100));

        var r_text = new Array ();
    r_text[0] = " *Hiç hemcinsin ile ilgili +18 şeyler düşündün mü?* ";
    r_text[1] = " *Sadece hemcinsin ile ilişki yaşayacak olsan, bu gruptan kimle yapardın?* ";
    r_text[2] = " *Yaptığın şeyler yüzünden yada, konuşma şeklinden dolayı kendini “trans” olarak düşündün mü?* ";
    r_text[3] = " *Bu gruptan hemcinsin ile sevgili olsan kiminle olurdun?* ";
    r_text[4] = " *Gökkuşağı rengini severmisin?* ";
    r_text[5] = " *LGBT karakterlere sahip oyunları oynamaktan zevk alır mısın?* ";
    r_text[6] = " *1 Günlüğüne başka bir hemcinsine dönüşebilseydin bu kim olurdu?* ";
    r_text[7] = " *Arkadaşlarından sana göre kim daha çok LGBT biri olmaya daha yatkın?* ";
    r_text[8] = " *Dünyanın en zengin insanı olacaksın ama hemcins bir partnerin olacak yada fakirlikten kırılacaksın ama karşı cins bir partnerin olacak. Hangisini seçerdi?* ";
    r_text[9] = " *Hemcinsin ile yaşadığın her tek gecelik ilişkide 1 Milyon Dolar alacaksın. Ama bu para sadece 3 gün duracak. Birdaha almak için tekrar ilişkiye girermisin?* ";
    r_text[10] = " *Hiç kendini bu bedene ait olmadığını hissettiğin zaman oldu mu?* ";
    r_text[11] = " *Aşkını itiraf edicek olsan hangi hemcinsine bunu söylersin?* ";
    r_text[12] = " *Gökkuşağı renkli bir giysiyi giymekten çekinir misin?* ";
    r_text[13] = " *Sence normal ilişkimi yoksa hemcins ilişki mi daha zevkli?* ";
    r_text[14] = " *LGBT hakkında kötü düşünenler için sen ne düşünüyorsun?* ";
    r_text[15] = " *LGBT destekleyen kişileri sosyal medyadan takip edermisin?* ";
    r_text[16] = " *Sadece tek bir hemcinsin ile ilişki yaşayacaksan bu kim olurdu?* ";
    r_text[17] = " *Hiç kız/erkek olsam dedin mi?* ";
    r_text[18] = " *Karşı cins kıyafetlerini giymek ister misin? Sana yakışacağını düşünüyor musun?* ";
    r_text[19] = " *Hiçbir baskı olmasa ve %100 cinsiyet değiştirme ameliyatı olsa bunu yapar mıydın?* ";
    r_text[20] = " *Hemcinsinin giydiği hangi kıyafetler seni tahrik eder?* ";
    r_text[21] = " *Yıllardır en yakın arkadaşın ve herşeyiniz bir olan biri sana ilgi duymaya başladı. Onu hayatından çıkarır mısın?* ";
    r_text[22] = " *Hemcinsin sana aşkını itiraf etse ilk tepkin ve sonrasında ne olurdu?* ";
    r_text[23] = " *200 Lira karşılığında LGBT bayrağı olan bir hoodie’yi 1 günlüğüne giyer misin?* ";
    r_text[24] = " *1000 Lira karşılığında hemcinsin ile dudaktan öpüşür müsün? Üstelik bunu her yaptığında 1000 lira alacaksın. Daha da fazla yapar mısın?* ";
    r_text[25] = " *En yakın hemcins arkadaşın seni tahrik etmeye çalışıyor. Bunun olmasına izin verir misin?* ";
    r_text[26] = " *Hemcinsin ile aşırı ateşli bir ortam oluşturdunuz. Kontrolü kaybediyorsunuz.. Bundan zevk alıp akışına bırakır mısın yoksa DUR mu dersin?* ";
    r_text[27] = " *Karşı cinsinden aradığın aşkı ve sevgiyi hemcinsin sana çok daha fazlası ile veriyor. İkiniz için bir şansın olduğunu düşünür müsün?* ";

    var i = Math.floor(27*Math.random())

    await message.client.sendMessage(
        message.jid,
        `${r_text[i]}`,
         MessageType.text
    );

    }));
}
