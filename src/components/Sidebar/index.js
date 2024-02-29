import React from "react";
import { Styled } from "./style";
import { Icon } from "react-icons-kit";
import { ic_call } from "react-icons-kit/md/ic_call";

const Sidebar = () => {
  return (
    <>
      <Styled.Bar>
        <div className="call">
          <a href="tel:16889427" className="call-box">
            <div className="icon">
              <Icon size={"60"} icon={ic_call} />
            </div>
            <div>전화 상담</div>
          </a>
        </div>
      </Styled.Bar>
    </>
  );
};

export default Sidebar;
