import {createBrowserRouter} from 'react-router-dom';
import PublicComponent from '../core/layouts/public/public.component';
import HomeComponent from '../pages/home/home.component';
import FormComponent from '../pages/form/form.component';
import TableComponent from '../pages/table/table.component';
import {Routes} from './routes';
import NotFound from '../pages/not-found/notfound.component';
import AboutComponent from 'pages/about-us/about-us.component';
import WorksComponent from 'pages/works/works.component';
import ResumeComponent from 'pages/resume/resume.component';
import ContactComponent from 'pages/contact/contact.component';

const router = createBrowserRouter([
    {
        element: <PublicComponent/>,
        children: [
            {
                path: Routes.home,
                element: <HomeComponent/>,
            },
            {
                path: Routes.resume,
                element: <ResumeComponent/>,
            },
            {
                path: Routes.works,
                element: <WorksComponent/>,
            },
            {
                path: Routes.contact,
                element: <ContactComponent/>,
            }
        ],
    },
 
    {
        path: '*',
        element: <NotFound/>,
    }
], {basename: '/',});

export default router;
