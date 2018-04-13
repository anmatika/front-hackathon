
import React from 'react';
import { Card, CardHeader, CardContent } from 'material-ui';

const withCard = WrappedComponent => (props) => {
  const {
    cardHeaderTitle, cardHeaderSubtitle, key, ...restProps
  } = props;
  return (
    <Card>
      <CardHeader title={cardHeaderTitle} subtitle={cardHeaderSubtitle} />
      <CardContent>
        <WrappedComponent {...restProps} />
      </CardContent>
    </Card>
  );
};

export default withCard;