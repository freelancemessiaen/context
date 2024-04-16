import { Text } from "react-native"

export function TotalPrice({books}) {
    const totalPrice =books.reduce((acc,currenBook) => {
        return currenBook.price + acc
    },0)
    return (
        <>
        <Text>Prix total : {totalPrice.toFixed(2)} euros</Text>
        </>
    )
}