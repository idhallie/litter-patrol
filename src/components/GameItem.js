import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();
    this.state = {
      spottedType: ''
    };
  }

  static propTypes = {
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  
  onItemClicked = () => {
      if (this.props.type === 'litter') {
        this.setState({spottedType: 'spotted-litter'});
        this.props.add();
      } else {
        this.setState({spottedType: 'spotted-nature'});
      }
    }

    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];


    return (
      <div className="game-item" style={itemStyle}>
        <span className={this.state.spottedType}></span>
        <img onClick={ this.onItemClicked} src={icon} alt="Item" className="icon-item" ></img>
      </div>
    );
  }

}
export default GameItem;
