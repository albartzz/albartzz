

# Codded by @DevXenon
# We can remake revolution! 

#Special Thanks:
# @APH3LIOS ❤️
# @HerzlT
# @cocukmusunaqetiketlemesene
# @afrodityas2


from telethon import events
import asyncio
from userbot.events import register
from random import choice
from userbot.cmdhelp import CmdHelp
import os

#################### INTERNAL WORDS ####################

KUZEY = ['`Lan manyağaam` 😠' , '`O Ferhata söyle benim manyak olduğumu unutmasın`' , '`Ayıp değil mi lan utanmıyor musunuz ferhat abinizin mektubunu okumaya ?`' , '`Gel, gel buraya gel, senle şöyle bir konuşalım gel`' , '`Gel, gel şöyle gel`' , '`Bekle ecelin geliyor beklee..`' , '`Geri bas lan!`' , '`Gecem sen ol istiyorum gündüzüm sen ol istiyorum.`' , '`Simay benim karım lan`' , '`Neye bakıyon lan kurabiye var simit var neye bakıyon`' , '`Merak etme baba.`' , '`Gel aslan gel`' , '`Kırarım belini`' , '`Bi sıkıntı yok merak etme`' , '`Ayıbın kolları kayıp`' , '`Senin o bıyığını sikecem ben ama sen rahat ol`' , '`Kardeşimin emaneti lan o.. Namusum o lan benim!`' , '`Sana sırtımı döndüm lan ben! Düşmanım yapmadı senin yaptığını şerefsiz!.. Demet yetmedi, Simayı da mı sıraya koydun lan`' , '`Tırnaksız`' , '`Maraba`' , '`Caz yapma skerim belanı`' , '`Amk zıbzıbı`' , '`Keçii`' , '`Aliiğğğ`' , '`Te Allahım ya`' , '`Panda panda`' , '`Sırıtma lan`' , '`Ne yaylana yaylana konuşuyon yarram`' , '`Lan Farat`' , '`Benim için önemli lan benim için önemli!`' , '`Aleykümselaaaam aleykümselam`' , '`Olum soğuk lan burası`' , '`Al o parayı dür bük, ananın amına sok`' , '`Ne bakıyon kurabiye var simit var ne bakıyon!`' , '`Lan Manyağaam!`' , '`Ferad ananı siktim ferad`' , '`Bak güney, bak tırnaksız. seni daha taze dövdüm. senin ağzını burnunu kırarım laflarına dikkat et.`' , '`Çok mutluyum. çünkü seni tamamen çıkardım attım aklımdan. rüyalarımdan bile çıkardım.`' , '`Ya ananı avradını sikiyim burdayım, görmüyon mu?`' , '`Beni dinle bak, benim belki ağzım bozuk olabilir ama içim tertemiz!`']

