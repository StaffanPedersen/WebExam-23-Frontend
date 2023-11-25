import React, { useState, useContext } from "react";
import { DriverContext } from "../../contexts/DriverContext";

const EditDriver = () => {
  const { getById, editDriver } = useContext(DriverContext);

  const [id, setId] = useState("");
  const [driverToUpdate, setDriverToUpdate] = useState({
    id: "",
    name: "",
    age: 0,
    nationality: "",
    image: "",
  });

  const handleIdChange = (e) => {
    setId(e.currentTarget.value);
  };

  const getByIdFromContext = async () => {
    const driverFromContext = await getById(id);

    setDriverToUpdate({
      id: driverFromContext ? driverFromContext.id : "",
      name: driverFromContext ? driverFromContext.name : "",
      age: driverFromContext ? driverFromContext.age : 0,
      nationality: driverFromContext ? driverFromContext.nationality : "",
      image: driverFromContext ? driverFromContext.image : "",
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.currentTarget;
    setDriverToUpdate({ ...driverToUpdate, [name]: value });
  };

  const saveChanges = async () => {
    await editDriver(driverToUpdate);
  };

  return (
    <section className="mb-3 ">
      <h3>Endre sjåfør</h3>
      <div>
        <label>Enter ID</label>
        <input onChange={handleIdChange} name="id" value={id} type="text" />
        <button onClick={getByIdFromContext}>Hent etter ID</button>
      </div>
      <div>
        <label>Navn</label>
        <input
          onChange={handleFormChange}
          name="name"
          value={driverToUpdate.name}
          type="text"
        />
      </div>
      <div>
        <label>Alder</label>
        <input
          onChange={handleFormChange}
          name="age"
          value={driverToUpdate.age}
          type="number"
        />
      </div>
      <div>
        <label>Nationalitet</label>
        <input
          onChange={handleFormChange}
          name="nationality"
          value={driverToUpdate.nationality}
          type="text"
        />
      </div>
      <div>
        <label>Bilde</label>
        <input
          onChange={handleFormChange}
          name="image"
          value={driverToUpdate.image}
          type="text"
        />
      </div>
      <button onClick={saveChanges}>Lagre endringer</button>
    </section>
  );
};

export default EditDriver;
