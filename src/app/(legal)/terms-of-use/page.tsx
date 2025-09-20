import { Container } from "@/shared/Container";
import { contactInfo } from "@/constants/contactInfo";
import { HeaderPokicy } from "@/components/Header/HeaderPokicy";
import {
  FileText,
  Mail,
  Phone,
  MapPin,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-background">
      <HeaderPokicy />
      <Container className="px-4 py-12">
        <div className="rounded-2xl shadow-lg overflow-hidden bg-warm-white">
          <div className="px-8 py-12 text-center bg-warm-brown">
            <FileText className="h-16 w-16 mx-auto mb-4 text-warm-white" />
            <h1 className="text-4xl font-bold mb-4 text-warm-white">
              Умови використання
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-6 text-warm-white/70">
              Ці умови регулюють ваше користування веб-сайтом &quot;Кава для
              душі&quot;. Будь ласка, уважно ознайомтеся з ними перед
              використанням нашого сервісу.
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
                  Ці Умови використання (&quot;Умови&quot;) встановлюють правила
                  та умови користування веб-сайтом &quot;Кава для душі&quot;
                  (далі - &quot;Сайт&quot;), що знаходиться за адресою.
                </p>
                <p>
                  Використовуючи наш Сайт, ви погоджуєтеся дотримуватися цих
                  Умов. Якщо ви не згодні з будь-якими положеннями, просимо
                  припинити користування Сайтом.
                </p>
                <div className="p-4 rounded-lg border-l-4 bg-muted border-sage-green">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 mt-0.5 text-sage-green" />
                    <p className="text-sm">
                      <strong>Важливо:</strong> Ми залишаємо за собою право
                      змінювати ці Умови в будь-який час. Зміни набувають
                      чинності з моменту їх публікації на Сайті.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-cream">
                  <span className="font-bold text-warm-brown">2</span>
                </div>
                Опис сервісу
              </h2>
              <div className="leading-relaxed space-y-4 text-foreground">
                <p>
                  &quot;Кава для душі&quot; - це інформаційний веб-сайт,
                  присвячений культурі кави, рецептам, новинам та всьому, що
                  пов&apos;язано зі світом кави та затишку.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted">
                    <CheckCircle className="h-6 w-6 mb-2 text-sage-green" />
                    <h4 className="font-semibold mb-2 text-warm-brown">
                      Що ми пропонуємо
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Статті про каву та кавову культуру</li>
                      <li>• Рецепти кавових напоїв</li>
                      <li>• Поради щодо приготування кави</li>
                      <li>• Огляди кавового обладнання</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-muted-green">
                    <FileText className="h-6 w-6 mb-2 text-sage-green" />
                    <h4 className="font-semibold mb-2 text-warm-brown">
                      Важливі нотатки
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Інформація носить рекомендаційний характер</li>
                      <li>• Не замінює професійну консультацію</li>
                      <li>
                        • Матеріали призначені для загального ознайомлення
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-cream">
                  <span className="font-bold text-warm-brown">3</span>
                </div>
                Права та обов&apos;язки користувачів
              </h2>
              <div className="leading-relaxed space-y-6 text-foreground">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-warm-brown">
                    Ваші права:
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Вільний доступ до публічного контенту Сайту",
                      "Можливість залишати коментарі та відгуки",
                      "Підписка на новини та оновлення",
                      "Звернення з питаннями та пропозиціями",
                    ].map((right, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg bg-cream"
                      >
                        <CheckCircle className="h-5 w-5 mt-0.5 text-sage-green" />
                        <p className="text-sm">{right}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-warm-brown">
                    Ваші обов&apos;язки:
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Не порушувати законодавство України",
                      "Поважати права інших користувачів",
                      "Не розміщувати неприйнятний контент",
                      "Надавати достовірну інформацію при реєстрації",
                    ].map((duty, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg bg-muted-green"
                      >
                        <AlertCircle className="h-5 w-5 mt-0.5 text-sage-green" />
                        <p className="text-sm">{duty}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-cream">
                  <span className="font-bold text-warm-brown">4</span>
                </div>
                Заборонені дії
              </h2>
              <div className="leading-relaxed text-foreground">
                <p className="mb-4">При використанні Сайту забороняється:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 rounded-lg border-l-4 bg-muted border-destructive">
                      <span className="text-sm font-medium text-destructive">
                        ×
                      </span>
                      <p className="text-sm">
                        Розміщення спаму або реклами без дозволу
                      </p>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg border-l-4 bg-muted border-destructive">
                      <span className="text-sm font-medium text-destructive">
                        ×
                      </span>
                      <p className="text-sm">
                        Спроби зламати або пошкодити Сайт
                      </p>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg border-l-4 bg-muted border-destructive">
                      <span className="text-sm font-medium text-destructive">
                        ×
                      </span>
                      <p className="text-sm">Копіювання контенту без дозволу</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 rounded-lg border-l-4 bg-muted border-destructive">
                      <span className="text-sm font-medium text-destructive">
                        ×
                      </span>
                      <p className="text-sm">Розміщення образливого контенту</p>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg border-l-4 bg-muted border-destructive">
                      <span className="text-sm font-medium text-destructive">
                        ×
                      </span>
                      <p className="text-sm">
                        Використання автоматизованих скриптів
                      </p>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg border-l-4 bg-muted border-destructive">
                      <span className="text-sm font-medium text-destructive">
                        ×
                      </span>
                      <p className="text-sm">Порушення авторських прав</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-cream">
                  <span className="font-bold text-warm-brown">5</span>
                </div>
                Авторські права та інтелектуальна власність
              </h2>
              <div className="leading-relaxed space-y-4 text-foreground">
                <p>
                  Весь контент Сайту, включаючи тексти, зображення, дизайн,
                  логотипи та інші матеріали, захищено законами України про
                  авторське право та інтелектуальну власність.
                </p>
                <div className="rounded-lg p-6 space-y-4 bg-cream">
                  <h4 className="font-semibold text-warm-brown">
                    Правила використання контенту:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <p>
                        <strong className="text-sage-green">Дозволено:</strong>
                      </p>
                      <ul className="space-y-1 pl-4">
                        <li>• Читання та перегляд матеріалів</li>
                        <li>• Поширення посилань на статті</li>
                        <li>• Цитування з зазначенням джерела</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <p>
                        <strong className="text-destructive">
                          Заборонено:
                        </strong>
                      </p>
                      <ul className="space-y-1 pl-4">
                        <li>• Повне копіювання статей</li>
                        <li>• Комерційне використання без дозволу</li>
                        <li>• Зміна авторства матеріалів</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-cream">
                  <span className="font-bold text-warm-brown">6</span>
                </div>
                Відмова від відповідальності
              </h2>
              <div className="leading-relaxed space-y-4 text-foreground">
                <p>
                  Інформація на Сайті надається &quot;як є&quot; і носить
                  виключно інформаційний характер. Ми не несемо відповідальності
                  за:
                </p>
                <div className="space-y-3">
                  {[
                    "Точність, повноту або актуальність інформації",
                    "Збитки, що можуть виникнути від використання інформації",
                    "Роботу зовнішніх посилань та ресурсів",
                    "Тимчасову недоступність Сайту через технічні причини",
                  ].map((disclaimer, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-cream"
                    >
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-cream">
                        <span className="text-xs font-bold text-warm-brown">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-sm">{disclaimer}</p>
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
                Зміни в умовах використання
              </h2>
              <div className="leading-relaxed space-y-4 text-foreground">
                <p>
                  Ми маємо право в будь-який час вносити зміни до цих Умов
                  використання. Користувачі будуть повідомлені про суттєві
                  зміни.
                </p>
                <div className="p-4 rounded-lg border-l-4 bg-muted-green border-sage-green">
                  <p className="text-sm text-foreground">
                    <strong>Рекомендація:</strong> Періодично переглядайте ці
                    Умови, щоб бути в курсі будь-яких змін. Продовження
                    використання Сайту після внесення змін означає ваше
                    погодження з новими умовами.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-cream">
                  <span className="font-bold text-warm-brown">8</span>
                </div>
                Застосовне право
              </h2>
              <div className="leading-relaxed space-y-4 text-foreground">
                <p>
                  Ці Умови використання регулюються законодавством України. Всі
                  спори, що можуть виникнути у зв&apos;язку з використанням
                  Сайту, підлягають розгляду в судах України.
                </p>
                <div className="rounded-lg p-4 bg-muted">
                  <p className="text-sm">
                    У разі виникнення спірних питань, ми рекомендуємо спочатку
                    звернутися до нас для вирішення питання в досудовому
                    порядку.
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
                  Якщо у вас є питання щодо цих Умов використання або пропозиції
                  щодо роботи Сайту, будь ласка, зв&apos;яжіться з нами:
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
