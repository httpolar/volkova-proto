import { SideBar } from "~/components/sidebar.tsx";

export default function SettingsView() {
  return (
    <main className="main text-white">
      <div className="mx-auto container-md d-flex p-0 gap-4">
        <SideBar />

        <div
          className="settings-container"
          style={{ width: "100%", height: "fit-content" }}
        >
          <div>
            <h4>Настройки аккаунта</h4>
            <p style={{ color: "#78778B" }}>Внести изменения</p>
          </div>

          <h4 className="mt-4">Персональная информация</h4>

          <form className="mt-2 mb-5">
            <div className="input-group">
              <label>Имя</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Фамилия</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Дата рождения</label>
              <input type="date" />
            </div>

            <div className="input-group">
              <label>Номер телефона</label>
              <input type="tel" />
            </div>

            <div className="input-group">
              <label>e-mail</label>
              <input type="email" />
            </div>

            <div className="credit-card-group">
              <div className="input-group">
                <label>Номер карты</label>
                <input type="text" />
              </div>
              <div className="input-group">
                <label>Срок</label>
                <input type="text" />
              </div>
              <div className="input-group">
                <label>CVV</label>
                <input type="password" />
              </div>
            </div>

            <div className="input-group">
              <label>Новый пароль</label>
              <input type="password" />
            </div>

            <div className="input-group">
              <label>Повторите новый пароль</label>
              <input type="password" />
            </div>
          </form>

          <button type="submit">Сохранить</button>
        </div>
      </div>
    </main>
  );
}
