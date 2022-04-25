import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../Shared/PageTitle/PageTitle';

const About = () => {
    return (
        <div>
            {/* <Helmet>
                 <title>About -Genius car Service</title>
            </Helmet> */}
            <PageTitle title="About"></PageTitle>
            <h2>This is About us</h2>
        </div>
    );
};

export default About;