KARDES = ['`Ulan milletin babası sabahın köründe kalkar 4 rekât namaz… Hadi bizimkisi sünneti kılmasın 2 rekât namaz eda eder. Bizimkisi kim bilir neyin peşinde abi.`' , '`Bir senin gülümsemen, bir de boş metrobüs koltuğu.`' , '`Bu neymiş bee allah belanızı versin! bu ne olum sen manyak mısın sen bunları nasıl yedin petito sen tesisatçılığı bırak git game of thrones a ejderha yazıl metin!`' , '`Sen zaten faydalı birşey olsaydın ben seni vücudumdan atmazdım.`' , '`Eda seni ilk gördüm dedim ki; ulan ne karılar var beee!`' , '`Aaa! bu benim canım, ciğerim, kirvem metin değil mi ya o?`' , '`Allah belanı versin. Senin tipini sikeyim ben geldi yine orrspuu çocuğuu.`' , '`Eğer böyle fikirlerin varsa ve paran yoksa deli diyorlar; paran varsa girişimci oluyorsun. bir de böyle düşün.`' , '`Amca senin ben *mına koyiyim, elim ayağım birbirine dolaştı, çalsana kapıyı!`' , '`Sana oksijen veren ağacın yaprağını sikeyim`' , '`Sana kuvvet uygulayan yerin çekimini sikeyim`' , '`Ne kadar teklif etmişler? Koy amına sat gitsin. Sat, sat, sat, sat, sat koy amına!`' , '`Dalağını sikerim senin ha!`' , '`Off, seveydi iyiydi yaa!`' , '`Bak bak, benimle konuşurken yüzüme bakın azcık ya`' , '`Ölünüzü yıkayan imam putperest olur yeminle`' , '`No Woman, No Cry; Yani "kadınım söyle hiç mutlu oldun mu, bu deli yiğidoyu unuttun mu?`' , '`Ulan Sasha Greye döndük ağzımızda bi sex topu eksik`' , '`Abicim gözünün çapağını yiyeyim, 8 tane kardeşim yurtdışında okutuyorum...`' , '`Benim Danimarka prensesi ile bizzat oturup kaşarlı dürüm gömmüşlüğüm var.`' , '`Herifin geçmişi bir ergenin internet geçmişinden bile kirli. History’i sil seçeneğine tıklıyorum bilgisayar kasılıyor.`' , '`Oha adam ışınlanmayı buldu.`' , '`Ben ilk defa dansöz görücem, bu para takma olayını bana bir anlatsanız..`' , '`Senin gibi abim olsa genlerime küserim, anama babama hakaret davası açarım. Çık git lan burdan çık git!`' , '`Her zaman senin de dediğin gibi, “happy birthday to you, gansta.” Yani “sana gelmediğim gün, öldüğüm gündür gülüm.”`' , 'İstiyorum amına koyayım sanane!`' , 'Benim aylık gelirim tamı tamına 100 lira. Giderlerim ise sadece 98 lira 78 kuruş. Benim bu hayatta kaybedecek hiçbir şeyim yok. Beni bu hayata bağlayan bişey de yok.`']

DOKTOR = ['`Bir tek sen güldün ne güzel güldün...`' , '`Bana sarılamasan da ellerimi tutamasan da gözlerimin içine bakamasan da, varım ben.`' , '`Hayat bazı kararsızlıklar için çok kısa.`' , '`Bi kere kaybettim abimi ,bi daha mı kaybedecem,yazık  değil mi bana?`' , '`Bazı insanlar bu dünyaya şifa olmak için gelir.`' , '`Dur, koşma koşma dur. Koş lan.`' , '`Sen benim hayatımda tanıdığım en yaratıcı, en akıllı adamsın`' , '`Başkalarının kalbini anlıyorum ama kendi kalbime bir çare bulamıyorum.`' , '`Bir gittim hoop öptü ben artık kimseye dokunamam`' , '`Sevmek dokunmakmıdır?`' , '`Tutardım bana dokunan eli. Sımsıkı tutardım. Bırakmazdım`' , '`Korksak da ağlasak da kendi ayaklarımız üzerinde duracağız düşeceğiz ama kalkacağız büyüyeceğiz..`' , '`Beraber alışalım mı?`' , '`Olan oldu hiçbir şeyi değiştiremem ki`' , '`Çok etkili bi konuşma yaptım galiba`' , '`Aynı, kar yağdığında zıplayan köpek yavrusu gibi. Siz onun mutluluktan zıpladığını sanırsınız ama o ayakları üşüdüğü için zıplar...`' , '`İnsanlar hayallerine tutunmalı.`' , '`Göz bebeklerim büyüyor. Avuçlarım terli. Eyvah!!!`' , '`Müthiş!`' , '`Çocuk!`' , '`Sen beni mutlu edicek bir şey yaptın. Ben seni mutlu edicek bir şey yaptım. Şimdi sıra sende`' , '`Birini çok sevince, öldü diye unutamazsın onu.`' , '`Bana napmış olursan ol ben senin canını acıtamam.`' , '`İkinci bir şans. Ne kadar kullanıyorsunuz bu lafı.. Herkes ikinci bir şansın peşinde ama kimse birinciyi düzeltmeye çalışmıyor.`' , '`Söyle bakalım ne yapabilirim senin hayatını kolaylaştırmak için?`' , '`Eğer istersen her şeyi başarabilirsin!`' , '`İnsanları dinle ama imkansıza da inan.`' , '`Yaşamımız boyunca 95 litre gözyaşı dökeriz, daha çok var ağlayabilirsin`']

