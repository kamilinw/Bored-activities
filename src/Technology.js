const Technology = ({ imgSrc, alt, name }) => {
  return (
    <div className="tech-item">
      <img src={imgSrc} alt={alt} />
      <p>{name}</p>
    </div>
  );
};

export default Technology;
