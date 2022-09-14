import { createContext, useContext } from "react"
import {ThemeContext} from "./ThemeContext"

function Paragraph() {
    console.log('theme', theme)
    const theme =  createContext(ThemeContext)
    return (
        <p className={theme}>Trong bài viết này là toàn bộ những câu nói hay bằng tiếng Anh truyền cảm hứng hay nhất 2022 mà Eng Breaking mang đến cho bạn.</p>
    )
}

export default Paragraph