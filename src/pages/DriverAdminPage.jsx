import DriverList from "../components/Drivers/DriverList";
import DeleteDriver from "../components/Drivers/DeleteDriver";
import AddDriver from "../components/Drivers/AddDriver";
import EditDriver from "../components/Drivers/EditDriver";
import FormContainer from "../components/Drivers/FormContainer";

const DriverAdminPage = () => {
  return (
    <section>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <FormContainer>
          <AddDriver />
          <EditDriver />
          <DeleteDriver />
        </FormContainer>
      </div>
      <div className="">
        <DriverList page="driveradminpage" />
      </div>
    </section>
  );
};

export default DriverAdminPage;
