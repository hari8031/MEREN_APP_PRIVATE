import Header from "./components/Header";
import { Container } from 'react-bootstrap';
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <Header />
      <ToastContainer/>
      <Container className="my-2 form-parent">
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
