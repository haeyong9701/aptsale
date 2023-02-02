import React from "react";
import { Styled } from "./style";
import { Icon } from "react-icons-kit";
import { ic_mail } from "react-icons-kit/md/ic_mail";
import { ic_call } from "react-icons-kit/md/ic_call";

const Sidebar = () => {
  return (
    <>
      <Styled.Bar>
        <div className="message">
          <a href="sms:01093168671">
            <div className="icon">
              <Icon size={"60"} icon={ic_mail} />
            </div>
            <i class="fa-solid fa-envelope"></i>문자보내기
          </a>
        </div>
        <div className="call">
          <a href="tel:16881206">
            <div className="icon">
              <Icon size={"60"} icon={ic_call} />
            </div>
            전화상담
          </a>
        </div>
      </Styled.Bar>
    </>
  );
};

export default Sidebar;
