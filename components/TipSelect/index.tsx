import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import Input from '../Input';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    tips: number[];
    onSelectChange: (name: string, value: any) => void;
    selected: string;
};

const TipSelect: React.FC<IProps> = ({
                                         name, tips, onSelectChange, className,
                                         selected, ...props
                                     }) => {
    return (
        <div className={cn(styles.tipSelect, className)}
             {...props}
        >
            {tips?.map((tip, index) => (
                <button className={cn(styles.button, {
                    [styles.active]: selected === `tip-button-${tip}`,
                })}
                        type={'button'}
                        key={index}
                        onClick={_ => {
                            onSelectChange(name, tip);
                            onSelectChange('tipSelected', `tip-button-${tip}`);
                        }}
                >
                    {tip}%
                </button>
            ))}
            <Input type={'number'}
                   placeholder={'Custom'}
                   min={0}
                   onChange={e => {
                       onSelectChange(name, e.target.value);
                       onSelectChange('tipSelected', '');
                   }}
            />
        </div>
    );
};

export default TipSelect;
