import React, { useState } from "react";
import chest_exercises from "../../mock_data/exercises.json";
import ChestTable from "../../components/table/ChestTable";

const Chest = () => {
  const [data, setData] = useState(chest_exercises);
  return (
    <div className="exerciseLayout">
      <h1 className="text-4xl font-bold mt-10 text-[#fee4c3]">Chest Day</h1>

      <table className="w-4/5 mt-5">
        <thead>
          <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th className="px-4 py-3">Exercise</th>
            <th className="px-4 py-3">Sets</th>
            <th className="px-4 py-3">Reps</th>
            <th className="px-4 py-3">Weight (KG)</th>
            <th className="px-4 py-3">Previous Best (KG)</th>
          </tr>
        </thead>
        <ChestTable data={data} />
        <ChestTable data={data} />
        <ChestTable data={data} />
        <ChestTable data={data} />
        <ChestTable data={data} />
        <ChestTable data={data} />
        <ChestTable data={data} />
      </table>
    </div>
  );
};

export default Chest;
