import React from 'react';

const QuestionAns = () => {
    return (
        <div>
            <div className='mt-3 p-2 bg-slate-200 border border-purple-600'>
                <h2 className='font-bold'>1. How does react works?</h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
            </div>
            <div className='mt-3 p-2 bg-slate-200 border border-purple-600'>
                <h2 className='font-bold'>2.Write The difference between props and state.</h2>
                <p>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.</p>
            </div>
            <div className='mt-3 p-2 bg-slate-200 border border-purple-600'>
                <h2 className='font-bold'>3. why we use useEffect?</h2>
                <p>We use useEffect for many tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. </p>
            </div>
        </div>
    );
};

export default QuestionAns;