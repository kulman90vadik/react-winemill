import { useContext } from "react";
import "./cards.scss";
import Loader from "./Loader";
import Card from "./Card";
import AppContext from "../context";
import FilterNavigation from "./FilterNavigation";

const Cards = () => {

  const { collections } = useContext(AppContext);
  const { loading } = useContext(AppContext);
  const { searchCity } = useContext(AppContext);



  return (
    <div className="cards">
      <FilterNavigation />
      <ul className="cards__list">
        {loading
          ?
          [...Array(10)].map((item, i) => <Loader key={i} />)
          :
          collections
            .filter((obj) => {
              return obj.country.toLowerCase().includes(searchCity.toLowerCase());
            })
            .map((item) => (

              <Card
                key={item.id}
                item={item}
              />
            ))

        }
      </ul>
    </div>
  );
};

export default Cards;
