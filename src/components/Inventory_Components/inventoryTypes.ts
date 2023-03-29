export type inventoryCardProps = {
  price: number;
  propertyName: string;
  location: string;
  rating: number;
  img: string;
  desc: string;
  id: number;
  handleSelectProperty:any,
  property:object
};

export type searchBarProps = {
  query: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
