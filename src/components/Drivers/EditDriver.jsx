import { useContext, useState } from "react";
import { DriverContext } from "../../contexts/DriverContext";

const EditDriver = () => {
  const { getById, editDriver } = useContext(DriverContext);

  const [id, setId] = useState("1");
  const [driverToUpdate, setDriverToUpdate] = useState({ title: "Testtittel" });

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "id":
        setId(e.currentTarget.value);
        break;
      case "title":
        setDriverToUpdate({ ...driverToUpdate, title: e.currentTarget.value });
        console.log("Går inn i title");
        break;
    }
  };

  const getByIdFromContext = async () => {
    const driverFromContext = await getById(id); // henter serien fra Context som igjen henter den fra Service som igjen henter fra Web API
    setDriverToUpdate(driverFromContext);
    console.log(driverFromContext);
  };

  const saveChanges = () => {
    editDriver(driverToUpdate);
  };

  return (
    <section className="mb-3">
      <h3>Rediger sjåfør</h3>
      <div>
        <label>Angi id</label>
        <input onChange={handleChange} name="id" value={id} type="text" />
        <input
          onClick={getByIdFromContext}
          type="button"
          value="Hent etter id"
        />
      </div>
      <div>
        <label>Tittel</label>
        <input
          onChange={handleChange}
          name="title"
          value={driverToUpdate.title}
          type="text"
        />
      </div>
      <input onClick={saveChanges} type="button" value="Lagre endring" />
    </section>
  );
};

export default EditDriver;
