import React, { useState,useContext } from 'react'
import { DocData } from "../App";
const DoctorsList = () => {
    const [docDetail,setDocDetail] = useState ({
        name:'',
        speciality:''
    })
    const { detail = [],setDetail } = useContext(DocData);
    const [id,setId] = useState(0)

    const handleChange =(e)=>{
        const {name,value} = e.target
        setDocDetail({
            ...docDetail,
            [name]:value
        })

    }

    const saveData =(e)=>{
        e.preventDefault()
        if(id!=''){
            let res = detail.map((i)=>{
                if (i.id==id){
                    i.name=docDetail.name
                    i.speciality=docDetail.speciality
                }
            
                return i
            })
           
            setDocDetail({
                name:'',
                speciality:''
            })
            setId('')

            setDetail(res)
        }
        
        else{
            setDetail([
                ...detail,{
                id:detail.length+1,
                name:docDetail.name,
                speciality:docDetail.speciality
         } ])
         setDocDetail({
            name:'',
            speciality:''
        })
        setId('')
        }
    }

    const delDoc =(id)=>{
        let resv = detail.filter((i)=>{
            return i.id!=id
        })
        setDetail(resv)
    }

    const editDoc =(id)=>{
        let res = detail.find((i)=>{
            return i.id==id
        })
        setDocDetail(res)
        setId(id)
    }
  return (
    <div>
      <form action="#" method='POST' id='frm' onSubmit={saveData}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} value={docDetail.name}/>
        <label htmlFor="">Speciality</label>
        <input type="text" name="speciality" id="speciality" onChange={handleChange} value={docDetail.speciality}/>
      <input type="submit" value="Save" />
      </form>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Speciality</th>
                <th>Action</th>
            </tr>

        </thead>
        <tbody>
            {detail.map((i,index)=>{
                return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.speciality}</td>
                        <td><button onClick={()=>delDoc(i.id)}>Delete</button></td>
                        <td><button onClick={()=>editDoc(i.id)}>Edit</button></td>

                    </tr>
                )
            })}
        </tbody>
    </table>
    </div>
  )
}

export default DoctorsList
