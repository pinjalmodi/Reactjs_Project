import React from 'react'
import { useContext } from 'react'


import {UserData} from "../App"

const PatientsPage = () => {

    const { listData } = useContext(UserData)
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Condition</th>
            </tr>
        </thead>
        <tbody>
          {listData.map((i) => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.condition}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PatientsPage
