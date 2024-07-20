import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_USER } from "../GraphQl/queries";

function UserONclick() {
  const [id, setID] = useState("");

  const [getUser, { loading, data, error, called }] = useLazyQuery(GET_USER, {
    variables: { idNumber: id },
  });

  const changeHandler = (e) => setID(e.target.value);

  console.log(loading, data, called);

  return (
    <div>
      <input
        type="number"
        min={0}
        onChange={changeHandler}
        value={id}
        placeholder="Enter your ID"
      />
      <button style={{ marginLeft: "1rem" }} onClick={() => getUser()}>
        Get user
      </button>

      <hr />
      {loading && <p>Loading ...</p>}
      {error && <p>something went wrong</p>}
      {!!called
        ? data && (
            <div>
              <p>{data.user.id}</p>
              <p>{data.user.name ? data.user.name : "NOTHING HERE !"}</p>
              <p>{data.user.email}</p>
              <p>{data.user.phone}</p>
            </div>
          )
        : null}
    </div>
  );
}

export default UserONclick;
