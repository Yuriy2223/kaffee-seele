import Image from "next/image";
import { Container } from "@/shared/Container";
import {
  Coffee,
  Heart,
  Snowflake,
  Star,
  Cookie,
  Coffee as CoffeeMug,
} from "lucide-react";

const iconMap = {
  coffee: Coffee,
  heart: Heart,
  snowflake: Snowflake,
  star: Star,
  cookie: Cookie,
  mug: CoffeeMug,
};

export const coffeeMenu = [
  {
    name: "Класичний еспресо",
    description:
      "Ідеальний баланс міцності та аромату для справжніх цінителів кави",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    icon: "coffee",
  },
  {
    name: "Капучино з мистецтвом",
    description:
      "Ніжна піна з унікальним малюнком, що робить кожну чашку особливою",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    icon: "heart",
  },
  {
    name: "Колд брю",
    description:
      "Освіжаюча холодна кава з м'яким смаком та природною солодкістю",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    icon: "snowflake",
  },
  {
    name: "Ванільний лате",
    description: "Кремова кава з додаванням натурального ванільного сиропу",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    icon: "star",
  },
  {
    name: "Шоколадна мока",
    description: "Ідеальне поєднання кави та шоколаду з вершковою піною",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    icon: "cookie",
  },
  {
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
    name: "Домашнє тірамісу",
    description: "За авторським рецептом нашого шеф-кондитера",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
  },
  {
    name: "Шоколадний брауні",
    description: "З горіхами та морозивом",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
  },
  {
    name: "Чізкейк нью-йорк",
    description: "З лісовими ягодами",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1567306301408-9b74779a11af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
  },
  {
    name: "Французькі макарони",
    description: "Набір з 6 смаків",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
  },
];

export const OurMenu = () => {
  return (
    <section id="menu" className="bg-cream/20">
      <Container className="px-4 py-10">
        <div className="text-center mb-10">
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-warm-brown mb-6">
            Наше меню
          </h3>
          <p className="text-xl text-dark-text max-w-2xl mx-auto">
            Кожна чашка кави - це маленька подорож до смакового раю
          </p>
        </div>

        <div className="mb-14">
          <h4 className="text-3xl font-serif font-semibold text-sage-green mb-12 text-center">
            Популярні кавові напої
          </h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coffeeMenu.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="bg-warm-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="rounded-xl object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h5 className="text-xl font-serif font-semibold text-warm-brown mb-2">
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
          <h4 className="text-3xl font-serif font-semibold text-sage-green mb-12 text-center">
            Фірмові десерти
          </h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {dessertsMenu.map((item, index) => (
              <div
                key={index}
                className="bg-warm-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-xl object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <h5 className="text-lg font-serif font-semibold text-warm-brown mb-2">
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
          <h4 className="text-3xl font-serif font-semibold text-sage-green mb-8 text-center">
            Рекомендація бариста
          </h4>

          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-warm-brown to-sage-green rounded-2xl p-8 text-center shadow-xl">
              <div className="flex items-center justify-center mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
                  alt="Олександр - головний баріста"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full mr-4 border-4 border-warm-white shadow-lg"
                />
                <div className="text-left">
                  <h5 className="text-xl font-serif font-semibold text-warm-white mb-1">
                    Вибір Олександра
                  </h5>
                  <p className="text-warm-white/80">Головний баріста</p>
                </div>
              </div>
              <h6 className="text-2xl font-serif font-bold text-warm-white mb-3">
                Карамельний макіато з морською сіллю
              </h6>
              <p className="text-warm-white/90 mb-4 leading-relaxed">
                &ldquo;Цей тиждень я рекомендую спробувати наш авторський
                карамельний макіато з щіпкою морської солі. Солодкість карамелі
                в поєднанні з легкою солоністю створює неймовірно збалансований
                смак, який підкреслює природну кислинку кави.&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl font-bold text-warm-white">₴85</span>
                <span className="bg-warm-white/20 text-warm-white px-4 py-2 rounded-full text-sm font-medium">
                  Спеціальна ціна до неділі
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
