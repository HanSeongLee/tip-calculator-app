import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import cn from 'classnames';

const Logo: React.FC<HTMLAttributes<HTMLLinkElement>> = ({ className }) => {
    return (
        <Link href={'/'}>
            <a className={cn(styles.link, className)}>
                <h1>
                    <img src={'/logo.svg'}
                         alt={'splitter'}
                    />
                </h1>
            </a>
        </Link>
    );
};

export default Logo;
