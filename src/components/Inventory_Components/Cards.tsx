import { useState } from "react";
import { inventoryCardProps } from "./inventoryTypes";

export const InventoryCard = ({
  price,
  img,
  location,
  rating,
  propertyName,
  desc,
  id,
  property,
  handleSelectProperty,
}: inventoryCardProps) => {
  

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={img} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{propertyName}</div>
          <p className="text-gray-700 text-base">{desc}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            $ {price}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {location}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {rating}
          </span>
          <span
            onClick={() => handleSelectProperty(property)}
            className="inline-block bg-sky-500 hover:bg-sky-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            Choose
          </span>
        </div>
      </div>
    </>
  );
};

<span></span>;
