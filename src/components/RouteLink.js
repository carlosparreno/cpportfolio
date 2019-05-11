// @flow
import * as React from 'react';
import { Box } from 'rebass';
import LinkAnimated from './LinkAnimated';

type PropTypes = {
  onClick: Function,
  selected: boolean,
  children: React.Node,
};
const RouteLink = ({ onClick, selected, children }: PropTypes) => (
  <Box ml={[2, 3]} color="background" fontSize={[2, 3]}>
    <LinkAnimated onClick={onClick} selected={selected}>
      {children}
    </LinkAnimated>
  </Box>
);

export default RouteLink;
