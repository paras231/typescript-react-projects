import { useState } from "react";
import { InventoryCard } from "./Cards";
import { listData } from "./inventoryData";
import Searchbar from "./Searchbar";

const InventoryGridList = () => {
  const [query, setQuery] = useState("");
  const [selectedProperty, setSelectedProperty] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  const handleSelectProperty = (property: any) => {
    const propertyIndex = selectedProperty.findIndex(
      (p) => p.id === property.id
    );
    if (propertyIndex > -1) {
      setSelectedProperty(selectedProperty.filter((p) => p.id !== property.id));
    } else if (selectedProperty.length < 3) {
      setSelectedProperty([...selectedProperty, property]);
    }
  };
console.log(selectedProperty);

  return (
    <>
      <div className="container mx-auto  mt-20 w-full px-4">
        <center>
          <Searchbar query={query} onChange={handleChange} />
        </center>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {listData.map((value, index) => {
            return (
              <div key={value.id}>
                <div className="cursor-pointer">
                  <InventoryCard
                    price={value.price}
                    img={value.img}
                    location={value.location}
                    propertyName={value.propertyName}
                    desc={value.desc}
                    rating={value.rating}
                    id={value.id}
                    handleSelectProperty={handleSelectProperty}
                    property={value}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InventoryGridList;
