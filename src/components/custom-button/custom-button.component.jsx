import React from 'react';

import './custom-button.styles.scss'

const CusomButton = ({children,isGoogleSignIn,inverted,...otherPops}) =>(
    <button className={`${inverted ? 'inverted' : ''}${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherPops}>
        {children}
    </button>
)

export default CusomButton