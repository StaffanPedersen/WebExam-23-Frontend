import React, { useState, useContext } from "react";
import { DriverContext } from "../../contexts/DriverContext";
import DriverService from "../../services/DriverService";

const AddDriver = () => {
  const { setDriver } = useContext(DriverContext);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "age":
        setAge(value);
        break;
      case "nationality":
        setNationality(value);
        break;
      case "image":
        setImage(e.currentTarget.files[0]);
        break;
      default:
        break;
    }
  };

  const saveImage = async () => {
    setLoading(true);

    const newDriver = {
      Name: name,
      Age: age,
      Nationality: nationality,
      image: image.name,
    };

    const createdDriver = await DriverService.postDriver(newDriver, image);

    setLoading(false);

    if (createdDriver) {
      setSubmitStatus("Sjåfør lagt til!");

      setName("");
      setAge("");
      setNationality("");
      setImage(null);

      setDriver((prevDriver) => [...prevDriver, createdDriver]);
    }
  };

  return (
    <div className="container w-2 p-3 ">
      <h3>Legg til ny Sjåfør</h3>
      <div className="col">
        <div className="col-md-6">
          <label>Navn:</label>
          <input name="name" onChange={handleChange} type="text" value={name} />
        </div>
        <div className="col-md-6">
          <label>Alder:</label>
          <input name="age" onChange={handleChange} type="number" value={age} />
        </div>
      </div>
      <div className="col">
        <div className="col-md-6">
          <label>Nasjonalitet:</label>
          <input
            name="nationality"
            onChange={handleChange}
            type="text"
            value={nationality}
          />
        </div>
        <div className="col-md-6">
          <label>Bilde</label>
          <input name="image" onChange={handleChange} type="file" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <input
            onClick={saveImage}
            type="button"
            value="Lagre"
            disabled={loading}
          />
          {submitStatus && <p>{submitStatus}</p>}
        </div>
      </div>
    </div>
  );
};

export default AddDriver;
