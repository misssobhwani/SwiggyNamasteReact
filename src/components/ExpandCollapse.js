import React from 'react'

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

// const handleSubNavListObject = (subNav) => {
//   if (subNav[label] && !subNav[subNav])
//     <div className="not-expand">{subNav[label]}</div>;
//   if (subNav[label] && subNav[subNav]) {
//     <div>
//       <div className="expand">{subNav[label]}</div>
//       <div className="expand">{subNav[subNav]}</div>
//     </div>;
//   }
// };



const handleData = (subNav) =>{
   if(subNav.length>0){ //Folder
    {subNav.map((subNavdata,index) => (
      <div className={`expand`} onClick={handleSubNavListObject(subNav)}>{subNav[label]}</div>     
    ))}
   }
} 

// const Card = (dataInfo) =>{
//   return(
//     <div onClick={handleData(dataInfo.subNav)}>{dataInfo.label}</div>
//   )

// }

const handleSubNavListObject = (subNav) => {  
  if (subNav.label && !subNav.subNav)
    return <div className="not-expand">{subNav.label}</div>;
  if (subNav.label && subNav.subNav) {
    return (
      <div>
        <div className="expand">{subNav.label}</div>
        <div className="expand">{subNav.subNav}</div>
      </div>
    );
  }
}

const FolderStructure = ({ resData }) => {
  return (
    <div className="folder-structure">
      <div className="folder-name">{resData.label}</div>
      {resData.subNav.map((subNavData, index) => (
        <div key={index} className="sub-folder">
          {handleSubNavListObject(subNavData)}
          {handleData(subNavData.subNav)}
        </div>
      ))}
    </div>  
  )}

const ExpandCollapse = () => {
  return (
    <div>ExpandCollapse

       {data.map((cardData,index) => (
            <FolderStructure key={index} resData={cardData} />
          ))}
    </div>
  )
}

export default ExpandCollapse