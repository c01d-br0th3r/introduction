import React from "react";
import CountUp from "react-countup";
import Pageone from "./PageOne";
import Pagetwo from "./PageTwo";

class Home extends React.Component {
  render() {
    return (
      <>
        <Pageone />
        <Pagetwo />
      </>
    );
  }
}

export default Home;
