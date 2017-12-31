import React, { Component } from 'react';
import {voteReact,voteAngular,voteVue} from './redux/actions/action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import react from './react.jpg';
import angular from './angular.jpg';
import vue from './Vue.jpg';
import './App.css';

class App extends Component {

  handleVoteReact(){
    this.props.voteReact();
  }

  handleVoteAngular(){
    this.props.voteAngular();
  }

  handleVoteVue(){
    this.props.voteVue();
  }

  render() {
    return (
      <div>
      <h2> What is your favourite front end developement Framework 2017 ? </h2>
      <img src={react} alt=" " onClick={this.handleVoteReact.bind(this)}/>
      <button className="btn btn-primary">React {this.props.react}</button>
      <img src={angular} alt=" " onClick={this.handleVoteAngular.bind(this)}/>
      <button className="btn btn-primary">Angular{this.props.angular}</button>
      <img src={vue} alt=" " onClick={this.handleVoteVue.bind(this)}/>
      <button className="btn btn-primary">Vue{this.props.vue}</button>
      </div>

    );
  }
}

function mapStateToProps(state,props){
  return{
    react:state.react,
    angular:state.angular,
    vue:state.vue,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({voteReact,voteAngular,voteVue},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
