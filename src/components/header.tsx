import { Header } from "antd/es/layout/layout";
import type { MenuProps } from "antd";
import { Menu, Row } from "antd";
import { Link } from "react-router-dom";
import waves_logo from "../assets/waves.svg";

const SimpleHeader = () => {
  const items: MenuProps["items"] = [
    {
      label: <Link to="/mastering">Mastering</Link>,
      key: "mastering",
    },
    {
      label: <Link to="/pricing">Pricing</Link>,
      key: "pricing",
    },
    {
      label: <Link to="/distribution">Distribution</Link>,
      key: "distribution",
    },
  ];
  return (
    <Header>
      <Row align="middle">
        <svg
          width="28"
          height="22"
          viewBox="0 0 28 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="27.2222" height="22" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_2445_13487"
                transform="matrix(0.0185185 0 0 0.0229143 0 -0.00523754)"
              />
            </pattern>
            <image
              id="image0_2445_13487"
              width="54"
              height="56"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>{" "}
        <Menu
        
        color="red"
          theme="dark"
          items={items}
          mode="horizontal"
        />
      </Row>
    </Header>
  );
};

export default SimpleHeader;
