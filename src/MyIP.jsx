import React from "react";
import { Await, Pending, Rejected, Resolved } from "react-await";

function MyIP() {
  const promise = fetch("https://api.ipify.org?format=json").then((r) =>
    r.json()
  );

  console.log(promise);

  return (
    <Await promise={promise}>
      <Resolved>{(json) => <div>My IP: {json.ip}</div>}</Resolved>
      <Rejected>{(error) => <div>{error.message}!</div>}</Rejected>
      <Pending>
        <div>Fetching …</div>
      </Pending>
    </Await>
  );
}

export default MyIP;
