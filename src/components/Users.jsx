import { useQuery } from "@apollo/client";
import { GET_USERS } from "../GraphQl/queries";
function Users() {
  const { loading, data, error } = useQuery(GET_USERS);
  if (loading) return <h3>Is Loading...</h3>;
  if (error) return <p>something went wrong</p>;

  const {
    users: { data: Data },
  } = data;
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr ",
        justifyItems: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h1>All users</h1>
      {Data.map((item) => (
        <div key={item.id} style={{ width: "100%" }}>
          <h6>{item.id}</h6>
          <h1 style={{ backgroundColor: "gray", color: "red" }}>
            name : {item.name}
          </h1>
          <p>email : {item.email}</p>
          <p>phone : {item.phone}</p>
          <hr />
        </div>
      ))}
    </section>
  );
}

export default Users;
