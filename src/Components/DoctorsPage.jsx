import React from 'react'
import { useContext } from 'react'
import { DocData } from '../App'

const DoctorsPage = () => {

    const { detail } = useContext(DocData) 
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Speciality</th>
                
            </tr>
        </thead>
        <tbody>
          {detail.map((i) => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.speciality}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DoctorsPage
