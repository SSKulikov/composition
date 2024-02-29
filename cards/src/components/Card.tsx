interface ICardProps {
    img?: string;
    children: React.ReactNode;
  }
  
  const Card = ({ img, children }: ICardProps) => {
    return (
      <div className="card" style={{ width: "18rem" }}>
        {img ? <img src={img} className="card-img-top" alt="img" /> : ""}
        <div className="card-body">{children}</div>
      </div>
    );
  };
  
  export default Card;