import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../GraphQl/queries";

function User() {
  const [id, setID] = useState("");

  const { loading, data, error } = useQuery(GET_USER, {
    variables: { idNumber: id },
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>something went wrong</p>;

  const {
    user: { name, id: ID, email, phone },
  } = data;

  return (
    <div>
      <input
        type="number"
        min={0}
        onChange={(e) => setID(e.target.value)}
        value={id}
        placeholder="Enter your ID"
      />

      <hr />

      <p>{id}</p>
      <p>{name ? name : "NOTHING HERE !"}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}

export default User;
