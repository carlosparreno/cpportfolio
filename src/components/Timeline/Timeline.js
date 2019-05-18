// @flow
import * as React from 'react';
import classNames from 'classnames';
import './Timeline.css';

type PropTypes = {
  children: React.Node,
  className?: string,
  animate?: boolean,
  columns?: '1' | '2',
};

const Timeline = ({ animate, children, className, columns }: PropTypes) => (
  <div
    className={classNames(className, 'timeline', {
      'timeline--animate': animate,
      'timeline--two-columns': columns === '2',
      'timeline--one-column': columns === '1',
    })}
  >
    {children}
  </div>
);

Timeline.defaultProps = {
  animate: true,
  className: '',
  columns: '2',
};

export default Timeline;
