import './App.css';
import Show from './component/show';
import Symbol from './component/symbol';
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <Show val = {props.cal.val} res = {props.cal.res}></Show>
      <Symbol></Symbol>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return({
      cal : state.cal
  })
}

export default connect(mapStateToProps, null)(App);
