import { useEffect } from "react";
import Layout from "./components/layout";


function App() {
  // useEffect(() => {
  //   fetch("https://rcdev-api.ccing.org/api/test")
  //     .then((resp) => resp.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => {
  //       console.log("fetch errored");
  //     });
  // }, []);

  return <Layout></Layout>;
 
}

export default App;
