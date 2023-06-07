import { useState } from "react"

const BooksInput = ({ books = [], setBooks }) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const handleAddBooksButton = () => {
        if (inputValue.trim() === "") return
        setBooks([inputValue, ...books])
        setInputValue("")
    }

    const handleClearList = () => {
        setBooks([])
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleAddBooksButton();
        }
    };

    return (
        <div className="text-center">
            <input
                onChange={(e) => handleInputChange(e)}
                onKeyPress={handleKeyPress}
                placeholder="Write a Books"
                type="text"
                value={inputValue}
            />
            <button
                onClick={(e) => handleAddBooksButton(e)}
                className="btn btn-primary btn-sm ms-2 mb-1"
                type="button"
            >
                Add
            </button>
            <button
                onClick={(e) => handleClearList(e)}
                className="btn btn-danger btn-sm ms-2 mb-1"
                type="button"
            >
                Clean
            </button>
        </div>
    )
}

export default BooksInput