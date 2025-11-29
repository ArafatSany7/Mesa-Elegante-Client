import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuimg from "../../../../../assets/menu/banner3.jpg";
import PopularMenu from "./../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Mesa Elegante | Menu</title>
      </Helmet>
      <Cover img={menuimg} tittle={"Our Menu"}></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuimg} tittle={"Our Menu"}></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuimg} tittle={"Our Menu"}></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
