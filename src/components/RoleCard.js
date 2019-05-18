// @flow
import React from 'react';
import { Text, Flex, Image } from 'rebass';
import styled from 'styled-components';
import { Card } from './Card';

const CARD_HEIGHT = '250px';

const IMAGE_HEIGHT = '100px';

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
  width: calc(100% - ${IMAGE_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${IMAGE_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${IMAGE_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${IMAGE_HEIGHT} / 2);
  }
`;

const TeamImage = styled(Image)`
  width: ${IMAGE_HEIGHT};
  height: ${IMAGE_HEIGHT};
  padding: 12px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${IMAGE_HEIGHT} / 2);
    width: calc(${IMAGE_HEIGHT} / 2);
    margin-top: calc(${IMAGE_HEIGHT} / 4);
    padding: 10px;
  }
`;

type PropTypes = {
  name: string,
  description: string,
  logo: { title: string, src: string },
};

const RoleCard = ({ name, description, logo }: PropTypes) => (
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
        <TeamImage src={logo.src} alt={logo.title} />
      </ImageContainer>
    </Flex>
  </Card>
);

export default RoleCard;
