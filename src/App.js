import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
        fontColor: 'blue',
        fontSize: 12,
        fontFamily: 'monospace',
        allowEdit: true
    }
    this.updateColor = this.updateColor.bind(this);
    this.updateFontFamily = this.updateFontFamily.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);

  }

  updateColor(val) {
    // console.log(val)
    this.setState({
      fontColor: val
    })
  }

updateSize(val) {
  this.setState({
    fontSize: parseInt(val)
  })
}
updateFontFamily(e) {
  this.setState({
    fontFamily: e.target.value
  })
}

  updateEditStatus(val) {
    this.setState({
      allowEdit: val
    })
  }

  render() {
    console.log(this.state)
    const {fontColor ,fontSize , fontFamily, allowEdit} = this.state
    return (
      <div>
        <div className="headerBar">
          <EditToggle allowEdit={allowEdit} update={ this.updateEditStatus}/>
          <ColorChanger allowEdit={allowEdit} fontColor={fontColor} update={this.updateColor} />
          <SizeChanger allowEdit={allowEdit} fontSize={fontSize} update={this.updateSize}/>
          <FamilyChanger allowEdit={allowEdit} fontFamily={fontFamily} update={this.updateFontFamily}/>
        </div>
        <div className="textArea">
          <TextContainer
          fontColor={fontColor}
          fontSize={fontSize}
          fontFamily={fontFamily}
           />
        </div>
      </div>
    )
  }
}

export default App;
