// @flow
import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import './TimelineEvent.css';

type PropTypes = {
  children: React.Node,
  icon: React.Node,
  iconStyle: Object,
  iconOnClick?: Function,
  style?: ?Object,
  date: React.Node,
  position?: string,
  visibilitySensorProps?: Object,
};

type State = {
  visible: boolean,
};

class TimelineEvent extends React.Component<PropTypes, State> {
  static defaultProps = {
    iconOnClick: () => {},
    style: undefined,
    visibilitySensorProps: undefined,
    position: '',
  };

  constructor(props: PropTypes) {
    super(props);
    this.state = { visible: false };
  }

  onVisibilitySensorChange = (isVisible: boolean) => {
    if (isVisible) {
      this.setState({ visible: true });
    }
  };

  render() {
    const {
      children,
      icon,
      iconStyle,
      iconOnClick,
      date,
      visibilitySensorProps,
    } = this.props;

    const { visible } = this.state;

    return (
      <div className="timeline-element">
        <VisibilitySensor
          {...visibilitySensorProps}
          onChange={this.onVisibilitySensorChange}
        >
          <div>
            {/* eslint-disable */}
            <span
              style={iconStyle}
              onClick={iconOnClick}
              className={`timeline-element-icon ${
                visible ? 'bounce-in' : 'is-hidden'
              }`}
            >
              {/* eslint-enable */}
              {icon}
            </span>
            <div
              className={`timeline-element-content ${
                visible ? 'bounce-in' : 'is-hidden'
              }`}
            >
              {children}
              <span className="timeline-element-date">{date}</span>
            </div>
          </div>
        </VisibilitySensor>
      </div>
    );
  }
}

export default TimelineEvent;
