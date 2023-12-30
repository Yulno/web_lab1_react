import { useState } from 'react';
import classes from './CounterButton.module.css';


const CounterButton: React.FC = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((count) => count + 1);
    };

    return (
        <button onClick={handleClick}>
          count is {count}
        </button>
    );
};

export default CounterButton;