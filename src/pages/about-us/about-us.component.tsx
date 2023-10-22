import { usePublicLayoutStyles } from './about.style';
function AboutComponent() {
    const classes = usePublicLayoutStyles();
    return (
        <div className={classes.about}> 
        about
        </div>
    );
}

export default AboutComponent;
