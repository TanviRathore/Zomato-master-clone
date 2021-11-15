import React from 'react';
import ForgetPassNav from '../Components/Navbar/ForgetPassNavbar';

function ForgetPassLayout(props) {
    return (
        <>
            <ForgetPassNav />
            <div className="container mx-auto px-4 lg:px-20">
                {props.children}
            </div>  
        </>
    );
}

export default ForgetPassLayout;