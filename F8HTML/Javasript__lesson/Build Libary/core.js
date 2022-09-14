export default function html([first,...strings], ...values) {
     return values.reduce(
        (acc, curr) => acc.concat(curr, strings.shift()),
        [first]
     ).filter(x => x && x !== true || x === 0).join('');
}



export function createStore(reducer) {
    let state = reducer();
    const roots = new Map() // mot kieu object dac biet lay object lam key

    
    function render() {
        for(const [root, component] of roots) {
            const output = component();
            root.innerHTML = output;
        }
    }

    return {
        attach(root, component) {
            roots.set(root, component);
            render();
        },
        connect(selector = state => state) {
            return component => (props, ...args) =>
                component(Object.assign({}, props, selector(state), ...args))
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args);
            render();
        }
    }
}

