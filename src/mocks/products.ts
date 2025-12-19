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
];
