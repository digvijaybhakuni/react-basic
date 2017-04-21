import React from 'react';

export default class Container extends React.Component{

  handleChange(ev){
    const title = ev.target.value;
    this.props.changeTitle(title);
  }

  render(){
      return (
      <div>
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}
