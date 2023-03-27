import React from 'react';
import { List } from 'antd';

const History = ({ history }) => {
  return (
    <List
      header={<div>Recently Played Videos</div>}
      bordered
      dataSource={history}
      renderItem={item => (
        <List.Item>
          <a href={item.videoUrl}>{item.name}</a>
          <div>{item.playedAt}</div>
        </List.Item>
      )}
    />
  );
};

export default History;
