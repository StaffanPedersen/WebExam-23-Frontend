// DriverService.js
import axios from "axios";

const DriverService = (() => {
  const driverController = "http://localhost:5029/api/drivers";
  const imageUploadController = "http://localhost:5029/api/imageupload";
  const localImageUrl = "/images/drivers";

  const getAll = async () => {
    try {
      const result = await axios.get(driverController);
      return result.data;
    } catch (err) {
      console.log("Unable to contact DriverController");
    }
  };

  const getById = async (id) => {
    try {
      const result = await axios.get(`${driverController}/${id}`);
      return result.data;
    } catch (err) {
      console.log(`Unable to get driver with id ${id}`);
      return null;
    }
  };

  const putDriver = async (driverToUpdate) => {
    try {
      const result = await axios.put(
        `${driverController}/${driverToUpdate.id}`,
        driverToUpdate
      );
      return true;
    } catch (err) {
      console.error("Error updating driver:", err);
      return false;
    }
  };

  const postDriver = async (newDriver, image) => {
    let formData;

    try {
      const result = await axios.post(driverController, newDriver);
      formData = new FormData();
      formData.append("formfile", image);

      await axios({
        url: imageUploadController,
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      return result.data;
    } catch (err) {
      console.error("Error posting driver:", err);
      return null;
    } finally {
      if (formData) {
        clearFormData(formData);
      }
    }
  };

  const deleteDriver = async (id) => {
    try {
      const result = await axios.delete(`${driverController}/${id}`);
      return true;
    } catch (err) {
      console.error(`Error deleting driver with id ${id}:`, err);
      return false;
    }
  };

  const getImageUrl = (imageName) => {
    return `${localImageUrl}/${imageName}`;
  };

  const clearFormData = (formData) => {
    for (var pair of formData.entries()) {
      formData.delete(pair[0]);
    }
  };

  return {
    getAll,
    postDriver,
    putDriver,
    getById,
    deleteDriver,
    getImageUrl,
  };
})();

export default DriverService;
