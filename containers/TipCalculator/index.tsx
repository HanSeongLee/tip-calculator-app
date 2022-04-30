import React, {HTMLAttributes, useCallback, useMemo, useState} from 'react';
import TipCalculatorForm from '../../components/TipCalculatorForm';

const TipCalculator: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    const [state, setState] = useState({
        bill: '',
        people: '',
        tip: '',
        tipCustom: '',
        tipSelected: '',
    });

    const onChange = useCallback((name: string, value: any) => {
        setState(state => {
            return {
                ...state,
                [name]: value,
            }
        });
    }, []);

    const result = useMemo(() => {
        const bill = Number(state.bill);
        const people = Number(state.people);
        const tip = Number(state.tip);

        if (!bill || !people  || !tip) {
            return {
                tipAmount: 0,
                total: 0,
            };
        }

        const tipAmount = (bill * (tip / 100)) / people;
        const total = (bill / people) + tipAmount;

        return {
            tipAmount,
            total,
        }
    }, [state]);

    const onReset = useCallback(() => {
        setState({
            bill: '',
            people: '',
            tip: '',
            tipCustom: '',
            tipSelected: '',
        });
    }, []);

    return (
        <div {...props}>
            <TipCalculatorForm onChange={onChange}
                               result={result}
                               onReset={onReset}
                               state={state}
            />
        </div>
    );
};

export default TipCalculator;