THANOS = ['`İşim bittiğinde, insanlığın yarısı hala var olacak. Her şeyin olması gerektiği gibi mükemmel dengelenmiş. Umarım seni hatırlarlar.`' , '`Tüm fetih, şiddet, katliam yıllarımda asla kişisel değildi. Ama şimdi size anlatacağım, inatçı, sinir bozucu küçük gezegeninize ne yapmak üzereyim… Zevk alacağım. Çok çok fazla.`' , '`Küçük olan, basit bir hesap. Bu evren sonludur, kaynakları sınırlıdır. Hayat kontrolsüz bırakılırsa, yaşam sona erecektir. Düzeltilmesi gerekiyor.`' , '`Sonunda dinleniyorum ve güneşin doğuşunu minnettar bir evrende izliyorum. En zor seçimler en güçlü iradeleri gerektirir.`' , '`Kelimelerini akıllıca seçmelisin.`' , '`Bu evreni son atomuna kadar parçalayacağım ve sonra benim için topladığın taşlarla yeni bir tane yaratacağım. Kaybedilen şey değil, sadece ona minnettar bir evren verildiği şeydir.`' , '`İş bitti. Kazandım. Ne yapmak üzereyim, bundan keyif alacağım. Çok çok fazla!`' , '`Kalbimde, hala umursadığını biliyordum. Ama kimse kesin olarak bilmiyor. Gerçeklik genellikle hayal kırıklığı yaratır.`' , '`Güçlüsün. Ben… Sen cömertsin. Ben… Ama sana asla yalan söylemeyi öğretmedim. Bu yüzden bu konuda çok kötüsün. Ruh Taşı nerede?`' , '`Güçlüsün. Ama parmaklarımı çektim ve hepiniz var olmaktan vazgeçersiniz.`' , '`Kaybetmenin nasıl bir şey olduğunu biliyorum. Haklı olduğunuzu ümitsiz hissetmek, yine de başarısız olmaktır.`' , '`Bugün, bildiğinden daha fazlasını kaybettim. Ama şimdi yas tutmanın vakti yok. Şimdi hiç zaman yok.`' , '`Korkun. Ondan kaç. Kader hala geliyor. Yoksa söylemem gerekir mi?`' , '`Hapse mahkum olurum! Gurur: benim tek ölümcül kusurum.`' , '`Ben... kaçınılmazım.`' , '`Rastgele. Ahlaksız, adil. Zengin ve fakir aynı. Bana deli dediler. Ve tahmin ettiğim gibi, geçmeye geldi.`' , '`Aç yatacaktın, hurdaya fırlamıştın. Gezegeniniz çöküşün eşiğinde idi. Bunu durduran benim. O zamandan beri ne oldu biliyor musun? Doğan çocuklar tam karın ve berrak gökyüzü dışında hiçbir şey bilmiyorlar. Bu bir cennet.`' , 'Hiçbir şey yapmamak; sıkışıp kalarak, açlık çekerek, günah içinde yuvarlanarak Dantenin cehennemine kucak açmaktır. Ve ben de cesaretle eyleme geçtim. Kimileri dehşetle bakacaktır; ama kurtuluşun bir bedeli vardır. Dünya bir gün fedakârlığımın güzelliğine kavrayacaktır. Çünkü ben sizin kurtuluşunuzum. Ben Gölgeyim. Ben insanlık sonrası çağının kapısıyım.`' , '`Yaratılıştaki bütün varlıkların kendilerine ait dökülebilecek kanları vardır. Ve kimsenin onlara başkalarınınkini dökebileceklerini öğretmesi gerekmez. Hepsi bunu doğuştan bilir. Nefes almayı bildikleri gibi!`' , '`Tüm savaşlar daha ilk darbe vurulmadan kazanılır ya da kaybedilir. Uygulama kısmı ise yalnızca formalitedir.`' , '`Sonunda dinleniyorum ve minnettar bir evrende güneşin doğuşunu izliyorum. En zor seçimler, en güçlü iradeleri gerektirir.`' , '`Kaderimi bir kere reddettim, bir daha olmasına izin veremem!`' , '`Ben senin güvenini istemedim. Sadece itaatini istiyorum.`']

