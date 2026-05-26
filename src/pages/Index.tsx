export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">EXPO*BUILD</div>
        <nav>
          <a href="#">Стенды</a>
          <a href="#">О нас</a>
          <a href="#">Портфолио</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Получить расчёт</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              СТЕНДЫ,
              <br />
              ЧТО <span>РАБОТАЮТ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Проектируем и строим выставочные стенды под ключ. От эскиза до монтажа — ваш бренд будет виден на любой выставке.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать стенд
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть портфолио
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ background: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center center / cover" }}>
            <div className="sticker">
              ПОД
              <br />
              КЛЮЧ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ВЫСТАВКА
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              WOW-ЭФФЕКТ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ВЫСТАВОЧНЫЕ СТЕНДЫ ПОД КЛЮЧ * ПРОЕКТИРОВАНИЕ И МОНТАЖ * ЛЮБАЯ ПЛОЩАДЬ И ФОРМАТ * РАБОТАЕМ ПО ВСЕЙ СТРАНЕ * СРОК ОТ 7 ДНЕЙ *
            ВЫСТАВОЧНЫЕ СТЕНДЫ ПОД КЛЮЧ * ПРОЕКТИРОВАНИЕ И МОНТАЖ * ЛЮБАЯ ПЛОЩАДЬ И ФОРМАТ * РАБОТАЕМ ПО ВСЕЙ СТРАНЕ * СРОК ОТ 7 ДНЕЙ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШИ СТЕНДЫ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все проекты
            </a>
          </div>

          <div className="menu-grid">
            {/* Стенд 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит заказов</span>
              <img
                src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Модульный стенд"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Модульный</h3>
                  <span className="price">от 80 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Быстрый монтаж, многократное использование. Идеально для компаний с регулярными выставками.
                </p>
              </div>
            </div>

            {/* Стенд 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Премиум
              </span>
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Индивидуальный стенд"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Индивидуальный</h3>
                  <span className="price">от 250 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Уникальный дизайн под ваш бренд. Двухэтажные решения, нестандартные конструкции.</p>
              </div>
            </div>

            {/* Стенд 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Мобильный стенд"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Мобильный</h3>
                  <span className="price">от 30 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Лёгкий и компактный. Roll-up, Pop-up конструкции — для любого мероприятия.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">МЫ СТРОИМ. ВЫ ПРОДАЁТЕ.</h2>
            <p className="vibe-text">
              Более 500 стендов построено для компаний из разных отраслей. Мы берём на себя всё — от концепции и дизайна до монтажа и демонтажа на площадке. Вы приходите на выставку и просто делаете бизнес.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О компании
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            НАШИ РАБОТЫ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Стенд 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Стенд 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Стенд 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Стенд 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">EXPO*BUILD</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Строим выставочные стенды под ключ. Проектирование, монтаж, демонтаж — по всей России.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Стенды
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Портфолио
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О компании
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>info@expobuild.ru</li>
            <li>+7 (800) 000-00-00</li>
            <li>Пн–Пт: 9:00 – 19:00</li>
            <li>Сб: 10:00 – 16:00</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
