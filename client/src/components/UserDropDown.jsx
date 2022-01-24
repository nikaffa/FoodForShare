import React, { useState } from "react";
import styled from "styled-components";
import useUser from "../hooks/useUser";

export default function UserDropDown() {
  const [selectedOption, setSelectedOption] = useState();
  const { user, changeUser} = useUser();
  
  const onOptionClicked = (event) => {
    setSelectedOption(event.target.value);
    changeUser(event.target.value)
  };

   const users = [
      {id: '1', name: 'User 1'},
      {id: '2', name: 'User 2'},
      {id: '3', name: 'User 3'}
    ]
  
    let userList = users.length > 0
    	&& users.map((item, i) => {
      return (
        <option v={user===item.id && "selected"} key={i} value={item.id}>{item.name}</option>
      )
    }, this);

    return (
      <div>
        <select onChange={onOptionClicked} value={user}>
          {userList}
        </select>
      </div>
    );
}