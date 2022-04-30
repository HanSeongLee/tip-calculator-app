import React from 'react';
import styles from './style.module.scss';
import Input from '../Input';
import TipSelect from '../TipSelect';

interface IProps {
    onChange: (name: string, value: any) => void;
    result: {
        tipAmount: number;
        total: number;
    };
    onReset: () => void;
    state: {
        bill: number;
        people: number;
        tip: number;
        tipSelected: string;
    };
};

const TipCalculatorForm: React.FC<IProps> = ({ onChange, result: {tipAmount, total}, onReset, state: {tipSelected} }) => {
    return (
        <form className={styles.tipCalculatorForm}>
            <div className={styles.inputWrapper}>
                <label>
                    Bill
                </label>
                <Input name={'bill'}
                       icon={'/icons/icon-dollar.svg'}
                       type={'number'}
                       min={0}
                       onChange={e => onChange(e.target.name, e.target.value)}
                       placeholder={'0'}
                />
            </div>

            <div className={styles.inputWrapper}>
                <label>
                    Select Tip %
                </label>
                <TipSelect className={styles.tipSelect}
                           name={'tip'}
                           tips={[5, 10, 15, 25, 50]}
                           onSelectChange={onChange}
                           selected={tipSelected}
                />
            </div>

            <div className={styles.inputWrapper}>
                <label>
                    Number of People
                </label>
                <Input name={'people'}
                       icon={'/icons/icon-person.svg'}
                       type={'number'}
                       min={0}
                       onChange={e => onChange(e.target.name, e.target.value)}
                       placeholder={'0'}
                />
            </div>

            <div className={styles.resultBox}>
                <div className={styles.header}>
                    Tip Amount
                    <div className={styles.unit}>
                        / person
                    </div>
                </div>
                <div className={styles.value}>
                    ${tipAmount.toFixed(2)}
                </div>
                <div className={styles.header}>
                    Total
                    <div className={styles.unit}>
                        / person
                    </div>
                </div>
                <div className={styles.value}>
                    ${total.toFixed(2)}
                </div>
                <button className={styles.resetButton}
                        type={'reset'}
                        onClick={onReset}
                >
                    Reset
                </button>
            </div>
        </form>
    );
};

export default TipCalculatorForm;