GOT = ['`Güçlüler, her zaman güçsüzü avlamıştır. En başından bu şekilde güçlü olmuşlardır.`' , '`Bir daha bana kız kardeşim dersen seni uykunda boğdurturum.`' , '`Sana bir tavsiye vereyim, piç. Ne olduğunu asla unutma. Dünyanın geri kalanı unutmayacak. Onu zırh gibi giy, böylece seni incitmek için kullanamasınlar.`' , '`Benim işim bu. İçerim ve bir şeyler bilirim.`' , '`Bir aslan, bir koyunun düşünceleriyle kendini meşgul etmez.`' , '`Güç, insanlar nerede olduğuna inanıyorsa orada bulunur. Bu bir aldatmaca. Duvardaki bir gölge. Ve küçücük bir adam, kocaman bir gölge yaratır.`' , '`Bana bir daha elini kaldırdığın an, bu ellerini son görüşün olur.`' , '`Kaos bir çukur değil. Kaos bir merdiven. Tırmanmaya çalışan çoğu başarısız olur ve bir daha deneme fırsatı olmaz. Düşüş onları yıkar. Kimisine tırmanma fırsatı verilir; onlar da ya gerçeğe ya tanrılara ya da sevgiye tutunur. Yalnızca merdiven gerçektir. Ortada olan tek şey tırmanıştır.`' , '`Tahtların oyununu oynadığında, ya kazanırsın ya da ölürsün.`' , '`Baratheon Hanesinden Renlynin adına, isminin birincisi, Andalların ve İlk İnsanların gerçek kralı, Yedi Krallık Lordu ve ülkenin koruyucusu, ben, Brienne of Tarth, seni ölüme mahkum ediyorum.`' , '`Bunun mutlu sona ulaşacağını düşünüyorsan dikkatini yeteri kadar vermemişsin demektir.`' , '`Nasıl bir kılıcın bileme taşına ihtiyacı varsa bir aklın da kitaplara ihtiyacı var. Bu yüzden bu kadar çok okuyorum.`' , '`Kış Geliyoor`' , '`Aşk için yaptığım şeyler...`' , '`Gece karanlık ve dehşetle dolu`' , '`Yalnızca bir tanrı var ve adı Ölüm. Ölüme tek bir şey söyleyebiliriz, o da “Bugün değil.”`' , '`İyi sıçmalar`' , '`Fuck The King`' , '`Kuzey Unutmaz!`']

COD = ['`Whoever said the pen is mightier than the sword obviously never encountered automatic weapons.`' , '`In war, Truth is the first casaulty!`' , '`When the pin is pulled, Mr Grenade is not our friend.`' , '`If the enemy is in range, So are you.`' , '`If Your attack is going too well, you are walking into anambush.`' , '`All wars are civil wars, because all men are brothers..`' , '`Nobody makes the first jump`' , '`Bravo Six, Going Dark`' , '`Never in the field of human conflict was so much owed by so many to so few.`' , '`We didnt come here to lose!`' , '`Good job team!`' , '`We’ve taken the lead!`' , '`We’re in danger of losing this one!`']

ZULA = ['`Kasap!`' , '`Seri Katil!`' , '`Kelle Avcısı!`' , '`İntikam!`' , '`Aranıyorsun!`' , '`Tam Kafadan!`' , '`Hadi hadi hadi!`' , '`Zula Kazandı!`' , '`Gladyo Kazandı!`' , '`İki Kişi!`' , '`Üç Kişi!`' , '`Keskin Nişancı!`' , '`Bomba İmha Edildi!`' , '`Güzel Atış!`' , '`Bomba Kuruldu!`' , '`Lider Katili!`' , '`Son Saniye!`' , '`Tek kişi kaldı!`' , '`Hazırlan!`' , '`Bombaa!`']

