import React from 'react'

export default function UserRow(props) {
debugger
// const { id, name, username, email } = user;
  return (
        <tr>
            <td>{props.user.id}</td>
            <td>{props.user.name}</td>
            <td>{props.user.name}</td>
            <td>{props.user.email}</td>
        </tr>
  )
}
