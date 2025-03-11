import React from "react";

const Table = ({showValue, fields}) => {
  return (
    <div>
      {showValue ? (
        fields.length ? (
          <>
            <h3 className="mt-10 text-lg font-semibold text-tomato">Form State:</h3>
            <table className="w-full border border-neutral-600 mt-2 text-sm md:text-base">
              <thead>
                <tr className="bg-tomato ">
                  <th className="border border-neutral-600 px-4 py-1">Name</th>
                  <th className="border border-neutral-600 px-4 py-1">Gender</th>
                </tr>
              </thead>
              <tbody>
                {fields.map((field) => (
                  <tr key={field.id}>
                    <td className="border border-neutral-600 px-4 py-2">{field.name || "-"}</td>
                    <td className="border border-neutral-600 px-4 py-2">{field.gender || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default Table;
