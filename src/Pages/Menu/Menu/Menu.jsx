import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuimg from "../../../../../assets/menu/banner3.jpg";
import dessertimg from "../../../../../assets/menu/dessert-bg.jpeg";
import pizzaimg from "../../../../../assets/menu/pizza-bg.jpg";
import soupimg from "../../../../../assets/menu/soup-bg.jpg";
import saladimg from "../../../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Mesa Elegante | Menu</title>
      </Helmet>
      <Cover img={menuimg} tittle={"Our Menu"}></Cover>
      <SectionTittle
        subHeading={"Don't miss"}
        heading={"Today's Offer"}
      ></SectionTittle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={desserts}
        tittle={"Dessert"}
        coverImg={dessertimg}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        tittle={"Pizza"}
        coverImg={pizzaimg}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        tittle={"Salad"}
        coverImg={saladimg}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        tittle={"Soup"}
        coverImg={soupimg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
