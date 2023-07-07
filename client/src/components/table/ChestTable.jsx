import React from "react";

const ChestTable = ({ data }) => {
  let myArray = [...data.chest_exercises];

  function randomElement() {
    return Math.random(myArray.length - 1);
  }

  return (
    <>
      <tbody className="bg-white">
        <tr className="text-gray-700">
          <td className="px-4 py-3 border">
            <div className="flex items-center text-sm">
              <div>
                <select>
                  {data.chest_exercises.map((chest) => (
                    <option key={chest.name} value="">
                      {chest.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </td>
          <td className="px-4 py-3 text-ms font-semibold border">
            <input
              type="text"
              className="pl-5 py-2 placeholder:text-black"
              placeholder="4"
            />
          </td>
          <td className="px-4 py-3 text-ms font-semibold border">
            <input
              type="text"
              className="pl-5 py-2 placeholder:text-black"
              placeholder="10"
            />
          </td>
          <td className="px-4 py-3 text-ms font-semibold border">
            <input
              type="text"
              className="pl-5 py-2 placeholder:text-black"
              placeholder="50"
            />
          </td>
          <td className="px-4 py-3 text-ms font-semibold border">
            <input
              type="text"
              className="pl-5 py-2 placeholder:text-black"
              placeholder="70"
            />
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ChestTable;
