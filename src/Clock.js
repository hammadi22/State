import React from "react";

class Clock extends React.Component {
  state = {
    seconds: 1
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="Clock">
        <h1>You are in this Page for {this.state.seconds}</h1>
      </div>
    );
  }
}

export default Clock;