import { memo } from 'react'
import Paragraph from './Paragraph';
//memo check xem coi co props nao thay đổi hay không
//Nếu thay đổi thì nó re-render
function Content1({onInCrease}) {
    console.log('re-render');
    return (
        <>
            <h2>Hello Anh em</h2>
            <button onClick={onInCrease}>Click Count</button>

        </>
    )
}


function Content({theme}) {
    return (
        <>
            <Paragraph theme={theme}/>
        </>
    )
}

export default memo(Content);