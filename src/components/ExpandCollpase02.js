import React, { useState } from 'react';

const data = [
  {
    label: "nav1",
    subNav: [
      { label: "nav1.1", subNav: [{ label: "nav1.1.1" }] },
      { label: "nav1.2" },
      {
        label: "nav1.3",
        subNav: [{ label: "nav1.3.1" }]
      }
    ]
  },
  {
    label: "nav2",
    subNav: [
      { label: "nav2.1" },
      { label: "nav2.2" },
      {
        label: "nav2.3",
        subNav: [{ label: "nav2.3.1" }]
      }
    ]
  }
];

// Recursive Folder component
const Folder = ({ node }) => {
  const hasChildren = node.subNav && node.subNav.length > 0;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    if (hasChildren) setIsExpanded(prev => !prev);
  };

  return (
    <div className={`node ${hasChildren ? 'folder' : 'file'} ${isExpanded ? 'expand' : 'collapse'}`}>
      <div onClick={toggleExpand} className="label">
        {node.label}
      </div>

      {hasChildren && isExpanded && (
        <div className="children" style={{ paddingLeft: '20px' }}>
          {node.subNav.map((child, index) => (
            <Folder key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const ExpandCollapse02 = () => {
  return (
    <div>
      <h2>Folder Structure</h2>
      {data.map((root, index) => (
        <Folder key={index} node={root} />
      ))}
    </div>
  );
};

export default ExpandCollapse02;
