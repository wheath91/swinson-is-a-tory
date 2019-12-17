import React from 'react';
import ReactDOM from 'react-dom';
import FullTable from './FullTable.js';

import './styles.css';

function fullTable() {
	return (
		<div className="fullTable">
      <Top10Labour />
      </div>
	);
}

const top10ConservativeElement = document.getElementById('fullTable');
ReactDOM.render(<FullTable />, top10ConservativeElement);

