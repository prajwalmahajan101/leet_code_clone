import React, { FC } from "react";

type TableHeadProps = {
  cols: string[];
};

const TableHead: FC<TableHeadProps> = ({ cols }) => {
  return (
    <thead className="text-xs  text-gray-700 uppercase dark:text-gray-400 border-b">
      <tr>
        {cols.map((col) => (
          <th scope="col" key={col} className="px-1 py-3 w-0 font-medium">
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
