import { SideBar } from "~/components/sidebar.tsx";

import chooseDestination from "~/assets/choose-destination.png";
import reservationPng from "~/assets/reservation.png";
import getPlaneTicketPng from "~/assets/get-plane-ticket.png";
import pyramids from "~/assets/piramidy-gizy.jpg";
import china from "~/assets/china.jpg";
import hotels from "~/assets/hotels.jpg";
import apartaments from "~/assets/apartaments.jpg";
import resort from "~/assets/resort.jpg";
import villa from "~/assets/villa.jpg";

export default function HomeView() {
  return (
    <main className="main d-flex flex-column">
      <div className="container-md d-flex flex-column position-relative">
        <SideBar
          style={{ width: "fit-content" }}
          className="position-absolute start-0 top-0"
        />

        <section
          style={{ height: "calc(100vh - var(--header-height))" }}
          className="text-white d-flex flex-column justify-content-center align-items-center"
        >
          <h1 style={{ fontSize: "3.5rem" }} className="fw-bold">
            Найди жильё с комфортом
          </h1>
          <p style={{ color: "#5C6272" }}>Сделайте вашу поездку незабываемой</p>

          <form className="home-search-form mt-4">
            <div className="home-search-form-input-group">
              <input placeholder="КУДА ХОТИТЕ ПОЕХАТЬ?" />
              <input placeholder="ДАТА ЗАЕЗДА - ДАТА ОТЪЕЗДА" />
              <input placeholder="2 взрослых - 1 ребенок - 1 номер" />
            </div>
            <button type="submit">Искать</button>
          </form>
        </section>
      </div>

      <section className="home-what-to-do">
        <div className="container-md d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="fw-bold text-white">Что делать?</h1>
            <p style={{ color: "rgba(255,255,255,0.5)" }}>
              Следуйте нашим инструкциям и путешествуйте по миру с удовольствием
            </p>
          </div>
          <div className="home-what-to-do-cards mt-5">
            <div className="home-what-to-do-card">
              <figure>
                <img src={chooseDestination} />
              </figure>
              <h4>Выберите пункт назначения</h4>
              <p>Сначала выберете место, которое хотите посетить</p>
            </div>
            <div className="home-what-to-do-card">
              <figure>
                <img src={reservationPng} />
              </figure>
              <h4>Забронируйте жилье</h4>
              <p>Забронируйте жилье на нашем сайте</p>
            </div>
            <div className="home-what-to-do-card">
              <figure>
                <img src={getPlaneTicketPng} />
              </figure>
              <h4>Возьмите свой рейс</h4>
              <p>Оформите рейс на выбранные даты, и наслаждайтесь</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-details">
        <div className="container-md">
          <div className="home-details-explore-with-us">
            <h1 className="fw-bold">
              Иследуйте все уголки мира вместе с нами.
            </h1>
            <p style={{ color: "#5C6272" }}>
              ТОП 10 достопримечательностей разных стран, от пирамиды Гизы до
              Сиднейского оперного театра
            </p>

            <div className="home-details-explore-with-us-card">
              <img src={pyramids} alt="Пирамиды Гизы" />

              <div className="home-details-explore-with-us-card-body">
                <h3 className="fw-bold">Пирамиды Гизы, Египет</h3>
                <p className="home-details-explore-with-us-card-description">
                  Пирамиды в Гизе являются старейшими и крупнейшими пирамидами в
                  мире, но главное, что пирамида Хеопса, единственный из Семи
                  чудес древнего мира дошедшая до наших дней.
                </p>
              </div>
            </div>

            <div className="home-details-explore-with-us-card">
              <img src={china} alt="Великая Китайская стена, Китай" />

              <div className="home-details-explore-with-us-card-body">
                <h3 className="fw-bold">Великая Китайская стена, Китай</h3>
                <p className="home-details-explore-with-us-card-description">
                  Вели́кая Кита́йская стена́ — разделительная стена длиной почти
                  9000 км, построенная в древнем Китае и являющаяся крупнейшим
                  памятником архитектуры.
                </p>
              </div>
            </div>
          </div>

          <div className="home-details-section-heading ">
            <h3>Типы размещений</h3>
            <p>Подбери подходящий вариант для своей поездки</p>
          </div>

          <div className="home-accommodation-cards">
            <div className="home-accommodation-card">
              <img src={hotels} />
              <h4>Отели</h4>
            </div>

            <div className="home-accommodation-card">
              <img src={apartaments} />
              <h4>Апартаменты</h4>
            </div>

            <div className="home-accommodation-card">
              <img src={resort} />
              <h4>Курорты</h4>
            </div>

            <div className="home-accommodation-card">
              <img src={villa} />
              <h4>Виллы</h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
