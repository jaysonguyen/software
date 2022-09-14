export default function logger(reducer) {
    return (preState, action, args) => {
        console.group(action);
        console.log('preState: ', preState);
        console.log('Arguments: ', args);
        const nextState = reducer(preState, action, args);
        console.log('nextState: ', nextState);
        console.groupEnd()
        return nextState;
    }
}