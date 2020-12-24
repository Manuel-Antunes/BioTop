import React from 'react';

import { Button } from './styles';

const GoogleButton: React.FC = () => {
    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        e.preventDefault();

    }
    return (
        <Button onClick={handleClick} ></Button>
    );
}

export default GoogleButton;