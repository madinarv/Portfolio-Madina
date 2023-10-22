import React from 'react';
import { useProfileStyle } from './profile.style';
import profile from 'assets/images/statics/profile.png';
import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';
import { contact } from '.';
import {TiDownload} from 'react-icons/ti';
import { useSelector } from 'react-redux';
import jsPDF from 'jspdf';
import cv from 'assets/images/statics/Cv.png';
import { Link } from 'react-router-dom';

const ProfileComponent = () => {
  const styles = useProfileStyle();
  const downloadCv=() =>{
    let doc:any  = new jsPDF('landscape', 'px', 'a4');
    doc.addImage(cv, 'PNG', 200, 20, 250, 400);
    doc.save('Front-End Developer.pdf');
  };
  const mode = useSelector((state:any) =>state.mode);
  console.log(mode);

  return (
    <div className={styles.profile} style={{backgroundColor : `${ mode ? 'black' : 'white' }`,
    }}>
      <div className={styles.profilWrapper}>
        <div className={styles.profilImg}>
          <img src={profile} />
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.profileName}>
            <h1>Madina Valiyeva</h1>
          </div>
          <div className={styles.profilePosition}>
            <span> Front-End Developer</span>
          </div>
          <div className={styles.profileSocial}>
            <Link to={ 'https://www.linkedin.com/in/madina-valiyeva-84793827b/' } className={styles.socialmedia}><BiLogoLinkedin/></Link>
            <Link to={'https://github.com/madinarv'} className={styles.socialmedia}><BiLogoGithub /></Link>
          </div>
        </div>
        <div className={styles.connectioncontainer} style={{ backgroundColor : `${ mode ? '#1D1D1D' : 'white' }`}} >
        {
          contact.map((contact:any, index: number) => {
            return (
               <div key={index} className={styles.connection}>
              <div className={styles.connectionBox}>
                <div className={styles.connetionIcon}>
                  <div className={styles.connectionSvg}>
                    {contact.icon}
                  </div>
                </div>
                <div className={styles.connectionInfo}>
                  <div className={styles.connectionTitle}>
                    <p>{contact.name}</p>
                  </div>
                  <div className={styles.connectionDesc}>
                    <span>{contact.desc}</span>
                  </div>
                </div>
              </div>
            </div>  
            );
           
          })
        }
        </div>
        <div>
        </div>
        <div className={styles.btn}>
            <button onClick={()=> downloadCv()}>
            <TiDownload />
             <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
  
  );
};

export default ProfileComponent;