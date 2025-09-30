function Card({ img, title, content }) {
  return (
    <div>
      <div>
        <img className="shadow-2xl" src={img} alt={title} />
      </div>
      <div className="text-xl font-medium mt-5 w-50">{title}</div>
      <div className="text-gray-400 mt-10">{content}</div>
    </div>
  );
}

export default Card;
