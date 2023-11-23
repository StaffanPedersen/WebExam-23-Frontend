import React, { useState } from "react";
import MediaService from "../../services/MediaService";

const AddDriver = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [image, setImage] = useState(null);

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

  const saveImage = () => {
    const newDriver = {
      Name: name,
      Age: age,
      Nationality: nationality,
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
        <input name="age" onChange={handleChange} type="number" />
      </div>
      <div>
        <label>Nasjonalitet </label>
        <input name="nationality" onChange={handleChange} type="text" />
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

// import React, { useState } from "react";
// import MediaService from "../../services/MediaService";

// const AddDriver = () => {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [nationality, setNationality] = useState("");
//   const [image, setImage] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.currentTarget;

//     switch (name) {
//       case "name":
//         setName(value);
//         break;
//       case "age":
//         setAge(value);
//         break;
//       case "nationality":
//         setNationality(value);
//         break;
//       case "image":
//         setImage(e.currentTarget.files[0]);
//         break;
//       default:
//         break;
//     }
//   };
//   console.log(image);
//   const saveImage = () => {
//     MediaService.postDriver({ name, age, nationality }, image);
//   };

//   return (
//     <section className="mb-3">
//       <h3>Legg til ny Sjåfør</h3>
//       <div>
//         <label>Name </label>
//         <input name="name" onChange={handleChange} type="text" />
//       </div>
//       <div>
//         <label>Alder </label>
//         <input name="age" onChange={handleChange} type="number" />
//       </div>
//       <div>
//         <label>Nasjonalitet </label>
//         <input name="nationality" onChange={handleChange} type="text" />
//       </div>
//       <div>
//         <label>Bilde</label>
//         <input name="image" onChange={handleChange} type="file" />
//       </div>
//       <input onClick={saveImage} type="button" value="Lagre" />
//     </section>
//   );
// };

// export default AddDriver;

//fgfggf
const saveImage = () => {
  const newDriver = {
    Name: name,
    Age: age,
    Nationality: nationality,
    // insert formFile.FileName with the name of the image

    image: image.name,
  };

  MediaService.postDriver(newDriver, image);
};
