import { useAppContext } from "../context/appContext";

const Alert = () => {
  // Importing our global state functionality
  // These are our dynamic values that will change depending on our action
  const { alertType, alertText } = useAppContext();

  const successAlert = () => {
    if (alertType === "success") return;
  };
  // Dynamically shows depending on our state
  return (
    <>
      {successAlert ? (
        <div className="bg-green-900 p-4">{alertText}</div>
      ) : (
        <div className="bg-red-300 p-4">{alertText}</div>
      )}
    </>
  );
};

export default Alert;
