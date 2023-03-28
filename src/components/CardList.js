import React from "react";
import { List, Typography } from "antd";
import Card from "./Card";

const { Text } = Typography;

export const CardList = ({ cards, bucket, onCardEdit, onCardDelete }) => {
  return (
    <>
      <Text strong>{bucket.name}</Text>
      <List
        dataSource={cards}
        renderItem={(card) => (
          <Card
            card={card}
            onMove={onCardEdit}
            onDelete={onCardDelete}
          />
        )}
      />
    </>
  );
};

export default CardList;
