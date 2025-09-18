import { CoffeeRecommendation, QuizQuestion } from "./CoffeeQuiz";
import { Coffee, Heart, Leaf, Sun, Moon, Zap, Sparkles } from "lucide-react";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Коли ви найчастіше п'єте каву?",
    options: [
      {
        id: "morning",
        text: "Зранку, щоб прокинутися",
        icon: Sun,
        weight: { strong: 3, energetic: 2, breakfast: 3 },
      },
      {
        id: "afternoon",
        text: "Вдень для концентрації",
        icon: Zap,
        weight: { balanced: 3, smooth: 2, work: 3 },
      },
      {
        id: "evening",
        text: "Увечері для розслаблення",
        icon: Moon,
        weight: { mild: 3, relaxing: 2, decaf: 3 },
      },
      {
        id: "anytime",
        text: "Цілий день, обожнюю каву!",
        icon: Heart,
        weight: { strong: 2, balanced: 2, variety: 3 },
      },
    ],
  },
  {
    id: 2,
    question: "Який смак ви надаєте перевагу?",
    options: [
      {
        id: "fruity",
        text: "Фруктові та квіткові ноти",
        icon: Sparkles,
        weight: { light: 3, fruity: 3, specialty: 2 },
      },
      {
        id: "nutty",
        text: "Горіхові та карамельні відтінки",
        icon: Coffee,
        weight: { balanced: 3, nutty: 3, comfort: 2 },
      },
      {
        id: "chocolate",
        text: "Шоколадні та солодкі ноти",
        icon: Heart,
        weight: { rich: 3, sweet: 3, dessert: 2 },
      },
      {
        id: "bold",
        text: "Насичений та міцний смак",
        icon: Zap,
        weight: { strong: 3, intense: 3, bold: 2 },
      },
    ],
  },
  {
    id: 3,
    question: "Як ви зазвичай готуєте каву вдома?",
    options: [
      {
        id: "espresso",
        text: "Еспресо машина або мока",
        icon: Coffee,
        weight: { strong: 3, traditional: 2, intense: 2 },
      },
      {
        id: "filter",
        text: "Фільтр-кава або краплинна",
        icon: Leaf,
        weight: { balanced: 3, smooth: 2, daily: 3 },
      },
      {
        id: "french",
        text: "Френч-прес або кемекс",
        icon: Sun,
        weight: { rich: 2, full: 3, artisanal: 2 },
      },
      {
        id: "instant",
        text: "Розчинна кава для зручності",
        icon: Zap,
        weight: { convenient: 3, mild: 2, quick: 3 },
      },
    ],
  },
  {
    id: 4,
    question: "Що для вас найважливіше в каві?",
    options: [
      {
        id: "energy",
        text: "Енергія та бадьорість",
        icon: Zap,
        weight: { strong: 3, caffeine: 3, energetic: 2 },
      },
      {
        id: "taste",
        text: "Неперевершений смак",
        icon: Sparkles,
        weight: { specialty: 3, complex: 2, premium: 3 },
      },
      {
        id: "comfort",
        text: "Затишок та розслаблення",
        icon: Heart,
        weight: { comfort: 3, smooth: 2, cozy: 3 },
      },
      {
        id: "health",
        text: "Органічність та якість",
        icon: Leaf,
        weight: { organic: 3, healthy: 2, quality: 3 },
      },
    ],
  },
];

export const coffeeRecommendations: CoffeeRecommendation[] = [
  {
    name: "Ефіопська Сідамо",
    description: "Елегантна кава з квітковими нотами та цитрусовими відтінками",
    flavor: "Квітково-фруктовий",
    strength: "Середня",
    price: "180",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3",
    characteristics: [
      "Квіткові ноти",
      "Цитрусові відтінки",
      "Світле обжарювання",
    ],
    perfectFor: ["Ранкова кава", "Фільтр-методи", "Любителі легких смаків"],
  },
  {
    name: "Колумбійська Уїла",
    description:
      "Збалансована кава з шоколадними нотами та карамельною солодкістю",
    flavor: "Шоколадно-карамельний",
    strength: "Середня",
    price: "165",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3",
    characteristics: [
      "Шоколадні ноти",
      "Карамельна солодкість",
      "Збалансована кислотність",
    ],
    perfectFor: [
      "Універсальне використання",
      "Еспресо та фільтр",
      "Щоденне споживання",
    ],
  },
  {
    name: "Гватемальська Антигуа",
    description: "Повнотіла кава з димними відтінками та пряними нотами",
    flavor: "Димно-пряний",
    strength: "Висока",
    price: "195",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3",
    characteristics: ["Димні ноти", "Пряні відтінки", "Повне тіло"],
    perfectFor: ["Еспресо", "Ранкова енергія", "Любителі міцної кави"],
  },
  {
    name: "Бразильська суміш",
    description: "Класична кава з горіховими нотами та низькою кислотністю",
    flavor: "Горіхово-какао",
    strength: "Середня",
    price: "145",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3",
    characteristics: ["Горіхові ноти", "Какао", "Низька кислотність"],
    perfectFor: ["Американо", "Молочні напої", "Комфортне пиття"],
  },
  {
    name: "Ямайка Блю Маунтін",
    description: "Елітна кава з м'яким делікатним смаком та високою якістю",
    flavor: "М'який та делікатний",
    strength: "Легка-середня",
    price: "350",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3",
    characteristics: ["М'який смак", "Делікатні ноти", "Преміум якість"],
    perfectFor: ["Особливі випадки", "Справжні кавові гурмани", "Подарунок"],
  },
];
