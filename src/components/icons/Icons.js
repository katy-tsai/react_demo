import Layout1Svg from "./svg/Layout1Svg";
import Layout2Svg from "./svg/Layout2Svg";
import Layout3Svg from "./svg/Layout3Svg"

export const Layout1Icon = ({ className, onClick }) => (
  <i className={["icons", className].join(" ")} onClick={onClick}>
    <Layout1Svg />
  </i>
);

export const Layout2Icon = ({ className, onClick }) => (
  <i className={["icons", className].join(" ")} onClick={onClick}>
    <Layout2Svg />
  </i>
);


export const Layout3Icon = ({ className, onClick }) => (
  <i className={["icons", className].join(" ")} onClick={onClick}>
    <Layout3Svg />
  </i>
);
