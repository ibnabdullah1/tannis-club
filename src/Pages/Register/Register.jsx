import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
const Register = () => {
  const [error, setError] = useState("");

  const { createUser, handleUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const img = e.target.img.value;
    console.log(email, password, name, img);
    setError("");
    if (
      password.length < 6 ||
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
    ) {
      setError(
        "Invalid password. Password must have at least 6 characters, one capital letter, and one special character."
      );
      return;
    } else {
      setError("");
    }

    // creating a new user
    createUser(email, password)
      .then(() => {
        handleUpdateProfile(name, img).then(() => {
          toast.success("User created successfully");
          navigate("/");
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-[#f3f3f3] min-h-screen ">
      <div className="py-20">
        <div className="max-w-2xl mx-auto bg-white py-24 px-10 ">
          <h1 className="text-3xl font-bold text-center mb-10">
            Register your account
          </h1>

          <form onSubmit={handleRegister}>
            <label className="label">
              <span className="label-text text-xl text-[#403F3F] font-semibold">
                Your Name
              </span>
            </label>
            <input
              className="bg-[#f3f3f3] w-full pl-5 py-4 rounded-md mb-6"
              type="text"
              name="name"
              placeholder="Enter your name"
              id=""
            />
            <br />
            <label className="label">
              <span className="label-text text-xl text-[#403F3F] font-semibold">
                Photo URL
              </span>
            </label>
            <input
              className="bg-[#f3f3f3] w-full pl-5 py-4 rounded-md mb-6"
              type="text"
              name="img"
              id=""
              placeholder="Enter your photo URL"
            />
            <br />
            <label className="label">
              <span className="label-text text-xl text-[#403F3F] font-semibold">
                Email address
              </span>
            </label>
            <input
              className="bg-[#f3f3f3] w-full pl-5 py-4 rounded-md mb-3"
              type="email"
              name="email"
              id=""
              placeholder="Enter your email address"
            />
            <br />
            <label className="label">
              <span className="label-text text-xl text-[#403F3F] font-semibold">
                Password
              </span>
            </label>
            <input
              className="bg-[#f3f3f3] w-full pl-5 py-4 mb-3 rounded-md"
              type="password"
              name="password"
              id=""
              placeholder="Enter your password"
            />
            <br />

            <button className="bg-[#403F3F] mb-4 rounded-md w-full flex justify-center items-center text-white font-medium py-2 ">
              Register
            </button>
            {error && (
              <p className=" text-left text-[#f9645b] mb-2 font-medium">
                {error}
              </p>
            )}
            <p className="text-[#706F6F] font-medium">
              Already registered?
              <Link to={"/login"}>
                <span className="text-[#f9645b] font-medium">Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
