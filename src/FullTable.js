import ReactTable from 'react-table';
import React from 'react';

import { data } from './data';

const columns = [
  {
    Header: 'MP Name',
    accessor: 'mpName',
    headerStyle: { whiteSpace: 'unset' },
    style: { color: 'white', whiteSpace: 'unset', fontSize: 12},
    filterMethod: (filter, row) =>
                    row[filter.id].toUpperCase().match(filter.value.toUpperCase())
  },
  {
    Header: 'Voted With',
    accessor: 'agreeVotingScore',
    headerStyle: { whiteSpace: 'unset' },
    style: { color: 'white', whiteSpace: 'unset', fontSize: 12 },
  },
  {
    Header: 'Voted Against',
    accessor: 'disagreeVotingScore',
    headerStyle: { whiteSpace: 'unset' },
    style: { color: 'white', whiteSpace: 'unset', fontSize: 12 },
  },
  {
    Header: 'Weighted Score',
    accessor: 'weightedVotingScore',
    headerStyle: { whiteSpace: 'unset' },
    style: { color: 'white', whiteSpace: 'unset', fontSize: 12 },
  },
  {
    Header: 'Party Name',
    accessor: 'partyName',
    headerStyle: { whiteSpace: 'unset' },
    style: { color: 'white', whiteSpace: 'unset', fontSize: 12 },
    show: false
  },
  {
    Header: 'Top 10',
    accessor: 'youGov',
    headerStyle: { whiteSpace: 'unset' },
    style: { color: 'white', whiteSpace: 'unset', fontSize: 12 },
    show: false
  },
];

export default class FullTable extends React.Component {
  render() {
    return (
      <div style={{ padding: '10px' }}>
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={columns}
          showPagination={true}
          getTdProps={(state, rowInfo, column, Instance) => {
                return {
                    style: {
                        background: rowInfo && rowInfo.row.partyName === 'Labour' ? '#E4033B' : '#115DA8'
                    },
                };
            }}
          defaultSorted={[
            {
              id: "weightedVotingScore",
              desc: true
            }
          ]}
        />
      </div>
    );
  }
}