RAMIZ = ['Bazı insanları kırmak gerekir yeğen, aslında kim olduklarını görmek için...' , 'Acı çekmiş hiç kimse, artık eskisi gibi değildir.' , 'Bir insanı yalanlarla kazanmak yerine, doğrularla kaybetmeyi tercih ederim.' , 'Ağlaya ağlaya geldiğin dünyada, güle oynaya yaşayacağını mı sandın yeğen?' , 'Bazen sırf hayatımızda kalmalarını istediğimiz için insanları affedersiniz.' , 'Ben senin için boşa kürek çektiğimi, sen bir başka bir gemiye bindiğinde de anladım.' , 'Oyunun sonuna geldiğinde, çoktan tükenmiştir gidecek olduğun yerlerin.' , 'Öldürmek için gelen öldürmeden dönebilir ama ölmek için gelen... Ölmeden dönmez.' , 'Yaptıkları ile küçülenler, laflarıyla büyüdüklerini sanmasınlar.' , 'Seni önceden saçma sapan sevmişler Selma benimkisi ağır geldi tabi...' , 'Sözler verilir sözler unutulur ama gün gelir ihanet eden sadakat ister.' , 'Ara sıra kenara çekilip seyretmek lazım yeğen… Bakmak lazım kimde ne kadarız ve kim bizde ne kadar...' , 'Bir insan ne kadar merhametliyse o kadar kazık yer yeğen.' , 'Daha önce acı çekmiş biriyle birlikte olun. Çünkü onlar mutluluğun değerini daha iyi bilirler.' , 'Elinden bir şey gelmeyince kabullenmek kolaydır.' , 'Kim kazanmışki ben kazanacaktım seni bu şehri.' , 'Bir hata, gözden kaçan bir söz; her şeyi kaybetmektir.' , 'Delikanlı adamın silahı yüreğidir,oda tutukluk yapmaz..' , 'Kiminle güldüğünü belki unutabilirsin,ama kiminle ağladığını asla!' , 'Sadakat sır saklamak mıdır? Sessiz kalmak mıdır? Kıyametin kopacağını bile bile.' , 'Kaygılanma çocuk, herkes ölür! Kimi toprağa, kimi yüreğe gömülür.' , 'Herkesin bir geçmişi vardır, bir de geçmemişi.' , 'Seni ölüme götürse de, doğrudan asla şaşmayacaksın.' , 'Portakalı soymadan içinin iyi olup olmadığını anlayamazsın.' , 'Bazen sevdiğin insanları korumanın tek yolu onlardan uzak durmaktır...' , 'Gerçek niyetini kimse bilmeyecek.Kaderin sırrındır kaderini kimseyle paylaşmayacaksın...' , 'Artık kaybedecek hiçbir şeyinin kalmaması, özgürlük olsa gerek.' , 'Uykun gelmiyor diye gözlerini suçlama, Belkide o beklediğin uyku değildir.' , 'Dön bak arkana yeğen. Gitmez” dediğin kaç kişi yanında?' , 'Sen ağaç baltaya ne demiş bilirmisin kardeş? Ben senin beni kestiğine değil, sapının benden olduğuna üzülüyorum!']

