import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import FullTable from './FullTable.js';
import Top10Labour from './Top10Labour.js';
import Top10Conservative from './Top10Conservative.js';

import './styles.css';

export default function App() {
  return (
    <Router>
      <div class="main">
        <div id="banner">
          <img src="logo.png" alt="" class="center"/>
        </div>
        <div id = "navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/compare_an_mp">Compare an MP</Link></li>
            <li><Link to="/frequently_asked_questions">FAQs</Link></li>
            <li><a href="https://twitter.com/SwinsonIsATory" rel="noopener noreferrer" target="_blank">Twitter</a></li>
          </ul>
        </div> 
        <Switch>
          <Route exact path="/">
            <hr class="crapPaddingSolution" />
            <h3>Jo Swinson vs 10 Popular Labour MPs</h3>
            <Top10Labour />
            <h3>Jo Swinson vs 10 Popular Conservative MPs</h3>
            <Top10Conservative />
            <h3>Tory Policies Supported</h3>
            <p class="FAQ">Jo Swinson consistently voted against raising welfare benefits at least in line with prices<br />
            <a href="https://www.theyworkforyou.com/mp/11971/jo_swinson/east_dunbartonshire/divisions?policy=6674" rel="noopener noreferrer" target="_blank">[Source]</a></p>
            <p class="FAQ">Jo Swinson almost always voted for the bedroom tax<br />
            <a href="https://www.theyworkforyou.com/mp/11971/jo_swinson/east_dunbartonshire/divisions?policy=6672" target="_blank" rel="noopener noreferrer">[Source]</a></p>
            <p class="FAQ">Jo Swinson generally voted for cutting central government funding of local government<br />
            <a href="https://www.theyworkforyou.com/mp/11971/jo_swinson/east_dunbartonshire/divisions?policy=6671" rel="noopener noreferrer" target="_blank">[Source]</a></p>
            <p class="FAQ">Jo Swinson voted for raising England’s undergraduate tuition fee cap to £9,000 per year<br />
            <a href="https://www.theyworkforyou.com/mp/11971/jo_swinson/east_dunbartonshire/divisions?policy=1132" rel="noopener noreferrer" target="_blank">[Source]</a></p>    
            <p class="FAQ">Jo Swinson consistently voted against paying higher benefits over longer periods for those unable to work due to illness or disability<br />
            <a href="https://www.theyworkforyou.com/mp/11971/jo_swinson/east_dunbartonshire/divisions?policy=6673" rel="noopener noreferrer" target="_blank">[Source]</a></p>    
          </Route>
          <Route path="/compare_an_mp">
            <h2 class="FAQ">Type in an MPs name in the search box to compare their record to Jo Swinson's</h2>
            <FullTable />
          </Route>
           <Route path="/frequently_asked_questions">
              <h2 class="FAQ">Frequently Asked Questions</h2>
              <p class="FAQ"><b>Why are you doing this?</b></p>
              <p class="FAQ">Because I scraped some House of Commons Division data and was astounded at how frequently Jo Swinson had voted with the Conservative party. She can not have this voting record and be permitted to rebrand herself as the anti-austerity progressive candidate.</p>
              <div id="about">
                <p class="FAQ"><b>How did you get this data?</b></p>
                <p class="FAQ">Data is scraped using Parliament's open data API.</p>
                <p class="FAQ"><b>Are these stats fake?</b></p>
                <p class="FAQ">All stats are reported honestly. There are some small anomalies I've corrected for that in no way affect the outcome of the results. Some examples of this are removing MPs with two names where I've deemed it important enough, e.g. Andrew/Andy Burnham. There are also some strange entries where names are appended together in a semi-colon delimited list. I have removed this small number of entries rather than take the effort of splitting them out as they have no real impact on the aggregated results.</p>
                <p class="FAQ"><b>What is a weighted voting score?</b></p>
                <p class="FAQ">Weighted voting score is a simple metric that weights according to how full parliament was at the time of the vote, i.e. If parliament is 100% full then an agreement/disagreement counts for 2 points. If parliament is 50% full, an agreement/disagreement counts for 1.5 points.</p>
                <p class="FAQ">Any questions or want to collaborate? Hit me up on Twitter.</p>
                <p class="FAQ">Jo Swinson is a Tory.</p>
              </div>
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
} 

function fullTable() {
  return (
    <div className="fullTable">
      <FullTable />
    </div>
  );
}

function top10Labour() {
	return (
		<div className="top10Labour">
      <Top10Labour />
    </div>
	);
}

function top10Conservative() {
	return (
		<div className="top10Conservative">
      <Top10Labour />
    </div>
	);
}


ReactDOM.render(<App />, document.getElementById('root'))


