import React,{createContext,useState} from "react"

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books,setBooks] = useState([
        {
            ad:"Var Mısın",
            id:1
        },
        {
            ad:"Hayvan Çiftliği",
            id:2
        },
        {
            ad:"Var Mısın 2",
            id:3
        },
    ])
    return(
        <BookContext.Provider value={{books}}>
            {
                props.children
            }
        </BookContext.Provider>
    )
}

export default BookContextProvider;