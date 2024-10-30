// Table.jsx
import React from "react";

const Table = ({ headers, rows, isModulTable = false }) => {
  return (
    <div className="table-shape w-full p-0.5 bg-bluesky rounded-[26px]">
      <div className="table-body-container w-full overflow-x-auto rounded-3xl bg-whiteLayer-3">
        <table className="w-full border-collapse">
          {/* Table Head */}
          <thead className="bg-blackLayer-1 text-primary">
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="px-2.5 py-1.5 text-center">
                  <span className="text-lb-sm">{header}</span>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${rowIndex % 2 === 0 ? "bg-whiteLayer-2" : "bg-[#FFF9ED]"} text-center`}
              >
                {isModulTable ? (
                  <>
                    <td className="thumbnail-container flex h-24 max-w-xs flex-col items-center p-2.5">
                      <img
                        className="thumbnail h-full w-full max-w-[160px] rounded-md border-2 border-dark-100 bg-gray-600 object-cover"
                        src={row.thumbnail}
                        alt="Thumbnail"
                      />
                    </td>
                    <td className="px-2.5 py-1.5">
                      <span className="text-lb-sm">{row.title}</span>
                    </td>
                    <td className="px-2.5 py-1.5">
                      <span className="text-lb-sm">{row.date}</span>
                    </td>
                    <td className="px-2.5 py-1.5">
                      <span className="text-lb-sm">{row.views}</span>
                    </td>
                  </>
                ) : (
                  row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-2.5 py-1.5">
                      <span className="text-lb-sm">{cell}</span>
                    </td>
                  ))
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
