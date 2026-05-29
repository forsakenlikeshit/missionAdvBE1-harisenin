const sequelize = require('./config/database');
const { Tutor, Course, Kategori, Review } = require('./models');

// mockAPI data
const data = [
  {
    thumbnail: 'https://picsum.photos/seed/frtD1PgMh/3560/863?blur=2',
    title: 'Forward Creative Supervisor',
    description:
      'Vinum acidus dolorem aegrotatio cupressus debilito.\nAter esse derelinquo delectatio maxime.\nCatena quaerat angulus quos thema.',
    authorName: 'Emily Ernser',
    authorCompany: 'Schaefer - Towne',
    authorAvatar: 'https://avatars.githubusercontent.com/u/75940053',
    price: '765.39',
    authorJob: 'Associate',
  },
  {
    thumbnail: 'https://picsum.photos/seed/Cgn4qvLK/1614/3507?blur=8',
    title: 'Regional Paradigm Agent',
    description:
      'Alter dignissimos temperantia decens harum denique argentum. Desipio auditor derideo clam dolore coaegresco arx. Tempus antepono sono defaeco similique amitto.\nTalis voluptate possimus paens clamo videlicet cribro valens molestias. Cometes vobis advoco. Caries verbum soleo.\nAdhuc tergo uredo vivo aggero ultra laborum. Solus teres concedo tenus. Bene universe conturbo ea.',
    authorName: 'Amos Wunsch',
    authorCompany: 'Fritsch - Weber',
    authorAvatar: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/57.jpg',
    price: '418.69',
    authorJob: 'Architect',
  },
  {
    thumbnail: 'https://picsum.photos/seed/F6i41a4lh/897/3124?blur=9',
    title: 'National Creative Agent',
    description: 'Patria aeternus timidus praesentium adnuo nam aspicio alveus trepide paulatim.',
    authorName: 'Al Lowe',
    authorCompany: 'Morar, Donnelly and Abshire',
    authorAvatar: 'https://avatars.githubusercontent.com/u/46704668',
    price: '976.10',
    authorJob: 'Administrator',
  },
  {
    thumbnail: 'https://picsum.photos/seed/yfNzl1HUYD/2290/3785?blur=2',
    title: 'International Communications Representative',
    description:
      'Tactus barba timor acquiro tolero uterque expedita eaque deprecator. Sum conicio alioqui labore voro cinis perferendis temporibus tener. Conatus tolero sumptus sumptus odit vinco placeat.',
    authorName: 'Dixie Boehm',
    authorCompany: 'Reinger, Price and Nader',
    authorAvatar: 'https://avatars.githubusercontent.com/u/15163495',
    price: '9.45',
    authorJob: 'Consultant',
  },
  {
    thumbnail: 'https://picsum.photos/seed/vqkBbwh99F/1938/3190?blur=1',
    title: 'Legacy Tactics Analyst',
    description:
      'Talio speciosus et utroque verbera statua uxor trucido. Suus cubo crapula aspicio appono cervus mollitia venia usus. Ter nulla defaeco amo vestrum enim textor totidem quas.\nThesaurus praesentium solus patrocinor amplus deserunt. Claro appositus adhuc pel tibi. Calculus aestas artificiose adfero.\nComminor substantia voluptatum admoneo ultio sufficio sui cedo. Comedo degero benigne eveniet vesco aliquid aro consequuntur. Sollers uter virtus subseco ancilla vis ullam.',
    authorName: 'Ginger Leannon-Crooks',
    authorCompany: 'Mosciski, Ferry and Zemlak',
    authorAvatar: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/7.jpg',
    price: '746.29',
    authorJob: 'Analyst',
  },
  {
    thumbnail: 'https://picsum.photos/seed/zDjsXgRqQW/250/2115?grayscale&blur=9',
    title: 'International Branding Executive',
    description:
      'Quibusdam patria voluptate dapifer demum umbra. Vis vorago ex barba uterque in deporto ocer. Complectus deprimo stillicidium comis.',
    authorName: 'Miss Marilyn Jakubowski',
    authorCompany: 'Carter, Mosciski and Lakin',
    authorAvatar: 'https://avatars.githubusercontent.com/u/37490368',
    price: '652.20',
    authorJob: 'Agent',
  },
  {
    thumbnail: 'https://picsum.photos/seed/3TcaNF/955/2010?grayscale&blur=7',
    title: 'Direct Identity Associate',
    description:
      'Caecus alii veniam tamdiu. Alienus libero amicitia coniuratio velociter delectatio versus cetera adeptio. Super placeat terminatio suspendo bos aegre.',
    authorName: 'Hugo Rempel',
    authorCompany: 'Simonis and Sons',
    authorAvatar: 'https://avatars.githubusercontent.com/u/64691462',
    price: '375.15',
    authorJob: 'Analyst',
  },
  {
    thumbnail: 'https://picsum.photos/seed/DB5rdt1n0z/3106/3679',
    title: 'Forward Usability Representative',
    description: 'Sequi stabilis uterque subiungo amplexus quos aqua demens.',
    authorName: 'Louise Rohan',
    authorCompany: 'Wisozk LLC',
    authorAvatar: 'https://avatars.githubusercontent.com/u/41117287',
    price: '284.75',
    authorJob: 'Representative',
  },
  {
    thumbnail: 'https://picsum.photos/seed/PynUH2/3745/672?blur=4',
    title: 'Principal Implementation Analyst',
    description: 'Cruciamentum validus inventore auctor concido tempus.',
    authorName: 'Miranda Swift Jr.',
    authorCompany: 'Reynolds - Feest',
    authorAvatar: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/34.jpg',
    price: '743.29',
    authorJob: 'Liaison',
  },
  {
    thumbnail: 'https://picsum.photos/seed/2PfiGJi3/378/2120?grayscale&blur=9',
    title: 'International Implementation Consultant',
    description: 'Canto tepesco suscipit bonus creber ulciscor aranea aureus comminor adficio.',
    authorName: 'Guillermo Romaguera II',
    authorCompany: 'Weissnat, Runte and Satterfield',
    authorAvatar: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/98.jpg',
    price: '441.29',
    authorJob: 'Assistant',
  },
  {
    thumbnail: 'https://picsum.photos/seed/Qf2jX89HG4/3112/3546?blur=8',
    title: 'International Assurance Administrator',
    description: 'Tutamen synagoga acies verbum vester ciminatio aut vesco audio.',
    authorName: 'Gordon Swift Jr.',
    authorCompany: 'King - Miller',
    authorAvatar: 'https://avatars.githubusercontent.com/u/86799680',
    price: '759.79',
    authorJob: 'Supervisor',
  },
  {
    thumbnail: 'https://picsum.photos/seed/dkE7fimZjU/2187/904?blur=7',
    title: 'Product Group Consultant',
    description:
      'Amplitudo audax comitatus vesco corrumpo. Assumenda illo colo deprimo sordeo subseco vergo desipio abscido depraedor. Cum ager nam crustulum dolor dedico thesis temptatio apto.\nDepraedor appositus cupiditas despecto voluptas defungo vespillo. Argumentum totus tego tardus cubo colo adhuc terebro. Cavus facilis alter aurum coerceo suscipio testimonium.\nDicta convoco verbum ullus spes. Viriliter thorax cunae alo terebro victus. Aegre conqueror minima defessus comburo corrigo.',
    authorName: 'Pamela Bashirian',
    authorCompany: 'Hane - Robel',
    authorAvatar: 'https://avatars.githubusercontent.com/u/78180677',
    price: '147.79',
    authorJob: 'Planner',
  },
];

