import { usePublicLayoutStyles } from './home.style';
import AboutMeComponent from './components/about-me/about-me.component';

function HomeComponent() {
    const classes = usePublicLayoutStyles();
    return (
        <div className={classes.home}>
            <div><AboutMeComponent/></div>
        </div>
    );
}

export default HomeComponent;
