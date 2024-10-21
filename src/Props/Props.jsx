import React from 'react'
import Studentdatabase from '../StudentDataBase/Studentdatabase';

const Props = () => {
    const header = ["ID", "Name", "Phone", "Address"];
    const name = ["Imon", "Hasan", "Rubel", "Sobuj", "sami" ];
    const id = ["01", "02", "03", "04", "05"];
    const phone = ["01762561353", "01759785314", "01758942597", "017589512458", "01789561545"];
    const address = ["Sirajganj", "Gazipur", "Dhanmondi", "Framgate", "Bramonbaria"];

    // make data set 
    const data = name.map((_, index) =>({
        id : id[index],
        name: name[index],
        phone: phone[index],
        address: address[index]
        }))

        

 
  return (
    
    <div>

        {
            <Studentdatabase header = {header} data= {data}/>
        }
        
    </div>
  )
}





export default Props