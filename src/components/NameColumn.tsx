import React from 'react';
import { Link } from 'react-router-dom';

export interface NameColumnProps {
    url: string;
    name: string;
}

const NameColumn = ({
    url,
    name
}: NameColumnProps) => (<Link to={url}>{name}</Link>);

export default NameColumn;
