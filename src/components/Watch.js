import React from 'react';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentTime } = this.state;

    return (
      <div className='watch' style={{ color: 'orange' }}>
        {currentTime}
      </div>
    );
  }
}

export default Watch;

/*import React, { useState, useEffect } from 'react';

const Watch = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='watch' style={{ color: 'orange' }}>
      {currentTime}
    </div>
  );
};

export default Watch;*/
