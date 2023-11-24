import { useState, useContext } from "react";
import DriverService from "../../services/DriverService";
import { DriverContext } from "../../contexts/DriverContext";

const DeleteDriver = () => {
  const [id, setId] = useState("");
  const [deleteStatus, setDeleteStatus] = useState("");
  const { getDriverFromService } = useContext(DriverContext);

  const handleChange = (e) => {
    setId(e.currentTarget.value);
  };

  const handleClick = async () => {
    const doneDelete = await DriverService.deleteDriver(id);
    if (doneDelete === true) {
      setDeleteStatus("Driver deleted!");

      await getDriverFromService();
    } else {
      setDeleteStatus("Something went wrong!");
    }
    setTimeout(() => {
      setDeleteStatus("");
    }, 5000);
  };

  return (
    <section className="mb-3">
      <h3>Delete a driver</h3>
      <div>
        <label>Driver ID to delete</label>
        <input onChange={handleChange} name="id" type="text" />
      </div>
      <input onClick={handleClick} type="button" value="Delete driver" />
      {deleteStatus && <p>{deleteStatus}</p>}
    </section>
  );
};

export default DeleteDriver;
