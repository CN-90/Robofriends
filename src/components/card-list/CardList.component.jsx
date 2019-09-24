import React from 'react';
import Card from './../card/Card.component';

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map(robot => (
        <Card key={robot.id} robot={robot} />
      ))}
    </div>
  );
};

export default CardList;
