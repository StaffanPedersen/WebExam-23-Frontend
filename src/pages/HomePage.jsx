import DriverItem from "../components/Drivers/DriverItem";
// import DriverList from "../components/Drivers/DriverList";
// import DriverListMin from "../components/Drivers/DriverListMin";

const HomePage = () => {
  return (
    <section>
      <h3>Oversikt over Formel 1 førere</h3>
      <p>Denne listen oppdateres</p>
      <DriverItem />
      {/* <DriverList /> */}
      {/* <DriverListMin /> */}
    </section>
  );
};

export default HomePage;
