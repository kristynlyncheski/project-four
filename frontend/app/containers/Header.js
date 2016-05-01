import React from 'react';
import Title from '../fsc/Title';
import MusicBtn from '../fsc/MusicBtn';
import SettingsBtn from '../fsc/SettingsBtn';
import SavedBtn from '../fsc/SavedBtn';
import UpArrow from '../fsc/UpArrow';

const Header = React.createClass({
  handleHeader: function() {
    if (this.props.parentComponent == "settings") {
      return(
        <div className="header-container">
          <div></div>
          <SettingsBtn />
          <MusicBtn />
        </div>
      );
    } else if (this.props.parentComponent == "recommendations") {
      return(
        <div className="header-container">
          <SettingsBtn />
          <Title />
          <SavedBtn />
        </div>
      );
    } else if (this.props.parentComponent == "details") {
      return(
        <div className="header-container">
          <UpArrow />
        </div>
      );
    } else if (this.props.parentComponent == "saved") {
      return(
        <div className="header-container">
          <MusicBtn />
          <SavedBtn />
          <div></div>
        </div>
      );
    } else {
      return
    }
  },
  render: function(){
    return(
      <div>
        {this.handleHeader()}
      </div>
    )
  }
});

export default Header;

//
// {this.leftIcon}
// {this.middleIcon}
// {this.rightIcon}
