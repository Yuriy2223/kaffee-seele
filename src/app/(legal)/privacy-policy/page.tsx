import { Container } from "@/shared/Container";
import { contactInfo } from "@/constants/contactInfo";
import { HeaderPokicy } from "@/components/Header/HeaderPokicy";
import { Coffee, Shield, Mail, Phone, MapPin } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <HeaderPokicy />
      <Container className="px-4 py-12">
        <div className="rounded-2xl shadow-lg overflow-hidden bg-warm-white">
          <div className="px-8 py-12 text-center bg-warm-brown">
            <Shield className="h-16 w-16 mx-auto mb-4 text-warm-white" />
            <h1 className="text-4xl font-bold mb-4 text-warm-white">
              Політика конфіденційності
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-6 text-warm-white/70">
              Ваша конфіденційність важлива для нас. Ця політика пояснює, як ми
              збираємо, використовуємо та захищаємо ваші персональні дані.
            </p>
            <div className="text-sm text-warm-white/70">
              <p>Остання редакція: 1 вересня 2025 року</p>
            </div>
          </div>

          <div className="px-8 py-12 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-cream">
                  <span className="font-bold text-warm-brown">1</span>
                </div>
                Загальні положення
              </h2>
              <div className="leading-relaxed space-y-4 text-foreground">
                <p>
                  Ця Політика конфіденційності регулює порядок збору,
                  використання, зберігання та захисту персональних даних
                  користувачів веб-сайту &quot;Кава для душі&quot; (далі -
                  &quot;Сайт&quot;).
                </p>
                <p>
                  Користуючись нашим Сайтом, ви погоджуєтеся з умовами цієї
                  Політики конфіденційності. Якщо ви не згодні з будь-якими
                  положеннями, просимо утриматися від використання Сайту.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-cream">
                  <span className="font-bold text-warm-brown">2</span>
                </div>
                Які дані ми збираємо
              </h2>
              <div className="leading-relaxed text-foreground">
                <p className="mb-4">
                  Ми можемо збирати наступні типи інформації:
                </p>
                <div className="rounded-lg p-6 space-y-4 bg-muted">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-sage-green"></div>
                    <div>
                      <strong>Особиста інформація:</strong> ім&apos;я,
                      електронна адреса, номер телефону (при добровільному
                      наданні)
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-sage-green"></div>
                    <div>
                      <strong>Технічні дані:</strong> IP-адреса, тип браузера,
                      операційна система, час відвідування
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-sage-green"></div>
                    <div>
                      <strong>Поведінкові дані:</strong> сторінки, які ви
                      переглядаєте, час на сайті, джерело переходу
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-cream">
                  <span className="font-bold text-warm-brown">3</span>
                </div>
                Як ми використовуємо ваші дані
              </h2>
              <div className="leading-relaxed text-foreground">
                <p className="mb-4">Зібрані дані використовуються для:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg p-4 bg-muted-green">
                    <h4 className="font-semibold mb-2 text-sage-green">
                      Поліпшення сервісу
                    </h4>
                    <p className="text-sm">
                      Аналіз використання сайту для покращення функціональності
                      та контенту
                    </p>
                  </div>
                  <div className="rounded-lg p-4 bg-muted-green">
                    <h4 className="font-semibold mb-2 text-sage-green">
                      Зв&apos;язок з користувачами
                    </h4>
                    <p className="text-sm">
                      Відповіді на запити та надання підтримки користувачам
                    </p>
                  </div>
                  <div className="rounded-lg p-4 bg-muted-green">
                    <h4 className="font-semibold mb-2 text-sage-green">
                      Безпека
                    </h4>
                    <p className="text-sm">
                      Захист від шахрайства та забезпечення безпеки сайту
                    </p>
                  </div>
                  <div className="rounded-lg p-4 bg-muted-green">
                    <h4 className="font-semibold mb-2 text-sage-green">
                      Маркетинг
                    </h4>
                    <p className="text-sm">
                      Розсилка новин та спеціальних пропозицій (за згодою)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-cream">
                  <span className="font-bold text-warm-brown">4</span>
                </div>
                Файли cookie
              </h2>
              <div className="leading-relaxed space-y-4 text-foreground">
                <p>
                  Наш сайт використовує файли cookie для покращення вашого
                  досвіду використання. Cookie - це невеликі текстові файли, що
                  зберігаються на вашому пристрої.
                </p>
                <div className="rounded-lg p-6 bg-muted">
                  <h4 className="font-semibold mb-3 text-warm-brown">
                    Типи cookie, які ми використовуємо:
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Необхідні:</strong> забезпечують основну
                      функціональність сайту
                    </p>
                    <p>
                      <strong>Аналітичні:</strong> допомагають зрозуміти, як
                      користувачі взаємодіють з сайтом
                    </p>
                    <p>
                      <strong>Функціональні:</strong> запам&apos;ятовують ваші
                      налаштування та переваги
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-cream">
                  <span className="font-bold text-warm-brown">5</span>
                </div>
                Захист даних
              </h2>
              <div className="leading-relaxed space-y-4 text-foreground">
                <p>
                  Ми вживаємо відповідних технічних та організаційних заходів
                  для захисту ваших персональних даних від несанкціонованого
                  доступу, зміни, розкриття або знищення.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-muted-green">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-sage-green" />
                    <h4 className="font-semibold text-warm-brown">
                      Шифрування
                    </h4>
                    <p className="text-sm mt-1">
                      SSL-сертифікат для безпечної передачі даних
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted-green">
                    <Coffee className="h-8 w-8 mx-auto mb-2 text-sage-green" />
                    <h4 className="font-semibold text-warm-brown">
                      Обмежений доступ
                    </h4>
                    <p className="text-sm mt-1">
                      Доступ мають тільки уповноважені особи
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted-green">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-sage-green" />
                    <h4 className="font-semibold text-warm-brown">
                      Регулярні перевірки
                    </h4>
                    <p className="text-sm mt-1">Систематичний аудит безпеки</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-cream">
                  <span className="font-bold text-warm-brown">6</span>
                </div>
                Ваші права
              </h2>
              <div className="leading-relaxed text-foreground">
                <p className="mb-4">
                  У відповідності до чинного законодавства України, ви маєте
                  право:
                </p>
                <div className="space-y-3">
                  {[
                    "Отримати інформацію про обробку ваших персональних даних",
                    "Вимагати виправлення неточних персональних даних",
                    "Вимагати видалення ваших персональних даних",
                    "Обмежити обробку ваших персональних даних",
                    "Заперечити проти обробки ваших персональних даних",
                    "Отримати ваші персональні дані у структурованому форматі",
                  ].map((right, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-sage-green/30"
                    >
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-cream">
                        <span className="text-xs font-bold text-warm-brown">
                          {index + 1}
                        </span>
                      </div>
                      <p>{right}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-cream">
                  <span className="font-bold text-warm-brown">7</span>
                </div>
                Зміни в політиці конфіденційності
              </h2>
              <div className="leading-relaxed space-y-4 text-foreground">
                <p>
                  Ми залишаємо за собою право оновлювати цю Політику
                  конфіденційності. Про суттєві зміни ми повідомимо користувачів
                  заздалегідь через сайт або електронну пошту.
                </p>
                <div className="border rounded-lg p-4 bg-muted text-cream">
                  <p className="text-warm-brown">
                    <strong>Рекомендуємо</strong> періодично переглядати цю
                    сторінку для отримання актуальної інформації про нашу
                    практику захисту конфіденційності.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-xl p-8 bg-muted">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-foreground">
                <Mail className="h-7 w-7 mr-3 text-sage-green" />
                Контактна інформація
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed text-foreground">
                  Якщо у вас є питання щодо цієї Політики конфіденційності або
                  обробки ваших персональних даних, будь ласка, зв&apos;яжіться
                  з нами:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3 p-4 rounded-lg shadow-sm bg-warm-white">
                    <Mail className="h-5 w-5 text-sage-green" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-sm text-warm-brown">
                        {contactInfo.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg shadow-sm bg-warm-white">
                    <Phone className="h-5 w-5 text-sage-green" />
                    <div>
                      <p className="font-semibold text-foreground">Телефон</p>
                      <p className="text-sm text-warm-brown">
                        {contactInfo.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg shadow-sm bg-warm-white">
                    <MapPin className="h-5 w-5 text-sage-green" />
                    <div>
                      <p className="font-semibold text-foreground">Адреса</p>
                      <p className="text-sm text-warm-brown">
                        {contactInfo.address}
                        <br />
                        {contactInfo.city}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
