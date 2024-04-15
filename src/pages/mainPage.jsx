import React, { useState } from 'react';
import './mainPage.css'; // Import CSS file for styling

function CheckList() {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isChecked, setIsChecked] = useState({
    point1: false,
    point2: false,
    point3: false,
    point4: false
  });

  const points = [
    { id: "point1", label: "Page 1" },
    { id: "point2", label: "Page 2" },
    { id: "point3", label: "Page 3" },
    { id: "point4", label: "Page 4" }
  ];

  const handleCheckAll = () => {
    setIsCheckedAll(!isCheckedAll);
    setIsChecked({
      point1: !isCheckedAll,
      point2: !isCheckedAll,
      point3: !isCheckedAll,
      point4: !isCheckedAll
    });
  };

  const handleDone = () => {
    setIsCheckedAll(false);
    setIsChecked({
      point1: false,
      point2: false,
      point3: false,
      point4: false
    });
  };

  const handleCheckboxChange = (pointId) => {
    setIsChecked({
      ...isChecked,
      [pointId]: !isChecked[pointId]
    });
  };

  return (
    <div className="container shadow">
      <div className="checklist">
        <h1 style={{ fontSize: "14px", display: "flex", justifyContent: "space-between" }}>
          <span>All Pages</span>
          <input
            type="checkbox"
            checked={isCheckedAll}
            onChange={handleCheckAll}
          />
        </h1>
        <div className="divider"></div>
        <ul>
          {points.map(point => (
            <li key={point.id} style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{point.label}</span>
              <input
                type="checkbox"
                checked={isChecked[point.id]}
                onChange={() => handleCheckboxChange(point.id)}
              />
            </li>
          ))}
        </ul>
        <div className="divider"></div>
        <button onClick={handleDone} style={{width:"100%",color:"black",fontFamily:"Montserrat"}}>Done</button>
      </div>
    </div>
  );
}

export default CheckList;
