import { sendPasswordResetEmail } from "firebase/auth";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    sendPasswordResetEmail(database, email)
      .then(() => {
        alert("Password reset link sent to your email");
        history("/");
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-white text-3xl font-bold pb-10 text-center transition-all">
        Forgot Password?
      </h1>
      <form
        className="flex flex-col space-y-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          className="w-[300px] border-b-2 bg-transparent border-white focus:bg-transparent focus:border-b text-gray-100 focus:border-gray-500 focus:outline-0 caret-white transition duration-500 ease-in-out active:bg-transparent"
          name="email"
          placeholder="Email"
        />
        <button className="text-white p-2 text-base w-max m-auto font-normal bg-indigo-600 justify-center rounded-md items-center inline-flex transition hover:bg-indigo-800">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
