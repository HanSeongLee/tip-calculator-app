import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import Input from '../Input';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    tips: number[];
};

const TipSelect: React.FC<IProps> = ({ tips, className, ...props }) => {
    return (
        <div className={cn(styles.tipSelect, className)}
             {...props}
        >
            {tips?.map((tip, index) => (
                <button className={styles.button}
                        type={'button'}
                        key={index}
                >
                    {tip}%
                </button>
            ))}
            <Input type={'number'}
                   placeholder={'Custom'}
                   min={0}
            />
        </div>
    );
};

export default TipSelect;
