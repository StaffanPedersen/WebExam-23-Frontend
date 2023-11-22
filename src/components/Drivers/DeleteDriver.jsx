import { useState, useContext } from "react";
import { DriverContext } from "../../contexts/DriverContext";

const DeleteDriver = () => {
  // const handleChange = () => {
  //   // handlechange is not defined
  // };

  const handleChange = (e) => {
    switch (
      e.currentTarget.name // sjekker hvilket element som er gjort noe med basert på dets name-attributt; satt i JSX
    ) {
      case "title":
        setTitle(e.currentTarget.value);
        break;
      case "image":
        setImage(e.currentTarget.files[0]); // input type file har et array i seg; vårt bilde er på plass 0
        break;
    }
  };

  const handleClick = async () => {
    const doneDelete = await MediaService.deleteDriver(id);
    if (doneDelete === true) {
      setDeleteStatus("Slettet!");
    } else {
      setDeleteStatus("Noe gikk galt!");
    }
    setTimeout(() => {
      setDeleteStatus("");
    }, 5000);
  };

  return (
    <section className="mb-3">
      <h3>Slett en sjåfør</h3>
      <div>
        <label>Id til sjåfør å slette </label>
        <input onChange={handleChange} name="id" type="text" />
      </div>
      <input onClick={handleClick} type="button" value="Slett sjåfør" />
    </section>
  );
};

export default DeleteDriver;
