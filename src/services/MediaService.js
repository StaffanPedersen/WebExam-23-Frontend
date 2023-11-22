import axios from "axios";

const MediaService = (() => {
  const driverController = "http://localhost:5029/api/drivers";
  const imageUploadController = "http://localhost:5029/api/imageupload";
  const localImageUrl = "/images/drivers";
  //const imageUrl = "http://localhost:5029/images";

  // NB! Man bør ha try catch rundt all koden som gjør axios-kall.
  // Alle funksjonene bør også ha en eller annen form for return. GET returnerer array med serier, GET etter id returnerer ett objekt, POST og PUT og DELETE bør minimum returnere hvorvidt det gikk bra eller dårlig å utføre operasjonen. Dette kan for eksempel være true eller false for å indikere at det har gått greit eller ikke greit.
  const getAll = async () => {
    try {
      const result = await axios.get(driverController);
      return result.data;
    } catch (err) {
      console.log("Ikke kontakt med DriverController");
      return [];
    }
  };

  // TODO
  const getById = async (id) => {
    const result = await axios.get(`${driverController}/${id}`);
    return result.data;
  };

  // TODO
  const putDriver = async (driverToUpdate) => {
    const result = await axios.put(driverController, driverToUpdate);
    console.log(result);
    // hvis dårlig eksempel: { message: "Det gikk dårlig" } / false
  };

  const postDriver = async (newDriver, image) => {
    const formData = new FormData();
    formData.append("file", image);

    const result = await axios.post(driverController, newDriver);

    const resultImageUpload = await axios({
      url: imageUploadController,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    formData.delete("file");
  };

  const getImageUrl = (imageName) => {
    // Construct the local image URL
    return `${localImageUrl}/${imageName}`;
  };

  return {
    getAll,
    postDriver,
    putDriver,
    getById,
    getImageUrl,
  };
})();

export default MediaService;
