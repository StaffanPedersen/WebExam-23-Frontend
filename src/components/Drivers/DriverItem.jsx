// Import your MediaService module here

const DriverItem = ({ name, nationality, age, image }) => {
  return (
    <article className="col-12 col-sm-6 col-md-4 col-lg-3 bg-success">
      <div className="border text-center h-100">
        <h3>{name}</h3>
        <div>
          <p>Nationalitet: {nationality}</p>
          <p>Alder: {age}</p>
        </div>
        <img
          className="img-fluid"
          src={`http://localhost:5029/images/drivers/${image}`}
          alt=""
        />
      </div>
    </article>
  );
};

export default DriverItem;
