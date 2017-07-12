import React,{Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';



class Home extends Component {
  render(){
    return(
      <div>
        <RaisedButton
          onTouchTap={()=>{console.log('hi');}}
          label="Primary" primary={true}/>
        <h2>Home</h2>
      </div>
    )
  }
}

export default Home;
