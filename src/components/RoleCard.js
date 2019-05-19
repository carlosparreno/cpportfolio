// @flow
import React from 'react';
import { Text, Flex, Image } from 'rebass';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Card } from './Card';

const CARD_HEIGHT = '250px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 4);
  }
`;

const RoleImage = styled(Image)`
  padding: 30px;

  ${MEDIA_QUERY_SMALL} {
    padding: 10px;
  }
`;

type PropTypes = {
  id: string,
  index: number,
  name: string,
  description: string,
  logo: { title: string, src: string },
};

const RoleCard = ({ id, index, name, description, logo }: PropTypes) => (
  <Fade key={id} bottom delay={index * 200}>
    <Card p={0}>
      <Flex style={{ height: CARD_HEIGHT }}>
        <TextContainer>
          <span>
            <Title my={2} pb={1}>
              {name}
            </Title>
          </span>
          <Text width={[1]} style={{ overflow: 'auto' }}>
            {description}
          </Text>
        </TextContainer>

        <ImageContainer>
          <RoleImage src={logo.src} alt={logo.title} />
        </ImageContainer>
      </Flex>
    </Card>
  </Fade>
);

export default RoleCard;
