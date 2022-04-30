import React, {InputHTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: string;
    error?: boolean;
};

const Input: React.FC<IProps> = ({ icon, className, error, ...props }) => {
    return (
        <div className={cn(styles.inputWrapper, className, {
            [styles.hasIcon]: icon,
            [styles.error]: error,
        })}>
            {icon && (
                <img className={styles.icon}
                     src={icon}
                     alt={''}
                />
            )}
            <input className={styles.input}
                   {...props}
            />
        </div>
    );
};

Input.defaultProps = {
    error: false,
};

export default Input;
