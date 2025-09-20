import Image from "next/image";
import { Container } from "@/shared/Container";
import { Coffee, Heart, Snowflake, Star, Cookie } from "lucide-react";
import { CoffeeBackground } from "@/shared/CoffeeBackground";

const iconMap = {
  coffee: Coffee,
  heart: Heart,
  snowflake: Snowflake,
  star: Star,
  cookie: Cookie,
  mug: Coffee,
};

export const coffeeMenu = [
  {
    id: "espresso",
    name: "Класичний еспресо",
    description:
      "Ідеальний баланс міцності та аромату для справжніх цінителів кави",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    icon: "coffee",
  },
  {
    id: "cappuccino",
    name: "Капучино з мистецтвом",
    description:
      "Ніжна піна з унікальним малюнком, що робить кожну чашку особливою",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    icon: "heart",
  },
  {
    id: "coldbrew",
    name: "Колд брю",
    description:
      "Освіжаюча холодна кава з м'яким смаком та природною солодкістю",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    icon: "snowflake",
  },
  {
    id: "vanilla-latte",
    name: "Ванільний лате",
    description: "Кремова кава з додаванням натурального ванільного сиропу",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    icon: "star",
  },
  {
    id: "chocolate-mocha",
    name: "Шоколадна мока",
    description: "Ідеальне поєднання кави та шоколаду з вершковою піною",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    icon: "cookie",
  },
  {
    id: "americano",
    name: "Класичний американо",
    description:
      "Міцна чорна кава для тих, хто цінує простоту та автентичність",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    icon: "mug",
  },
];

export const dessertsMenu = [
  {
    id: "tiramisu",
    name: "Домашнє тірамісу",
    description: "За авторським рецептом нашого шеф-кондитера",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
  },
  {
    id: "brownie",
    name: "Шоколадний брауні",
    description: "З горіхами та морозивом",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
  },
  {
    id: "cheesecake",
    name: "Чізкейк нью-йорк",
    description: "З лісовими ягодами",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  },
  {
    id: "macarons",
    name: "Французькі макаруни",
    description: "Набір з 6 смаків",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
  },
];

export const baristaRecommendation = {
  id: "caramel-macchiato",
  barista: {
    name: "Олександра",
    title: "Головний баріста",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
  },
  drink: {
    name: "Карамельний макіато з морською сіллю",
    description:
      "Цей тиждень я рекомендую спробувати наш авторський карамельний макіато з щіпкою морської солі. Солодкість карамелі в поєднанні з легкою солоністю створює неймовірно збалансований смак, який підкреслює природну кислинку кави.",
    price: 85,
    specialOffer: "Спеціальна ціна до неділі",
  },
};

export const OurMenu = () => {
  return (
    <section id="menu" className="relative bg-cream/20">
      <CoffeeBackground />
      <Container className="px-4 py-10">
        <div className="text-center mb-10">
          <h3 className="text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            Наше меню
          </h3>
          <p className="text-xl text-dark-text max-w-2xl mx-auto">
            Кожна чашка кави - це маленька подорож до смакового раю
          </p>
        </div>

        <div className="mb-14">
          <h4 className="text-3xl font-semibold text-sage-green mb-12 text-center">
            Популярні кавові напої
          </h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coffeeMenu.map((item) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              return (
                <div
                  key={item.id}
                  className="bg-warm-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      loading="lazy"
                      className="rounded-xl object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h5 className="text-xl font-semibold text-warm-brown mb-2">
                    {item.name}
                  </h5>
                  <p className="text-dark-text mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-sage-green">
                      ₴{item.price}
                    </span>
                    <IconComponent className="text-warm-brown w-5 h-5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-3xl font-semibold text-sage-green mb-12 text-center">
            Фірмові десерти
          </h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {dessertsMenu.map((item) => (
              <div
                key={item.id}
                className="bg-warm-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    loading="lazy"
                    className="rounded-xl object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <h5 className="text-lg font-semibold text-warm-brown mb-2">
                  {item.name}
                </h5>
                <p className="text-sm text-dark-text mb-4">
                  {item.description}
                </p>
                <span className="text-xl font-bold text-sage-green">
                  ₴{item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h4 className="text-3xl font-semibold text-sage-green mb-8 text-center">
            Рекомендація бариста
          </h4>

          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-warm-brown to-sage-green rounded-2xl p-8 text-center shadow-xl">
              <div className="flex items-center justify-center mb-6">
                <Image
                  src={baristaRecommendation.barista.avatar}
                  alt={`${baristaRecommendation.barista.name} - ${baristaRecommendation.barista.title}`}
                  width={80}
                  height={80}
                  loading="lazy"
                  className="w-16 h-16 rounded-full mr-4 border-4 border-warm-white shadow-lg"
                />
                <div className="text-left">
                  <h5 className="text-xl font-semibold text-warm-white mb-1">
                    Вибір {baristaRecommendation.barista.name}
                  </h5>
                  <p className="text-warm-white/80">
                    {baristaRecommendation.barista.title}
                  </p>
                </div>
              </div>
              <h6 className="text-2xl font-bold text-warm-white mb-3">
                {baristaRecommendation.drink.name}
              </h6>
              <p className="text-warm-white/90 mb-4 leading-relaxed">
                &ldquo;{baristaRecommendation.drink.description}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl font-bold text-warm-white">
                  ₴{baristaRecommendation.drink.price}
                </span>
                <span className="bg-warm-white/20 text-warm-white px-4 py-2 rounded-full text-sm font-medium">
                  {baristaRecommendation.drink.specialOffer}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
