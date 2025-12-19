export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "Смарт-часы X100",
    price: 7490,
    category: "Гаджеты",
    image:
      "https://main-cdn.sbermegamarket.ru/big1/hlr-system/169/580/144/861/044/7/600007229266b0.png",
    description: "Воднонепроницаемые, GPS, 7-дневный аккумулятор",
  },
  {
    id: 2,
    title: "Галстук",
    price: 5990,
    category: "Одежда",
    image:
      "https://main-cdn.sbermegamarket.ru/big1/hlr-system/15743211121/600000724036b0.jpeg",
    description: "100% хлопок, хорошая посадка",
  },
  {
    id: 3,
    title: "Кофемашина",
    price: 12990,
    category: "Домашние",
    image:
      "https://main-cdn.sbermegamarket.ru/mid9/hlr-system/155/770/117/112/231/116/600023081784b0.jpg",
    description: "Делает лучший кофе в вашей жизни",
  },
  {
    id: 4,
    title: "Портативная колонка",
    price: 4490,
    category: "Гаджеты",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_W3WreJJ_EChZpwRyhv1exNldEshBCZJpdQ&s",
    description: "До 15 часов работы при полном заряде, отличный звук",
  },
  {
    id: 5,
    title: "Набор вилок",
    price: 390,
    category: "Товары для дома",
    image:
      "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-15/089/591/887/189/59/600005537998b0.jpeg",
    description: "6 штук в упаковке, материал - нержавеющая сталь, 20 см",
  },
  {
    id: 6,
    title: "Оперативная память ADATA 32gb",
    price: 1000000,
    category: "Оперативная память",
    image:
      "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-56/036/947/953/113/4/100028580894b0.jpg",
    description: "DDR4, возможно, стоит повременить",
  },
  {
    id: 7,
    title:
      "Игра Disco Elysium-The Final Cut. Стандартное издание для PlayStation 4",
    price: 2490,
    category: "Игры для приставок",
    image:
      "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-45/217/668/210/121/815/100029479129b0.jpg",
    description: "Не стоит разговаривать со своим галстуком",
  },
  {
    id: 8,
    title: "Кроксы Шрек",
    price: 5990,
    category: "Обувь",
    image:
      "https://avatars.mds.yandex.net/get-mpic/16501424/2a000001991abed36d9289c4299741e28d13/orig",
    description: "Somebody once told me, the world is gonna roll me",
  },
  {
    id: 9,
    title: "Bob Dylan - HIGHWAY 61 REVISITED ",
    price: 7490,
    category: "Пластинки",
    image:
      "https://main-cdn.sbermegamarket.ru/big1/hlr-system/1601229/100023767943b0.jpg",
    description: "Шестой студийный альбом Боба Дилана",
  },
];
