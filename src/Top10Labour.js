import ReactTable from 'react-table';
import React from 'react';

import { data } from './data';

const columns = [
  {
    Header: 'MP Name',
    accessor: 'mpName',
    headerStyle: { whiteSpace: 'unset' },
    style: { color: 'white', whiteSpace: 'unset', fontSize: 12},
    sortable: false
  },
  {
    Header: 'Voted With',
    accessor: 'agreeVotingScore',
    headerStyle: { whiteSpace: 'unset' },
    style: { color: 'white', whiteSpace: 'unset', fontSize: 12 },
    sortable: false
  },
  {
    Header: 'Voted Against',
    accessor: 'disagreeVotingScore',
    headerStyle: { whiteSpace: 'unset' },
    style: { color: 'white', whiteSpace: 'unset', fontSize: 12 },
    sortable: false
  },
  {
    Header: 'Weighted Score',
    accessor: 'weightedVotingScore',
    headerStyle: { whiteSpace: 'unset' },
    style: { color: 'white', whiteSpace: 'unset', fontSize: 12 },
    sortable: false
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
    accessor: 'youGovLabour',
    headerStyle: { whiteSpace: 'unset' },
    style: { color: 'white', whiteSpace: 'unset', fontSize: 12 },
    show: false
  }
];

export default class Top10Labour extends React.Component {
  render() {
    return (
      <div style={{ padding: '10px' }}>
        <ReactTable
          minRows={10}
          pageSize={10}
          data={data}
          columns={columns}
          pages={1}
          showPagination={false}
          getTdProps={(state, rowInfo, column, Instance) => {
                return {
                    style: {
                        background: rowInfo && rowInfo.row.partyName === 'Labour' ? '#E4033B' : '#115DA8'
                    },
                };
            }}
          defaultSorted={[
            {
              id: "youGovLabour",
              desc: true
            }
          ]}
        />
      </div>
    );
  }
}
