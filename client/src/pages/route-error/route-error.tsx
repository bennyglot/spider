import React from 'react';

interface routeErrorProps {
    errorText: string
}

const routeError: React.FC<routeErrorProps> = ({errorText}) => {
    return <div>
        <h1>{errorText}</h1>
    </div>
}

const RouteError = routeError;
export default RouteError;