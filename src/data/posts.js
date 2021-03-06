const categoriesItems = [
    {
    coverImage: require('../assets/invidzaImages/DN/YemyeşilKırÇiçekleri-Main.jpg'),
    title: 'Düğün - Nişan',
    options: [
        {
            coverImage: require("../assets/invidzaImages/DN/2_400x500.jpg"),
            title: 'Düğün - Nişan',
            label: "Buket",
            unitPrice: "2.49 ₺",
            videoId:"4Y_fR358yww",
            exp1:"Buket, pastel renkler ve retro çizimlerle içine çekiyor. Yumuşak geçişleri ve huzur veren animasyonları, mutlu günün zarafetini ortaya koyuyor.",
            exp2:"Sakin bir düğün planladıysan, aradığın video davetiye şablonu Buket. Hemen düzenlemeye başla ve video davetiyeni kişiselleştir!",
            exp3:"Bu şablonu düzenlerken 1 fotoğrafa ihtiyacın olacak.",
            key:0,
        },
        {

            coverImage: require('../assets/invidzaImages/DN/Salkımsogut_400x500.jpg'),
            title: 'Düğün - Nişan',
            label: "Salkımsöğüt",
            unitPrice: "2.49 ₺",
            // videoId:"_wIXoqec5So",
            exp1:"Gösterişsiz sadeliği sevenler için, Salkımsöğüt şablonunu öneriyoruz. Aşkınızın görkemi, video davetiyenizin yalınlığıyla eşsiz bir uyum yakalayacak. Yeşil ağaç dalları, kahverengi çerçeveler ve yumuşak geçişler... Doğa senin için vazgeçilmezse, bu şablon tam sana göre.",
            exp2:"İki fotoğrafla özelleştirebileceğin Salkımsöğüt'te, davetlilerinizin düğüne katılım durumlarını öğrenebileceğin, onlara etkinlik adresinizin konumunu sunabileceğin özel alanlar yer alıyor. Şıklığı ve zarafetiyle göz dolduran bu şablon, işlevselliğiyle de öne çıkıyor.",
            exp3:"Bu şablonu düzenlerken 2 fotoğrafa ihtiyacın olacak.",
            key:1,
        },
        {
            coverImage: require('../assets/invidzaImages/DN/3_400x500.jpg'),
            title: 'Düğün - Nişan',
            label: "Çizgi",
            unitPrice: "2.49 ₺",
            videoId:"1MG8qaug5Vk",
            exp1:"Sadeliği seven çiftler için birbirinden güzel yalın çizimler içeren‚ çizgi video davetiye şablonunu öneriyoruz.",
            exp2:"Davetlilerin video davetiyesini görür görmez, neşeli ve hareketli kalplerin ve sevimli çizgilerin yansıttığı heyecanından etkilenecekler.",
            exp3:"Bu şablonu düzenlerken 1 fotoğrafa ihtiyacın olacak.",
            key:2,
        },
        {
            coverImage: require('../assets/invidzaImages/DN/Romantik_Komedi_400x500.jpg'),
            title: 'Düğün - Nişan',
            label: "Romantik Komedi",
            unitPrice: "3.49 ₺",
            // videoId:"4Y_fR358yww",
            exp1:"Sadeliği seven çiftler için birbirinden güzel yalın çizimler içeren‚ çizgi video davetiye şablonunu öneriyoruz.",
            exp2:"Davetlilerin video davetiyesini görür görmez, neşeli ve hareketli kalplerin ve sevimli çizgilerin yansıttığı heyecanından etkilenecekler.",
            exp3:"Bu şablonu düzenlerken 1 fotoğrafa ihtiyacın olacak.",
            key:3,
        },
        {
            coverImage: require('../assets/invidzaImages/DN/MisketLimon_400x500.jpg'),
            title: 'Düğün - Nişan',
            label: "Misket Limon",
            unitPrice: "2.49 ₺",
            videoId:"_wIXoqec5So",
            exp1:"Açılıp kapanan geçişler, bol bol kalp ve misket limon renkleri! Ferah bir kır düğünü yapıyorsan, aradığın video davetiye şablonu Misket Limon!",
            exp2:"Misket Limon'u beğendiysen hemen düzenlemeye başla; açıklamalarını gir. Düğün tarihini ve mekânını güncelle, davetlilerine göndermeye başla! Gelecek yanıtları anlık olarak takip et; organizasyonunu buna göre planla.",
            exp3:"Bu şablonu düzenlerken 2 fotoğrafa ihtiyacın olacak.",
            key:4,
        },
        {
            coverImage: require('../assets/invidzaImages/DN/Parıltı_400x500.jpg'),
            title: 'Düğün - Nişan',
            label: "Parıltı",
            unitPrice: "2.49 ₺",
            videoId:"whRIYDx9TcM",
            exp1:"İnci parıltısından hoşlananlar için şahane bir seçenek! Parıltı video davetiye şablonu, şüphesiz, ışıltılı düğünün işaretini taşıyor. Mutlu gününü, pırıl pırıl bir video davetiye ile duyurmak istersen, Invidza'nın önerisi Parıltı olur.",
            exp2:"İtalik yazı tipi, yumuşak arka plan renkleri, özelleştirilebilir fotoğrafları ve ışıl ışıl animasyonlarıyla, en mutlu gününün farkını, video davetiyen ile öne çıkar ve davetlilerinde unutulmaz bir iz bırak!",
            exp3:"Bu şablonu düzenlerken 1 fotoğrafa ihtiyacın olacak.",
            key:5,
        },
        {
            coverImage: require('../assets/invidzaImages/DN/Heyecan_400x500.jpg'),
            title: 'Düğün - Nişan',
            label: "Heyecan",
            unitPrice: "2.49 ₺",
            videoId:"Bhy5eITLdL8",
            exp1:"Genç, dinamik animasyonlar ve çağdaş görseller; eğlenceli bir yazı tipi... İçi içine sığmayan mutluluğunu yansıtmak için Heyecan'dan daha iyi bir video davetiye şablonu olamaz.",
            exp2:"Video davetiyeni kişiselleştirmeye şimdi başla ve onlara söylemek istediklerini söyle. LCV'leri video davetiyenden topla; organizasyonunu buna göre planla!",
            exp3:"Bu şablonu düzenlerken 1 fotoğrafa ihtiyacın olacak.",
            key:6,
        },
        {
            coverImage: require('../assets/invidzaImages/DN/YemyeşilKırÇiçekleri_400x500.jpg'),
            title: 'Düğün - Nişan',
            label: "Yemyeşil Kır Çiçekleri",
            unitPrice: "2.49 ₺",
            // videoId:"4Y_fR358yww",
            exp1:"Dallar, çiçekler, kelebekler, yeşilin en güzel tonları ve dairesel bir yapı… Floral desenlerden hoşlanıyorsan, bu şablon tam sana göre. Düğün konseptin kır düğünü ise, bu video davetiye şablonunu seçerek davetlilere sunduğun bütünlüklü temayı güçlendirebilirsin.",
            exp2:"Aşkınız, ilk günden evliliğinize dek sizi heyecanlandırdı. Heyecanınızı yansıtacak bu şablon ile davetlilerinize özel bir deneyim yaşatmak istersen, hemen şimdi bu temayı seçebilir; her bir davetlinize özel olarak hazırlanacak davetiyeleri kişiselleştirebilirsin.",
            exp3:"Bu şablonu düzenlerken 1 fotoğrafa ihtiyacın olacak.",
            key:7,
        },
        {
            coverImage: require('../assets/invidzaImages/DN/1_400x500.jpg'),
            title: 'Düğün - Nişan',
            label: "Buğday",
            unitPrice: "2.49 ₺",
            videoId:"BfH1zO6Zvwg",
            exp1:"Düğünün için sembolik şekiller ve kurdelelerle bezeli bir video davetiye şablonuna ne dersin?",
            exp2:"Çerçevenin dört bir köşesinden yükselen buğday başaklarını andıran süslemeleri, yumuşak renkleri ve zarif animasyonlarıyla Buğday isimli video davetiyeyi tercih ederek, davetlilerini yalınlığıyla göz dolduran düğününe yaratıcı ve şık bir yolla çağırabilirsin.",
            exp3:"Bu şablonu düzenlerken 1 fotoğrafa ihtiyacın olacak.",
            key:8,
        },
    ]
    },
    {
    coverImage: require('../assets/invidzaImages/GelinHamamı/Yesilcam-Main.jpg'),
    title: 'Gelin Hamamı',
    options: [
        {
            coverImage: require('../assets/invidzaImages/GelinHamamı/Yesilcam_400x500.jpg'),
            title: 'Gelin Hamamı',
            label: "Yeşilçam",
            unitPrice: "2.49 ₺",
            videoId:"z5N8D4uNcjs",
            exp1:"Düğünlerin vazgeçilmez parçası gelin hamamı için nostaljik güzel bir video davetiye şablonu! Eğlenceyi davetiyenle başlat! Mutluluğu ve geleneksel değerleri bir araya getiren Yeşilçam, düğün hamamı geleneğini tam anlamıyla yansıtan bir şablon. Adile Naşit’in sempatik yüzü ve eski Türk filmlerinden sahneler sayesinde davetlilerin bu davetiyeye bayılacak!",
            exp2:"İtalik yazı tipi ve parlak kırmızı ışıltılarla davetiyeni ön plana çıkar, düğün sürecinin bu en keyifli etkinliğine güzel bir başlangıç yap!",
            exp3:"Bu şablonu dilediğin 1 fotoğrafla düzenleyebilir, dilersen neşeli bir fotoğrafla şablonu daha eğlenceli hale getirebilirsin.",
            key:0,
        },
    ]
    },

    {
    coverImage: require('../assets/invidzaImages/KınaGecesi/Altn_Sim-Main.jpg'),
    title: 'Kına Gecesi',
    options: [
        {
            coverImage: require('../assets/invidzaImages/KınaGecesi/Altın_Sim_400x500.jpg'),
            title: 'Kına Gecesi',
            label: "Altın Sim",
            unitPrice: "2.49 ₺",
            videoId:"L-v1G0JiedI",
            exp1:"Klasik dokunuşları ve ihtişamlı çerçeveleri seviyorsan, aradığın video davetiye şablonunu buldun: Altın Sim! Göz alıcı animasyonları ve italik yazılarıyla kına gecenin görkemini davetlilerine kolaylıkla yansıtabilirsin.",
            exp2:"Altın Sim'in kahverengi pano dokusu, kendine ve davetlilerine özel düzenleyebileceğin açıklamaları daha belirgin kılarken; parıltılı geçişleri göz alıyor.",
            exp3:"Bu şablonu düzenlerken 1 fotoğrafa ihtiyacın olacak.",
            key:0,
        },
        {
            coverImage: require('../assets/invidzaImages/KınaGecesi/Fraktal_400x500.jpg'),
            title: 'Kına Gecesi',
            label: "Fraktal",
            unitPrice: "2.49 ₺",
            videoId:"Kv4bx5AlF8U",
            exp1:"Fraktal video davetiye şablonu, tekrar eden desenlerden oluşan arka planıyla dikkat çekiyor. Bu arka plan, ışıltılı çerçeveyi öne çıkarıyor.",
            exp2:"Kına gecen için asil bir video davetiye şablonu arıyorsan, Fraktal beklentilerini karşılayacak. Hemen düzenlemeye başla; en güzel cümlelerinle sevdiklerini bu mutlu geceye davet et.",
            exp3:"Bu şablonu düzenlerken 1 fotoğrafa ihtiyacın olacak.",
            key:1,
        },
        {
            coverImage: require('../assets/invidzaImages/KınaGecesi/Sarayl_400x500.jpg'),
            title: 'Kına Gecesi',
            label: "Saraylı",
            unitPrice: "2.49 ₺",
            videoId:"",
            exp1:"Işıl ışıl çiçek takları, parıl parıl elmaslar, mor ve sarının eşsiz uyumu: Saraylı! Senin kına gecen, diğerlerinden farklı olmalı. Bu farkı yaratmaya video davetiyenle başlamaya ne dersin?",
            exp2:"Yaldızlı çerçevelerle süslü bu şablona kına gecenle ilgili açıklamaları yazabilir, sevdiklerini etkileyici cümlelerle kına gecene davet edebilirsin. Davetlilerin, video davetiyeni görür görmez parıltılı geçişlerden etkilenecek!",
            exp3:"Bu şablonu düzenlerken 1 fotoğrafa ihtiyacın olacak.",
            key:2,
        },
        {
            coverImage: require('../assets/invidzaImages/KınaGecesi/Muhur_400x500.jpg'),
            title: 'Kına Gecesi',
            label: "Mühür",
            unitPrice: "2.49 ₺",
            videoId:"",
            exp1:"Her genç kızın hayalidir, sevdikleriyle kutlayacağı, biraz duygusal, çok eğlenceli bir kına gecesi... Gelenek ve göreneklerimizin en önemlilerinden birini gerçekleştirirken yanında olmasını istediğin sevdiklerini, kına gecene etkileyici bir video davetiye ile davet etmeye ne dersin?",
            exp2:"Kına renkleriyle, soyut desenlerle süslenmiş, en samimi mesajlarınla ve en güzel fotoğraflarınla özelleştirebileceğin bu davetiye ile, kına geceni arkadaşlarına, yakınlarına, ailene etkili ve yaratıcı bir yoldan duyurabilirsin.",
            exp3:"Bu şablonu düzenlerken 2 fotoğrafa ihtiyacın olacak.",
            key:3,
        },
    ]
    },
    {
    coverImage: require('../assets/invidzaImages/Sünnet/Delikan-Main.jpg'),
    title: 'Sünnet',
    options: [
        {
            coverImage: require('../assets/invidzaImages/Sünnet/Delikan_400x500.jpg'),
            title: 'Sünnet',
            label: "Delikan",
            unitPrice: "2.49 ₺",
            videoId:"ENGyc4K7Y_0",
            exp1:"Delikanlılığa adımını atan küçük oğlunun sünnet töreni herkeste iz bıraksın istemez misin? İşte Delikan video davetiye şablonu, tam da bunun için var!",
            exp2:"Geleneksel motiflerin çağdaş animasyonlarla birleştiği Delikan, ihtişamlı müziğiyle davetlilerini etkilemeyi hemen başaracak! Bu video davetiye şablonunu seçerek hemen düzenlemeye başlayabilir; etkinliğine özel hâle getirebilirsin.",
            exp3:"Bu şablonu düzenlerken 1 fotoğrafa ihtiyacın olacak.",
            key:0
        },
        {
            coverImage: require('../assets/invidzaImages/Sünnet/Mavi_Boncuk_400x500.jpg'),
            title: 'Sünnet',
            label: "Mavi Boncuk",
            unitPrice: "2.49 ₺",
            videoId:"FbjhtTwmWzQ",
            exp1:"Sünnet düğünlerine bol bol nazar boncuğu yakışır. Mavi Boncuk, bu özel günü daha keyifli kılacak. Nazar boncuğu desenleri ve mavi beyaz renkleriyle tam bir sünnet düğünü davetiyesi olan Mavi Boncuk, animasyon geçişleriyle de oldukça ilgi çekici.",
            exp2:"Hem farklı hem kişiye özel hazırlayabileceğin bir sünnet davetiyesi arıyorsan Mavi Boncuk şablonunu etkinliğine göre düzenleyebilir, davetiyenle tüm akraba ve sevdiklerini mutlu ederken şaşırtabilirsin!",
            exp3:"",
            key:1
        },
    ]
    },
    {
    coverImage: require('../assets/invidzaImages/BekarlığaVeda/Visne-Main.jpg'),
    title: 'Bekarlığa Veda',
    options: [  
        {
            coverImage: require('../assets/invidzaImages/BekarlığaVeda/Visne_400x500.jpg'),
            title: 'Bekarlığa Veda',
            label: "Vişne",
            unitPrice: "2.49 ₺",
            videoId:"2qxoy5PokGE",
            exp1:"En mutlu güne yaklaşırken detaylarda da mükemmellik seninle! İnvidza Pudra video davetiye şablonu, zarafetiyle göz dolduruyor. Pudra pembesinin kibar dokunuşu, davetiyeye vintage esintiler katan sembolik çizimler ve nostaljik puantiye deseniyle Pudra bekarlığa veda partin için farklı bir seçim.",
            exp2:"Pudra şablonunu bekarlığa veda partine uygun olarak düzenleyebilir, etkinliğin detaylarını belirtebilir, dikkat edilmesi gerekenler hakkında davetlilerine bilgi verebilirsin. Özelleştirilebilir fotoğraf alanı sayesinde dilediğin gibi düzenleyebileceğin bu animasyonlu davetiye, herkesin gönlünü fethedecek.",
            exp3:"Bu şablonu, tek fotoğrafla düzenleyebilirsin!",
            key:0
        },
        {
            coverImage: require('../assets/invidzaImages/BekarlığaVeda/Pudra_400x500.jpg'),
            title: 'Bekarlığa Veda',
            label: "Pudra",
            unitPrice: "2.49 ₺",
            videoId:"1YZVwAA_rJg",
            exp1:"En mutlu güne yaklaşırken detaylarda da mükemmellik seninle! İnvidza Pudra video davetiye şablonu, zarafetiyle göz dolduruyor. Pudra pembesinin kibar dokunuşu, davetiyeye vintage esintiler katan sembolik çizimler ve nostaljik puantiye deseniyle Pudra bekarlığa veda partin için farklı bir seçim.",
            exp2:"Pudra şablonunu bekarlığa veda partine uygun olarak düzenleyebilir, etkinliğin detaylarını belirtebilir, dikkat edilmesi gerekenler hakkında davetlilerine bilgi verebilirsin. Özelleştirilebilir fotoğraf alanı sayesinde dilediğin gibi düzenleyebileceğin bu animasyonlu davetiye, herkesin gönlünü fethedecek.",
            exp3:"Bu şablonu, tek fotoğrafla düzenleyebilirsin!",
            key:1
        },
    ]
    },
    {
    coverImage: require('../assets/invidzaImages/BabyShower/Merak-Main.jpg'),
    title: 'Baby Shower',
    options: [
        {
            coverImage: require('../assets/invidzaImages/BabyShower/Merak_400x500.jpg'),
            title: 'Baby Shower',
            label: "Merak",
            unitPrice: "2.49 ₺",
            videoId:"5WOriXrOM6s",
            exp1:"Heyecan dorukta! Akıllarda tek soru: Acaba kız mı, erkek mi?",
            exp2:"Ailenizin yeni üyesinin cinsiyetini sevdiklerinle paylaşacağın, en heyecanlı, en sürprizli, en eğlenceli partin için Merak video davetiye şablonunu seçebilirsin. Davetlilerin, isimlerine özel hazırlanmış video davetiyeyi izler izlemez en az senin kadar heyecanlanacak!",
            exp3:"Bu şablonu düzenlerken fotoğrafa ihtiyaç duymayacaksın.",
            key:0
        },
        {
            coverImage: require('../assets/invidzaImages/BabyShower/Ruya_400x500.jpg'),
            title: 'Baby Shower',
            label: "Rüya",
            unitPrice: "2.49 ₺",
            videoId:"V4GRRMfqDgs",
            exp1:"Misafirlerini Rüya gibi bir partiye davet etmeye ne dersin? Bebeğini beklerken düzenleyeceğin en heyecanlı etkinliklerden biri olan “Baby Shower” için göz alıcı bir davetiye hazırlayabilirsin. Invidza Rüya video davetiye şablonu, tüm misafirlerinin içini ısıtacak tatlı, açık pembe tonlarıyla Baby Shower için aradığın davetiye.",
            exp2:"Kız bebeklere özel tasarlanan davetiye, pembe patik detaylı kapağıyla adeta şeker gibi! Özelleştirilebilir fotoğraflar, dikkat çekici animasyonlar, renk ve yazı tipi tercihlerindeki bebeksi detaylar sayesinde hareketli bir animasyon hazırlayabilir, hayalindeki davetiyeyi hazırlayabilirsin!",
            exp3:"Bu şablonu, tek fotoğrafla düzenleyebilirsin!",
            key:1
        },
        {
            coverImage: require('../assets/invidzaImages/BabyShower/Puantiye_400x500.jpg'),
            title: 'Baby Shower',
            label: "Puantiye",
            unitPrice: "2.49 ₺",
            videoId:"W9f2TKWOHaE",
            exp1:"Bebeksi desenleri ve puantiyeli arka planıyla Baby Shower etkinliği için harika bir davetiye Puantiye! Soft mavi tonlarıyla çoğunlukla erkek bebekler için tercih edilen davetiye şablonu, bu keyifli etkinliği daha da güzelleştirecek.",
            exp2:"Video davetiyenin bebek mavisi arka planı, masum çağrışımıyla, misafirlerinin de çok hoşuna gidecek. Özelleştirilebilir fotoğrafları, animasyon geçişleri ve bebeksi desenleriyle Puantiye‘yi “Baby Shower” için özel olarak tasarladık.",
            exp3:"Bu şablonu düzenlerken 1 fotoğrafa ihtiyacın olacak.",
            key:2
        },
    ]
    },
];

export default categoriesItems;
