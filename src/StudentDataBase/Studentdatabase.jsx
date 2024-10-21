import React from 'react'

  const Studentdatabase = (props)=>{

    return(
        <div id='student_database'>
            <table>
        <caption>Student Database With Props (Methode)</caption>
        <thead>
        <tr>
        {
            props.header.map(( headerItem, index) =>(
                <th key={index}>{headerItem}</th>
            ))
        }
        </tr>
        </thead>
        <tbody>
           {
             props.data.map((dataItem, index) =>(
                <tr key={index}>
                    <td>{dataItem.id}</td>
                    <td>{dataItem.name}</td>
                    <td>{dataItem.phone}</td>
                    <td>{dataItem.address}</td>
                    
                </tr>
                
             ))
           }
        </tbody>

       </table>
        </div>
    )
}

export default Studentdatabase




    
