import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = ({username}) => {
  return (
    <div className=" py-5 ">
      <div className="d-flex justify-content-center">
        <Card
          className="p-5 d-flex flex-column align-items-center hero-card w-75 bg-transparent border-0 shadow-lg"
          style={{ minWidth: "300px" }}
        >
          <h2 className="text-center mb-4 bold text-light text-uppercase">Welcome {username}</h2>
          <h5 className="text-light">
            "Securely access your account and explore personalized features.
            Your gateway to a personalized experience awaits. Sign up or log in
            now!"
          </h5>
          <p className="text-center mb-4 text-light pt-3">
            Want's to see your profile{" "}
            <Link to="/profile" className="text-warning text-decoration-none">
              Click here
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
