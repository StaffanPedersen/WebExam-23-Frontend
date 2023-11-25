import DriverList from "../components/Drivers/DriverList";
import DeleteDriver from "../components/Drivers/DeleteDriver";
import AddDriver from "../components/Drivers/AddDriver";
import EditDriver from "../components/Drivers/EditDriver";
import FormContainer from "../components/Drivers/FormContainer";

const DriverAdminPage = () => {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <FormContainer>
            <AddDriver />
          </FormContainer>
        </div>
        <div className="col-lg-4">
          <FormContainer>
            <EditDriver />
          </FormContainer>
        </div>
        <div className="col-lg-4">
          <FormContainer>
            <DeleteDriver />
          </FormContainer>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <DriverList page="driveradminpage" />
        </div>
      </div>
    </section>
  );
};

export default DriverAdminPage;
