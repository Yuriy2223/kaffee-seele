import { Music, Coffee, MapPin, Users } from "lucide-react";

export const upcomingEvents = [
  {
    id: 1,
    title: "Вечір живої музики",
    description:
      "Інтимний концерт місцевих джазових музикантів у затишній атмосфері нашої кав'ярні",
    date: "2025-10-20",
    time: "19:00",
    duration: "2 години",
    category: "music",
    price: "Вхід вільний",
    maxParticipants: 30,
    currentParticipants: 18,
  },
  {
    id: 2,
    title: "Дегустація нових сортів кави",
    description:
      "Спробуйте ексклюзивні сорти кави з різних куточків світу разом з нашим головним бариста",
    date: "2025-10-22",
    time: "15:00",
    duration: "1.5 години",
    category: "tasting",
    price: "₴150",
    maxParticipants: 15,
    currentParticipants: 12,
  },
  {
    id: 3,
    title: "Майстер-клас з лате-арту",
    description:
      "Навчіться створювати красиві малюнки на кавовій піні під керівництвом професійного бариста",
    date: "2025-10-25",
    time: "11:00",
    duration: "2 години",
    category: "workshop",
    price: "₴250",
    maxParticipants: 8,
    currentParticipants: 5,
  },
  {
    id: 4,
    title: "Кав'ярня-бібліотека",
    description:
      "Спеціальний тихий вечір для любителів читання з 20% знижкою на всі напої",
    date: "2025-10-27",
    time: "18:00",
    duration: "3 години",
    category: "reading",
    price: "Знижка 20%",
    maxParticipants: 25,
    currentParticipants: 8,
  },
];

export const categoryIcons = {
  music: Music,
  tasting: Coffee,
  workshop: Users,
  reading: MapPin,
};

export const categoryNames = {
  music: "Музика",
  tasting: "Дегустація",
  workshop: "Майстер-клас",
  reading: "Читання",
};
