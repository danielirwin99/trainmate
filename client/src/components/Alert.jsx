import { useAppContext } from "../context/appContext";

const Alert = () => {
  // Importing our global state functionality
  // These are our dynamic values that will change depending on our action
  const { alertType, alertText } = useAppContext();

  if (alertType === "success") {
    return (
      <div className="bg-green-400 text-white rounded-md mt-4 p-4 bg-opacity-80">
        {alertText}
      </div>
    );
  }

  if (alertType === "danger") {
    return (
      <div className="bg-red-400 text-black rounded-md mt-4 p-4 ">
        {alertText}
      </div>
    );
  }
};

export default Alert;