NO1 = ['Sokaklar tekin değil gezdim elim cebimde, rehberim rap içindeyim çemberin bir şekilde.' , 'Susuzluğumu alkol dindirebilir.' , 'Pes etmedim fakat herşey eskisinden farklı.' , 'Mutlu gibi davranırım onun yüzü gülsün..' , 'Hiçbi melek ölmez ama sen bi kere dirilmedin.' , 'Çok umutlu görünmeyi inan çok unuttum.' , 'Hangi tepeden bakarsan bak değişmez manzara.' , 'Sikik düzenin içinde üzülmeye doyamadım.' , 'Sesin kesilirse gözlerin anlatır mı herşeyi?' , 'Hayatım kumar bayım, çok fazla zarardayım..' , 'Kimseye anlatamadım derdimi.' , 'Hiç ışık yok farkındayım...' , 'Sikik hesaplar peşinde bütün bildiklerim.' , 'Dinle sakın düşme dostum ışıkların peşine.' , 'Kıyasla, bak aynaya kim daha çok hasta.' , 'Yanlışım tamamda neden tek doğrunuz buydu?' , 'Neler gerekliydi biraz gülümsemek için?' , 'Sevdiğim her kadın öldü rakı masasında.' , 'Sönüp giden tebessümü esrarla mı dirilttin?' , 'Umutlarımı söndürüp ışıkları yaktım.' , 'Dilenmeyi reddeden bi tinerciden dahası..' , 'Masum bu ruhumda bıraktığın izler..' , 'Biz öldük ama ben yaşıyorum.' , 'Unutursun sevdiğine sarılmayı dayı.' , 'Annem kafamda kırıcak elimdeki şişeyi.' , 'Biz bu gece uyumadık gün size günaydı.' , 'Ölmek için yaşamaktan daha çok çaba sarfettim.' , 'Burda tramvay yok gençliğim travma.' , 'Sonra öl ve hep rahat kal.' , 'Herşey yolunda değil, sadece sen yolundasın.']

LİA = ['Hiçkimsemiz yok aden.' ,'Tanrım bu sürmeli sonsuza dek.' , 'Değilim iyimser, olamam iyi de.' , 'Çöküyor üzerime yine geceler.' , 'Üzgünüm anne erken eve dönemem.' , 'Çok uzağım evimden.' 'Hep benden bahseder bi’ numara dediklerin.' , 'Alçaktan geliyorum bunu bilmelisiniz.' , 'Dostlarım yanımdayken sınayın beni.' , 'Baba bak yapıyorum senin gibi kariyer.' , 'Diziyorum paraları sikik şehir labirent.' , 'Merhaba orospu çocukları ölümsüzüm ben.' , 'Beni bloklayamaz havalı kadınlar.' , 'Uçuyoruz biz hala yakalayan yok.' , 'Beni alt etmeye çalışma çünkü bi bok değilsin.' , 'Eziklerle takılmam bi mücevher gibiyim.' , 'Artık edemiyorum gecene eşlik.' , 'Birileri geldi ve değiştin!' , 'Bilmiyorum tüm gece ne içtim' , 'Ben bi tek kendime yenildim.' , 'Sen olduğun gibi değilsin bak.' , 'Dostlarım oldukları gibi kalmadılar.' , 'Söylesene çalışıyosun kim olmaya?' , 'Bu sen değilsin inan!' , 'Genç ölebilirim bak.' , 'Kızım tut çekiyor aşk.' , 'Aklımı kaybedemem bida.' , 'Bi kez kendine dürüst ol mesela!' , 'Git yalnız kalplerin içinde yaşa!' , 'Hiç kimse sana ben gibi bakmaz..' , 'Yıldızlar bizim için yağıyor düşmekten korkma.' , 'Masal anlatma bana!' , 'Heartbreaker' , 'İhtiyacım olan bu değil..' , 'Seni tanıyamıyorum hiç.' , 'Önceden bi kalbe sahiptin.' , 'Bir süre daha kal inan bana değilim kendimde.' , 'Beraber başarabiliriz!' , 'Bu kez kazanıyoruz tut elimden.' , 'Şehrin ışıkları yanıyo yeniden!' , 'Bi an önce son hamleni yap.' , 'İzin veriyorum oyun oynamana.' , 'Kaygı dolu adamlara git şovunu yap!' , 'Varmı içinde kalp?' , 'Kızım başaramıcaksın vurulmayla ölmem!' , 'Sen gidersen eğer hikayemiz yarım kalır.' , 'Kaçamam bi sürü dert!' , 'Bi kazananı yoksa niye savaşıyoruz?']

