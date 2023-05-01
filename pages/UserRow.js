import React from 'react'

export default function UserRow(props) {
debugger
const { id, name,  email } = props.user;
  return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
        </tr>
  )
}
