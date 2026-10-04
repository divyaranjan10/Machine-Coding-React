import { useEffect, useState } from "react";

const PrintTable = () => {
  const [tableData, setTableData] = useState([]);

  //   earlier we were using count variable to use for multiplication but it was not giviong the correct output due to
  //   react strict moduleRunnerTransform, so now we use prev.length as it is not dependent on a variable and because also
  //   react has control over "prev"

  useEffect(() => {
    const timer = setInterval(() => {
      setTableData((prev) => {
        if (prev.length === 10) {
          clearInterval(timer);
          return prev;
        }

        return [...prev, 2 * (prev.length + 1)];
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {tableData.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </div>
  );
};

export default PrintTable;
