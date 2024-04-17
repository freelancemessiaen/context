import { Text } from "react-native"
import { useContext } from "react"
import { BookContext} from '../../Contexts/BookContext'

export function BookList() {
    const {books} = useContext(BookContext)
    return (
        <>
        {books.map((book) => (
            <Text key= {book.id}>
                {book.title} - {book.price} - euros
            </Text>
        ))}
        </>
    )
}