RECEP = ['Ekinler baş vermeden kör buzağı topallamazmış.' , 'Hocam sana gafam girsin.' , 'Hepimiz kalorilerimizi yakalım, göbeklerden kurtulalım.' , 'Ne bahıyon?' , 'Sen suya düşsen hiç batmazsın biliyo musun. Neden, çünkü senin tipin kayık.' , 'Bu ne saçma hayat, bu ne serkeş hayat, bu ne dingil hayat ya? Bu ne kopuk hayat, bu ne manyak yaşam tarzı ya, bu ne bohemi ya?' , 'Gonuşma lan!' , 'Kadının yaşı, erkeğin maaşı sorulmaz koçuum. Biraz yol yordam öğren dingil!' , 'Sende sinsilik var yanıma 5 metreden fazla yakalaşma!' , 'Senin içine bi şey kaçmış yavrum, ortasında “i” harfi var.' , 'Aç şu camı mamı, bu ne kokuyo, apuş arası kokuyo resmen ya.' , 'Nedir senin derdin arkadaşım? Kafan mı iyi anlamadım ki!' , 'Agrasifim, kompleksliyim!' , 'Uyudum sandın değil mi buhoo buhoo..' , 'Kan görüyorum hocam vahşet görüyorum şakak kemiğinden girmiş levye görüyorum hocam, levye hocam adamın şakak kemiğinden girmiş hocam.' , 'Benim canım yanmaz gardaşşş..' , 'Bundan sonra bu kafilenin başkanı benim.' , 'Bu internet aleminde çoh garı gız var diyolar doğru mu?' , 'Laf sokarım derinden aklın oynar yerinden.' , 'Lan ikiz dingiller, o dilini gopartırım senin.' , 'Problem nedir gardaş? Hıı Takaşi Hiroşi Mahat hı. Nedir la sizin derdiniz geldiniz burda artislik mi yapıyonguz?' , 'Testesteronlarım!' , 'Acı macı bize işler mi bacı ya?']

SIFIR1 = ['Yaptıklarm icin pişman deyilim haa aklım hala yapmadıklarımda!' , 'Hodri meydan biloocan.' , 'Niye sıktın lan çocuğun bacağına icab eder mi Özgür?' , 'Siktir git! Bu saatten sonra tekerlekli sandalyeyle gez.' , 'Ne bakıyon lan gevşek!' , 'Değişirse kahrolim ya, onlar da bizim gibi etten kemikten deel mi?' , 'Öleceğiz diye gülmeyek mi?' , 'Abilerin konuşurken lafa girme, tamam?' , 'İhanet eden sadakat beklemesin bab ba.' , 'Yapılan her kahpeliğe bir mermi borcumuz olsun.' , 'Mutsuz insanları ayakta tutan tek şey hayalleridir.' , 'Bah hele lan yavşağa orjin rayban takıyor.' , 'Sevdikten sonra dili, dini ne fark eder ana.' , 'Ya akar kanımız kaldırım taşlarına ya da teneşir paklar artık sizi.' , 'Cio ölme ha!' , 'Selamun aleyküm var mı bi şeyler?' , 'Az dan Az Gider Çoktan Çok Gider!' , 'Gidere gider değil alayına gider.' , 'Lan ben doğma büyüme Adanalıyım, ne demek soğuk duruyorsun!' , 'Senin yaptığın atar, benim hayatıma renk katar be güzelim!' , 'Bu aşkı ikiye bölersek, sana eyvah düşer, bana eyvallah!' , 'Biz ne ateşler gördük suyu görünce korkan, rüzgarı görünce cesaret alan, her ikisi de gidince kendi kendine sönen!' , 'Sağır olan tek organ kulaklar değildir. Bilirim kulaktan geçen onca söz kalbe geçmez kimi zaman!' , 'Benim sürdüğüm hayatın geri vitesi yok.' , 'Farkımız efendi olmak, delikanlı olmak farzımız.' , 'Her ne kadar kabadayılıkta gözüm olmasa da, dalımı kıranın ağacını kökten sökmesini iyi bilirim.' , 'Bana yapacağın gider en fazla hoşuma gider.' , 'Suskunluğumu hаfife аlmа konuşursаm аğır gelir kаldırаmаzsın.']

