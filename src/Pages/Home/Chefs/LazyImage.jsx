import React from 'react';
import { Image } from 'react-bootstrap';

const LazyImage = ({src}) => {
    return (
        <div>
             <Image src={src} fluid="true" loading="lazy" alt="Lazy loaded image" />
        </div>
    );
};

export default LazyImage;