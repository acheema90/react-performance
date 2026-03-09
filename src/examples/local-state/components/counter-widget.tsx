import { Card } from '$components/card';
import { Button } from '$components/button';
import { useCallback, useState } from 'react';


export function CounterWidget() {
  console.log('CounterWidget rendered');

  const [count, setCount] = useState(0);
  const onIncrement = useCallback(() => setCount((prev) => prev + 1), []);
  const onDecrement = useCallback(() => setCount((prev) => prev - 1), []);
  const onReset = useCallback(() => setCount(0), []);

  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
        Counter Widget
      </h3>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
        A simple counter. Notice this re-renders when ANY widget updates because state is in the
        parent.
      </p>

      <div className="flex items-center justify-center space-x-4">
        <Button onClick={onDecrement} variant="secondary">
          −
        </Button>
        <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">{count}</span>
        <Button onClick={onIncrement} variant="secondary">
          +
        </Button>
      </div>

      <div className="mt-4 flex justify-center">
        <Button onClick={onReset} variant="secondary" size="small">
          Reset
        </Button>
      </div>
    </Card>
  );
}
