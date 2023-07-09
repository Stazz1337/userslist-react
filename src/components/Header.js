import React, { Component } from 'react';
import logo from '../images/posts.svg';
import Watch from './Watch';

class Header extends Component {

  render() {
    return (
      <header className='header'>
        <img className='header__logo' src={logo} alt='Logo' />

        <Watch />
        <select className='header__lang' onChange={this.props.onLanguageChange}>
          <option value='ru'>RU</option>
          <option value='en'>EN</option>
        </select>
      </header>
    );
  }
}

export default Header;

/*import logo from '../images/posts.svg';
import Watch from './Watch';

const Header = ({ onLanguageChange}) => {
  
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Logo' />
      
      <Watch/>
      <select  className="header__lang" onChange={onLanguageChange}>
        <option value='ru'>RU</option>
        <option value='en'>EN</option>
      </select>
      
    </header>
  );
};

export default Header;*/
