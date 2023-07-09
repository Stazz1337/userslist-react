import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'ru',
    };
  }

  handleLanguageChange = (event) => {
    this.setState({ selectedLanguage: event.target.value });
  };

  render() {
    const { selectedLanguage } = this.state;

    return (
      <div className='wrapper'>
        <Header onLanguageChange={this.handleLanguageChange} />
        <Main selectedLanguage={selectedLanguage} />
      </div>
    );
  }
}

export default App;

/*import Header from './Header';
import Main from './Main';
import { useState } from 'react';



function App() {

  const [selectedLanguage, setSelectedLanguage] = useState('ru');


  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className='wrapper'>
      <Header onLanguageChange={handleLanguageChange} />
      <Main selectedLanguage={selectedLanguage}  />
    </div>
  );
}

export default App;*/
