import { ReactNode } from "react";
import { TitleWrap } from "./styles";

type Props = {
  session: number;
  children: ReactNode;
};

function SessionTitle({ session, children }: Props) {
  return (
    <TitleWrap data-aos="fade-up" data-aos-duration="1000">
      <h2>
        <span className="session-number">
          Session {String(session).padStart(2, "0")}
        </span>
        <span className="session-divider">—</span>
        <span className="session-name">{children}</span>
      </h2>
      <span className="session-rule" aria-hidden="true" />
    </TitleWrap>
  );
}

export default SessionTitle;
