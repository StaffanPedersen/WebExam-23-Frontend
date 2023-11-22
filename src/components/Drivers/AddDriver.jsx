import { useEffect, useState } from "react";
import MediaService from "../../services/MediaService"; // Burde dette egentlig gå gjennom Context????

const AddDriver = () => {
  const [name, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const name = e.currentTarget.name;

    switch (name) {
      case "name":
        setTitle(e.currentTarget.value);
        break;
      case "image":
        setImage(e.currentTarget.files[0]);
        break;
    }
  };

  const saveImage = () => {
    const newDriver = {
      Name: name,

      image: image.name,
    };

    MediaService.postDriver(newDriver, image);
  };

  return (
    <section className="mb-3">
      <h3>Legg til ny Sjåfør</h3>
      <div>
        <label>Name </label>
        <input name="name" onChange={handleChange} type="text" />
      </div>
      <div>
        <label>Alder </label>
        <input name="name" onChange={handleChange} type="int" />
      </div>
      <div>
        <label>Nasjonalitet </label>
        <input name="name" onChange={handleChange} type="text" />
      </div>
      <div>
        <label>Bilde</label>
        <input name="image" onChange={handleChange} type="file" />
      </div>
      <input onClick={saveImage} type="button" value="Lagre" />
    </section>
  );
};

export default AddDriver;
