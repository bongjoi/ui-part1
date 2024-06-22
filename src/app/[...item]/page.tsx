const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
  const path = ["", ...item].join("/");

  return <div>Item Page</div>;
};

export default ItemPage;
