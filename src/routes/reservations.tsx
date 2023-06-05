import { SideBar } from "~/components/sidebar.tsx";

import lesnoydom from "~/assets/lesnoydom.png";
import { EditIcon } from "lucide-react";

export default function ReservationsView() {
  return (
    <main className="main text-white">
      <div className="mx-auto container-md d-flex p-0 gap-4">
        <SideBar />

        <div className="reservation-container w-100 d-flex flex-column">
          <h4 className="align-self-end fw-bold" style={{ color: "#EE6D52" }}>
            Мои бронирования
          </h4>

          <div className="reservation-card position-relative">
            <div className="d-flex flex-column gap-4">
              <img src={lesnoydom} />

              <button>Отменить бронирование</button>
            </div>
            <div>
              <h4 className="text-white fw-bold mb-2">Лесной дом</h4>
              <p>
                ФИО: Волкова Галина Александровна
                <br />
                +7 961 384 6244
                <br />
                galyavolkova53@gmail.com
                <br />
                Дата пребывания: 10.07.23- 13.07.23
                <br />
                Количество ночей: 3 ночи
                <br />
                Гости: 2<br />
                ФИО гостя: Суменков Максим Алексеевич
                <br />
                Пожелания: Обогреть дом к прибытию
                <br />
                Время пребытия: 15:00-16:00
                <br />
                Правила проживания: курение запрещенно, запрещенно проводить
                вечеринки.
                <br />
                Правила отмены бронирования: бесплатная отмена вплоть до 23:59
                09.07.2023
                <br />
                Общая сумма: 18000 р.
              </p>
            </div>

            <button className="position-absolute end-0 bottom-0 m-4">
              Написать отзыв
            </button>

            <div
              className="position-absolute end-0 top-0 m-4 fw-bold d-flex gap-2"
              style={{ color: "#EE6D52A1" }}
            >
              <EditIcon />
              <span>Редактировать</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
