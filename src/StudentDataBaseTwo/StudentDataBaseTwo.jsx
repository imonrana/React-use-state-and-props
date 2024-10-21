import React from "react";

const StudentDataBaseTwo = () => {
  // data array
  const header = [
    "Id",
    "Name",
    "Class",
    "Department",
    "Institute Name",
    "Board",
  ];
  const id = ["1", "2", "3", "4"];
  const name = ["imon", "sojib", "sultan", "mimma"];
  const iclass = ["Ten", "Nine", "Seven", "Eight"];
  const department = ["science", "Arts", "General", "General"];
  const institute = "Sirajganj High School";
  const board = "Rajshahi";

  // make data set
  const data = id.map((_, index) => ({
    id: id[index],
    name: name[index],
    iclass: iclass[index],
    department: department[index],
    institute: institute,
    board: board,
  }));


  return (
    <div id="student_data_base_two">
      <table>
        <caption>Student Database Two Only Mapping</caption>
        <thead>
          <tr>
            {
                header.map((headerItem, index) =>(
                    <th key={index}>{headerItem}</th>
                ))
            }
          </tr>
        </thead>
         <tbody>
          {
            data.map((dataItem,index) =>(
               
                <tr key={index}>
                    <td>{dataItem.id}</td>
                    <td>{dataItem.name}</td>
                    <td>{dataItem.iclass}</td>
                    <td>{dataItem.department}</td>
                    <td>{dataItem.institute}</td>
                    <td>{dataItem.board}</td>
          </tr>
            ))
          }
        </tbody> 
      </table>
    </div>
  );
};

export default StudentDataBaseTwo;
