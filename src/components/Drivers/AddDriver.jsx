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

  // AddDriver.jsx
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
      setSubmitStatus("Driver added successfully!");

      setName("");
      setAge("");
      setNationality("");
      setImage(null);

      setDriver((prevDriver) => [...prevDriver, createdDriver]);
    } else {
      setSubmitStatus("Error adding driver. Please try again later.");
    }
  };

  return (
    <section className="mb-3">
      <h3>Legg til ny Sjåfør</h3>
      <div>
        <label>Navn:</label>
        <input name="name" onChange={handleChange} type="text" value={name} />
      </div>
      <div>
        <label>Alder:</label>
        <input name="age" onChange={handleChange} type="number" value={age} />
      </div>
      <div>
        <label>Nasjonalitet:</label>
        <input
          name="nationality"
          onChange={handleChange}
          type="text"
          value={nationality}
        />
      </div>
      <div>
        <label>Bilde</label>
        <input name="image" onChange={handleChange} type="file" />
      </div>
      <input
        onClick={saveImage}
        type="button"
        value="Lagre"
        disabled={loading}
      />
      {loading && <p>Loading...</p>}
      {submitStatus && <p>{submitStatus}</p>}
    </section>
  );
};

export default AddDriver;
