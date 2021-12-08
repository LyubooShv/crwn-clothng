import React from 'react';

import './custom-button.styles.scss'

const CusomButton = ({children,isGoogleSignIn,...otherPops}) =>(
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherPops}>
        {children}
    </button>
)

export default CusomButton