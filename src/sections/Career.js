// @flow
import React from 'react';
import FontAwesome from 'react-fontawesome';
import Timeline from '../components/Timeline/Timeline';
import TimelineEvent from '../components/Timeline/TimelineEvent';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import RoleCard from '../components/RoleCard';

const iconWorkStyle = {
  background: '#0D65AA', // primaryLight
  color: '#FFFFFF', // background
};

const iconSchoolStyle = {
  background: '#FE3B0A', // primaryLight
  color: '#FFFFFF', // background
};

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['10vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

type PropTypes = {
  career: {
    title: string,
    works: Array<{
      id: string,
      name: string,
      description: string,
      period: string,
      type: string,
      company: string,
      logo: {
        title: string,
        src: string,
      },
    }>,
  },
};

const Career = ({ career }: PropTypes) => (
  <Section.Container id={career.title} Background={Background}>
    <Section.Header
      name={career.title}
      icon="👨🏻‍💻"
      label={career.title}
      Box="notebook"
    />
    <Timeline>
      {career.works.map((work, index) => (
        <TimelineEvent
          key={work.id}
          date={work.period}
          iconStyle={work.type === 'work' ? iconWorkStyle : iconSchoolStyle}
          icon={
            <FontAwesome
              className="icon"
              name={work.type === 'work' ? 'suitcase' : 'graduation-cap'}
            />
          }
        >
          <RoleCard index={index} {...work} />
        </TimelineEvent>
      ))}
    </Timeline>
  </Section.Container>
);

export default Career;
