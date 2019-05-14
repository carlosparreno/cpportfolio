import styled from 'styled-components';
import { Box } from 'rebass';

const BORDER_SPACING = '20px';
const BORDER_RADIUS = '8px';

const BORDER_PATH_MAP = {
  'top-left': `polygon(0 0%, 100% 0%, calc(100% - ${BORDER_SPACING}) 100%, 0% 100%);`,
  'top-right': `polygon(0 0%, 100% 0%, 100% 100%, ${BORDER_SPACING} 100%);`,
  'bottom-right': `polygon(${BORDER_SPACING} 0%, 100% 0%, 100% 100%, 0% 100%);`,
  'bottom-left': `polygon(0 0%, calc(100% - ${BORDER_SPACING}) 0%, 100% 100%, 0% 100%);`,
};

const BORDER_RADIUS_MAP = {
  'top-left': `${BORDER_RADIUS} 0 0 0`,
  'top-right': `0 ${BORDER_RADIUS} 0 0`,
  'bottom-right': `0 0 ${BORDER_RADIUS} 0`,
  'bottom-left': `0 0 0 ${BORDER_RADIUS}`,
};

type PropTypes = {
  x: 'left' | 'right',
  y: 'top' | 'bottom',
  round: boolean,
};

const ImageSubtitle = styled(Box)`
  position: absolute;
  display: inline;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;

  ${(props: PropTypes) => props.x}: 0;
  ${(props: PropTypes) => props.y}: 0;
  
  ${(props: PropTypes) =>
    props.x === 'left'
      ? `padding-right: ${BORDER_SPACING};`
      : `padding-left: ${BORDER_SPACING};`}
  clip-path: ${(props: PropTypes) => BORDER_PATH_MAP[`${props.y}-${props.x}`]};
  
  ${(props: PropTypes) =>
    props.round &&
    `border-radius: ${BORDER_RADIUS_MAP[`${props.y}-${props.x}`]};`}
`;

ImageSubtitle.defaultProps = {
  x: 'left',
  y: 'top',
  round: false,
};

export default ImageSubtitle;
