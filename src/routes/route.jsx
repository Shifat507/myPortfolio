import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Sections/Home";
import Projects from "../Sections/Projects";
import AboutMe from "../Sections/AboutMe";
import Skills from "../Sections/Skills";
import Education from "../Sections/Education";
import ProjectDetails from "../Sections/ProjectDetails";
import ContactInfo from "../Sections/ContactInfo";
// import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/aboutMe',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/education',
                element: <Education></Education>
            },
            {
                path: '/project/:id',
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: '/contactInfo',
                element: <ContactInfo></ContactInfo>
            }
        ]
    },
]);