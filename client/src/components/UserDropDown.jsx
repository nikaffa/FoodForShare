import React, { useState } from "react";
import useUser from "../hooks/useUser";

export default function UserDropDown() {
  const [selectedOption, setSelectedOption] = useState();
  const { user, changeUser} = useUser();
  
  const onOptionClicked = (event) => {
    setSelectedOption(event.target.value);
    changeUser(event.target.value)
  };

   const users = [
      {id: '1', name: 'Restaurant'},
      {id: '2', name: 'Charity'}
    ]
  
    let userList = users.length > 0
    	&& users.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
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