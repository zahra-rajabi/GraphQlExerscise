import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_USER } from "../GraphQl/mutaition";

function CreateUser() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [createUser, { data, error, loading }] = useMutation(CREATE_USER, {
    variables: {
      name: name,
      username: userName,
      email: email,
      phone: phone,
    },
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 auto",
        width: "50%",
      }}
    >
      <h1>create user component</h1>
      <section
        style={{
          backgroundColor: "pink",
          border: "1px solid black",
          margin: "1rem 2rem",
          display: "flex",
          gap: "2rem",
          padding: "1rem 2rem",
          flexWrap: "wrap",
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="userName">userName:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="email">email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phoneNumber">phoneNumber:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </section>
      <button onClick={() => createUser()}>click to create</button>
      {data && (
        <p>
          <br />
          Created user with id {data.createUser.id}the username
          {data.createUser.username} and phoneNumber {data.createUser.phone}
          <br /> email address {data.createUser.email}
        </p>
      )}
    </div>
  );
}

export default CreateUser;
