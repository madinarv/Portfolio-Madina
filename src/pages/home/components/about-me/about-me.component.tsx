import React from 'react';
import { useAboutMeStyles } from './about-me.style';
import TitleComponent from 'core/shared/title/title.component';
import CardsComponent from 'core/shared/card/card.component';
import { Cartfirst } from 'assets/images/icons/icon-1';


const AboutMeComponent = () => {
    const styles = useAboutMeStyles();

    const aboutCard = [

        {
            id: 1,
            title: 'Ui/Ux Design',
            subTitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
            icon:<Cartfirst/>,
            color:'#FCF4FF'


        },
        {
            id: 2,
            title: 'App Development',
            subTitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
            icon:<Cartfirst/>,
            color:'#FEFAF0'

        },
        {
            id: 3,
            title: 'Photography',
            subTitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
            icon:<Cartfirst/>,
            color:'#FCF4FF'

        
        },
        {
            id: 4,
            title: 'Photography',
            subTitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
            icon:<Cartfirst/>,
            color:'#FFF4F4',


        },
        {
            id: 5,
            title: 'Managment',
            subTitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
            icon:<Cartfirst/>,
            color:'#FFF0F8'

           
        },
        {
            id: 6,
            title: 'Web Development',
            subTitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
            icon:<Cartfirst/>,
            color:'#F3FAFF'


        },

    ];


    return (
        <div className={styles.aboutme}>
            <TitleComponent
                title={'About Me'}
                desc={"I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies."}
            />
            <CardsComponent
                data={aboutCard}
                cardTitle={'What I do!'}
            />
        </div>
    );
};

export default AboutMeComponent;
// *2121

