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
      setDeleteStatus("Noe gikk galt!");
    }
    setTimeout(() => {
      setDeleteStatus("");
    }, 5000);
  };

  return (
    <div className="container">
      <h3>Slett en sjåfør</h3>
      <div className="row">
        <div className="col-md-6">
          <label>ID til en sjåfør</label>
          <form>
            <input onChange={handleChange} name="id" type="text" />
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <form>
            <input onClick={handleClick} type="button" value="Slett sjåfør" />
          </form>
          {deleteStatus && <p>{deleteStatus}</p>}
        </div>
      </div>
    </div>
  );
};

export default DeleteDriver;
