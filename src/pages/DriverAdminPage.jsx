import DriverList from "../components/Drivers/DriverList";
import DeleteDriver from "../components/Drivers/DeleteDriver";
import AddDriver from "../components/Drivers/AddDriver";
import EditDriver from "../components/Drivers/EditDriver";
import FormContainer from "../components/Drivers/FormContainer";

const DriverAdminPage = () => {
  return (
    <section>
      <FormContainer>
        <AddDriver />
        <EditDriver />
        <DeleteDriver />
      </FormContainer>
      <div className="">
        <DriverList />
      </div>
    </section>
  );
};

export default DriverAdminPage;
