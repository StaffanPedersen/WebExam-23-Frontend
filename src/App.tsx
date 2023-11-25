import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DriverPage, DriverAdminPage } from "./pages";
import MainNav from "./components/shared/MainNav";
import { DriverProvider } from "./contexts/DriverContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="bg-secondary ">
        <BrowserRouter>
          <MainNav />
          <main className="container  ">
            <DriverProvider>
              <Routes>
                <Route path="/driver" element={<DriverPage />}></Route>
                <Route path="/admin" element={<DriverAdminPage />}></Route>
              </Routes>
            </DriverProvider>
          </main>
          <footer></footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
