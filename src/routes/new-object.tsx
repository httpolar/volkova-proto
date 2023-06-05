import { SideBar } from "~/components/sidebar.tsx";

export default function NewObjectView() {
  return (
    <main className="main text-white">
      <div className="mx-auto container-md d-flex p-0">
        <SideBar />

        <div className="new-object-container">
          <h4 className="new-object-info-label">Разместить объект</h4>

          <form>
            <div className="d-flex flex-column">
              <label>Наименование</label>
              <input />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
