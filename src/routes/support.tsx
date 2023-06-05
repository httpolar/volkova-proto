import { FC } from "react";
import { SideBar } from "~/components/sidebar.tsx";

type ChatLogMessageProps = {
  avatarUrl: string;
  content: string;
};

const ChatLogMessage: FC<ChatLogMessageProps> = ({ avatarUrl, content }) => {
  return (
    <div className="message">
      <img src={avatarUrl} />
      <p>{content}</p>
    </div>
  );
};

export default function SupportView() {
  return (
    <main className="main text-white">
      <div className="mx-auto container-md d-flex py-4">
        <SideBar />

        <div className="support-chat-container mx-auto">
          <div className="support-chat-info mb-2">
            <h3>Служба поддержки</h3>
            <span>Чат с администрацией</span>
          </div>
          <div className="support-chat-log mt-5 mb-2">
            <ChatLogMessage
              avatarUrl="/img/ee1d5e8149ec891d092dbb246ae04aec.jpg"
              content="Добрый день, Чем могу вам помочь?"
            />
            <ChatLogMessage
              avatarUrl="/img/ba1d8547c2f8fbd104375e30cdb2ee85.jpg"
              content="Здравствуйте, я забронировала не ту дату. Как мне это исправить?"
            />
            <ChatLogMessage
              avatarUrl="/img/ee1d5e8149ec891d092dbb246ae04aec.jpg"
              content="Перейдите на вкладку “Мои бронитрования”, и отмените это бронирование. После чего вы можете создать новое на нужные даты."
            />
          </div>
          <div className="support-chat-input-group">
            <input placeholder="Введите сообщение" />
            <button>Отправить</button>
          </div>
        </div>
      </div>
    </main>
  );
}
