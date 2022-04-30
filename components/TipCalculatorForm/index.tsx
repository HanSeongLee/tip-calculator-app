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
        bill: string | number;
        people: string | number;
        tip: string | number;
        tipCustom: string | number;
        tipSelected: string;
    };
};

const TipCalculatorForm: React.FC<IProps> = ({ onChange, result: {tipAmount, total}, onReset, state: {bill, people, tip, tipCustom, tipSelected} }) => {
    return (
        <form className={styles.tipCalculatorForm}>
            <div className={styles.inputContainer}>
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
                           value={bill}
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
                               customValue={tipCustom}
                    />
                </div>

                <div className={styles.inputWrapper}>
                    <div className={styles.header}>
                        <label>
                            Number of People
                        </label>
                        {people !== '' && people == 0 && (
                            <div className={styles.errorMessage}>
                                Can't be zero
                            </div>
                        )}
                    </div>
                    <Input name={'people'}
                           icon={'/icons/icon-person.svg'}
                           type={'number'}
                           min={0}
                           onChange={e => onChange(e.target.name, e.target.value)}
                           placeholder={'0'}
                           value={people}
                           error={people !== '' && people == 0}
                    />
                </div>
            </div>

            <div className={styles.resultBox}>
                <div className={styles.resultItem}>
                    <div className={styles.header}>
                        Tip Amount
                        <div className={styles.unit}>
                            / person
                        </div>
                    </div>
                    <div className={styles.value}>
                        ${tipAmount.toFixed(2)}
                    </div>
                </div>
                <div className={styles.resultItem}>
                    <div className={styles.header}>
                        Total
                        <div className={styles.unit}>
                            / person
                        </div>
                    </div>
                    <div className={styles.value}>
                        ${total.toFixed(2)}
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.resetButton}
                            type={'reset'}
                            onClick={_ => {
                                onReset();
                            }}
                            disabled={!bill && !people && !tip}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </form>
    );
};

export default TipCalculatorForm;
