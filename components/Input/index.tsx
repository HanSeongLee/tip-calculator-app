import React, {InputHTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: string;
};

const Input: React.FC<IProps> = ({ icon, className, ...props }) => {
    return (
        <div className={cn(styles.inputWrapper, className)}>
            <img className={styles.icon}
                 src={icon}
                 alt={''}
            />
            <input className={styles.input}
                   {...props}
            />
        </div>
    );
};

export default Input;
