const Product = ({ data }) => {
  return (
    <div className="card">
      <img src={data.thumbnail} alt={data.title} />
      <div className="card_details">
        <div className="card_title">{data.title}</div>
        <div className="card_price">{data.price}</div>
      </div>
    </div>
  );
};

export default Product;
