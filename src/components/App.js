import Header from './Header';
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

export default App;