GENISAİLE = ['Allah’ın var ettiği kulu sen nasıl yok yazarsın hocaa!' , 'Başınız sağ olsun, ölüm işte. Geldi mi direkt öldürüyor!' , 'Vay arkadaş! Bizdeki kader Çin Malı mıdır? Ben anlamadım ki!' , 'Giyinikken ayrı çekiciyim, çıplakken imdat çekiciyim.' , 'Cuma namazını çok kalabalık diye pazar günü kılan Ulvi.' , 'Yağmurlu havada bahçe sulayan Ulvi' , 'Adam gibi çayını iç sonra ortaokulu 2. sınıftan terk ettiğin gibi terket burayı.' , 'Sana şimdi çok pis dalarım amma aramızda müthiş bi aşk doğar diye korkuyorum.' , 'Sana benim gözümle bakıcak adamın aklını kırarım lan!']



@register(outgoing=True, pattern="^.kuzey")
async def kuzey(event):
    await event.edit(f"{choice(KUZEY)}")
    
@register(outgoing=True, pattern="^.kardes")
async def kardes(event):
    await event.edit(f"{choice(KARDES)}")
    
@register(outgoing=True, pattern="^.no1")
async def no1(event):
    await event.edit(f"`{choice(NO1)}`")
    
@register(outgoing=True, pattern="^.ramiz")
async def ramiz(event):
    await event.edit(f"`{choice(RAMIZ)}`")
    
@register(outgoing=True, pattern="^.sifir1")
async def sifir1(event):
    await event.edit(f"`{choice(SIFIR1)}`")
    
@register(outgoing=True, pattern="^.genisaile")
async def genisaile(event):
    await event.edit(f"`{choice(GENISAİLE)}`")
    
@register(outgoing=True, pattern="^.lia")
async def lia(event):
    await event.edit(f"`{choice(LİA)}`")

@register(outgoing=True, pattern="^.doktor")
async def doktor(event):
    await event.edit(f"{choice(DOKTOR)}")
    
@register(outgoing=True, pattern="^.recep")
async def recep(event):
    await event.edit(f"`{choice(RECEP)}`")
    
@register(outgoing=True, pattern="^.thanos")
async def thanos(event):
    await event.edit(f"{choice(THANOS)}")
    
@register(outgoing=True, pattern="^.got")
async def got(event):
    await event.edit(f"{choice(GOT)}")
    
@register(outgoing=True, pattern="^.cod")
async def cod(event):
    await event.edit(f"{choice(COD)}")

@register(outgoing=True, pattern="^.zula")
async def zula(event):
    await event.edit(f"{choice(ZULA)}")
    
Help = CmdHelp('sozler')
Help.add_info('@DevXenon `Tarafından Yapıldı`')
Help.add_command('kuzey',   None, 'Kuzey Tekinoğlundan rastgele replik seçer.')
Help.add_command('kardes',   None, 'Kardeş Payından rastgele replik seçer.')
Help.add_command('doktor',   None, 'Mucize Doktordan rastgele replik seçer.')
Help.add_command('thanos',   None, 'Thanosun en iyi repliklerinden rasgele seçer.')
Help.add_command('got',   None, 'Game of Thrones dizisinden rastgele replik seçer.')
Help.add_command('cod',   None, 'Call of Duty oyunundan rastgele replik seçer.')
Help.add_command('zula',   None, 'Zula oyunundan rastgele replik seçer.')
Help.add_command('lia',   None, 'Lia Shine’den rastgele sözler seçer.')
Help.add_command('ramiz',   None, 'Ramiz Dayının en iyi repliklerinden rasgele seçer.')
Help.add_command('genisaile',   None, 'Geniş Aile Dizisinden rastgele replik seçer.')
Help.add_command('sifir1',   None, 'Sıfır 1 dizisinden rastgele replik seçer.')
Help.add_command('no1',   None, 'No1’in en iyi sözlerinden rastgele seçer.')
Help.add_command('recep',   None, 'Recep İvedik serisinden rastgele replik seçer.')
Help.add_warning('Küfürler sansürlenmemiştir!')
Help.add()
