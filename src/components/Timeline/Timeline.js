// @flow
import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const TimelineContainer = styled.div`
  .timeline {
    width: 95%;
    max-width: 1170px;
    margin: 2em auto;
    position: relative;
    padding: 2em 0;
  }
  .timeline::after {
    /* clearfix */
    content: '';
    display: table;
    clear: both;
  }

  .timeline::before {
    /* vertical line */
    content: '';
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
    width: 4px;
    background: ${props => props.theme.colors.primaryLight};
  }

  @media only screen and (min-width: 1170px) {
    .timeline.timeline--two-columns {
      margin-top: 3em;
      margin-bottom: 3em;
      width: 90%;
    }
    .timeline.timeline--two-columns:before {
      left: 50%;
      margin-left: -2px;
    }
  }
`;

type PropTypes = {
  children: React.Node,
  animate?: boolean,
  columns?: '1' | '2',
};

const Timeline = ({ animate, children, columns }: PropTypes) => (
  <TimelineContainer>
    <div
      className={classNames('timeline', {
        'timeline--animate': animate,
        'timeline--two-columns': columns === '2',
        'timeline--one-column': columns === '1',
      })}
    >
      {children}
    </div>
  </TimelineContainer>
);

Timeline.defaultProps = {
  animate: true,
  columns: '2',
};

export default Timeline;
