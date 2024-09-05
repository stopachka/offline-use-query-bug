import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { id, init, tx } from "@instantdb/react";

const db = init({
  appId: "a19e0bae-9fe4-4731-ab45-e842287ea1e3",
});

function App() {
  const result = db.useQuery({ posts: {} });

  return (
    <>
      <div>{JSON.stringify(result, null, 2)}</div>
      <button
        onClick={() => {
          db.transact(
            tx.posts[id()].update({ title: "Hi! " + new Date().toISOString() })
          );
        }}
      >
        Add Post
      </button>
      <pre>
        - Go offline
        - Click transact 
        - See the optimistic update happened
        - Refresh the page 
        - See that there is _no_ optimistic update
      </pre>
    </>
  );
}

export default App;
