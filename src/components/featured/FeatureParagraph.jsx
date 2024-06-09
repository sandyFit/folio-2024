import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import classNames from 'classnames';

const FeatureParagraph = ({children}) => {
    const ref = useRef(null); // Removed TypeScript annotation
    const isInView = useInView(ref, {
        margin: '-20% 0px -80% 0px',
    });

    return (
        <p
            ref={ref}
            className={classNames(
                'text-small-min font-[600]',
                isInView ? 'text-zinc-900' : 'text-zinc-50 '
            )}
        >
            {children}
        </p>
    );
}

export default FeatureParagraph;
