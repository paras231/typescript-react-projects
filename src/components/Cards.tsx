import { useEffect, useContext } from "react";
import { UserContext } from "../context/TestContext";
import { ApiContext } from "../context/ApiContext";
type produtCardProps = {
  desc: string;
  title: string;
  img: string;
  price: number;
};
export const ProductCard = ({ desc, title, img, price }: produtCardProps) => {
  return (
    <>
      <div>
        <img src={img} alt="productimg" />
        <span>{title}</span>
        <p>{desc}</p>
        <b>$ {price}</b>
      </div>
    </>
  );
};

export const UserProfile = () => {
  const { username } = useContext(UserContext);
  console.log(username);

  const { data, loading } = useContext(ApiContext);
  console.log(data);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return <></>;
};
