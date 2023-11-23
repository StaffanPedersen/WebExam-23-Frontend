import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  DriverPage,
  DriverAdminPage,
  DeleteDriverPage,
} from "./pages";
import MainNav from "./components/shared/MainNav";
import { DriverProvider } from "./contexts/DriverContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <MainNav />
          <main className="container">
            <DriverProvider>
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/driver" element={<DriverPage />}></Route>
                <Route path="/admin" element={<DriverAdminPage />}></Route>
                <Route
                  path="deletedriver"
                  element={<DeleteDriverPage />}
                ></Route>
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
