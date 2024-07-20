import { useState } from "react";
import { useMutation } from "@apollo/client";

function DeleteUser() {
  const [id, setId] = useState("");
  const [deleteUser, res] = useMutation(DELETE_USER, {
    variables: {
      id: id,
    },
  });
  console.log(res);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => deleteUser()}>Delete User</button>
    </div>
  );
}

export default DeleteUser;
