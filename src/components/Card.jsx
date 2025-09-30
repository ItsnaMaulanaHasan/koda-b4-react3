function Card({ img, title, content }) {
  return (
    <div className="transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <div>
        <img className="shadow-2xl" src={img} alt={title} />
      </div>
      <div className="text-xl font-medium mt-5 w-50">{title}</div>
      <div className="text-gray-400 mt-10">{content}</div>
    </div>
  );
}

export default Card;
