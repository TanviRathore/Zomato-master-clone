import React from 'react';
import {Route} from 'react-router-dom';
import ForgetPassLayout from '../Layout/ForgetPass.Layout';

function ForgetPassLayoutHOC({component: Component, ...rest}) {
    return (
        <>
           <Route
                {...rest}
                component = {(props) => (
                    <ForgetPassLayout >
                        <Component {...props} />
                    </ForgetPassLayout>
                )}
           /> 
        </>
    );
}

export default ForgetPassLayoutHOC;