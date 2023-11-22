import DriverList from "../components/Drivers/DriverList";
import AddDriver from "../components/Drivers/AddDriver";
import EditDriver from "../components/Drivers/EditDriver";

const DriverAdminPage = () => {
  return (
    <>
      <AddDriver />
      <EditDriver />
      <DriverList />
    </>
  );
};

export default DriverAdminPage;
