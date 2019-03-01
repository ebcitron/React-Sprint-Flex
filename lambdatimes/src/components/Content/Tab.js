import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

    

  return (
    <div className={props.tab === props.selectedTab ? "tab active-tab" : "tab"}
        // if( props.tab === props.selectedTab){
        //   return(
        // "tab active-tab")} else {
        // return(
        // "tab"
        // );
      
    

      onClick={tab => props.changeSelected(props.tab)} > 
  
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  selectedTab: PropTypes.string,
  changeSelected: PropTypes.func
};
// Make sure you include PropTypes on your props.

export default Tab;
   /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */