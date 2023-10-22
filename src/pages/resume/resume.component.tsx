import React from 'react';
import { useResumeStyles } from './resume.style';
import TitleComponent from 'core/shared/title/title.component';
import CardsComponent from 'core/shared/card/card.component';
import TalentComponent from './components/talent/talent.component';

const ResumeComponent = () => {
  const styles = useResumeStyles();

  const resumeCard = [

    {
      id: 1,
      work: 'Ph.D in Horriblensess',
      place: 'ABC University, Los Angeles, CA',
      year: 2016,
      color: '#FFF4F4'
    },
    {
      id: 2,
      work: 'Ph.D in Horriblensess',
      place: 'ABC University, Los Angeles, CA',
      year: 2017,
      color: '#EEF5FA'
    },
    {
      id: 3,
      work: 'Ph.D in Horriblensess',
      place: 'ABC University, Los Angeles, CA',
      year: 2019,
      color: '#FFF4F4'
    },
    {
      id: 4,
      work: 'Ph.D in Horriblensess',
      place: 'ABC University, Los Angeles, CA',
      year: 2016,
      color: '#EEF5FA',
    },
    {
      id: 5,
      work: 'Ph.D in Horriblensess',
      place: 'ABC University, Los Angeles, CA',
      year: 2016,
      color: '#FFF4F4',
    },
    {
      id: 6,
      work: 'Ph.D in Horriblensess',
      place: 'ABC University, Los Angeles, CA',
      year: 2016,
      color: '#EEF5FA',
    }
  ];

  return (
    <div className='resumeall'>
      <div className='row'>
        <div className="col-lg-12">
          <div className={styles.resume}>
            <TitleComponent
              title={'Resume'}
              desc={''}
            />
            <CardsComponent
              data={resumeCard}
              cardTitle={'What I do!'} 
            />
          
          </div>

        </div> 
      </div>  
      <TalentComponent/>
    </div>
  );
};

export default ResumeComponent;