import React from "react";

const DriverItem = ({ id, name, nationality, age, image, showId }) => {
  return (
    <article className=" col-12 col-sm-6 col-md-4 col-lg-3 bg-success m-4 rounded p-10">
      <div className="  text-center h-100">
        {showId && <h4 className="bg-danger">ID:{id}</h4>}
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