const categories = [
  { nama_kategori: 'Pemasaran', description: 'Marketing & growth strategy' },
  { nama_kategori: 'Desain', description: 'UI/UX, Graphic Design' },
  { nama_kategori: 'Pengembangan Diri', description: 'Self improvement & productivity' },
  { nama_kategori: 'Bisnis', description: 'Entrepreneurship & management' },
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomRating() {
  return (Math.random() * 4 + 1).toFixed(1);
}

async function seed() {
  try {
    await sequelize.sync({ force: true });

    // CREATE CATEGORY
    const createdCategories = await Kategori.bulkCreate(categories);

    for (const item of data) {
      // CREATE TUTOR
      const [tutor] = await Tutor.findOrCreate({
        where: { fullname: item.authorName },
        defaults: {
          fullname: item.authorName,
          company: item.authorCompany,
          avatar: item.authorAvatar,
          profession: item.authorJob,
        },
      });

      // ASSIGN RANDOM CATEGORY
      const randomCategory = getRandom(createdCategories);

      // CREATE COURSE
      const course = await Course.create({
        id_tutor: tutor.id_tutor,
        id_kategori: randomCategory.id_kategori,
        title: item.title,
        description: item.description,
        thumbnail: item.thumbnail,
        price: item.price,
      });

      // CREATE RANDOM REVIEWS
      const reviewCount = Math.floor(Math.random() * 4) + 2;

      for (let i = 0; i < reviewCount; i++) {
        await Review.create({
          id_kelas: course.id_kelas,
          reviewer_name: `User ${Math.floor(Math.random() * 1000)}`,
          rating: parseFloat(getRandomRating()),
          comment: 'Great course!',
        });
      }
    }

    console.log('Seeding success!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
