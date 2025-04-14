import React, { useState,useContext } from 'react'
import { UserData } from "../App";

const PatientsList = () => {

    const { listData = [],setListData } = useContext(UserData);
    const [patient,setPatient] = useState({
        name:"",
        age:"",
        condition:''
    })
    
    const [id,setId] = useState(0)

    const handleChange = (e)=>{
        const {name , value} = e.target
        setPatient({
            ...patient,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault()

        if(id!=''){
            //update
           let res = listData.map((i)=>{
                if(i.id==id){
                   i.name=patient.name
                   i.age=patient.age
                   i.condition=patient.condition
                }
                return i
            })
            setPatient({
          
                name:'',
                age:'',
                condition:''
            })
            setId('')
            setListData(res)
        }
        else{
            //insert
            setListData([
                ...listData,{
                id:listData.length+1,
                name:patient.name,
                age:patient.age,
                condition:patient.condition

                }
            ])
            setPatient({
                
                name:'',
                age:'',
                condition:''
            })
            setId('')
        }
    }

    const delPatient =(id)=>{
        let res = listData.filter((i)=>{
            return i.id!=id
            
        })
        setListData(res)
       
    }


    const editPatient =(id)=>{
        let res = listData.find((i)=>{
            return i.id==id
            
        })
        setPatient(res)
        setId(id)
       
    }
  return (
    <div>
      <form action="#" method='POST' id='frm' onSubmit={saveData}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="name"  onChange={handleChange} value={patient.name}/>
        <label htmlFor="">Age</label>
        <input type="text" name="age" id="age"  onChange={handleChange} value={patient.age}/>
        <label htmlFor="">Condition</label>
        <input type="text" name="condition" id="condition"  onChange={handleChange} value={patient.condition}/>
        <input type="submit" value="Save" />
      </form>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Condition</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
                    {listData.map((i)=>{
                        return(
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>{i.condition}</td>
                                <td><button onClick={()=>delPatient(i.id)}>Delete</button></td>
                                <td><button onClick={()=>editPatient(i.id)}>Edit</button></td>
                            
                            </tr>
                        )
                    })}
        </tbody>
      </table>
    </div>
  )
}

export default PatientsList
