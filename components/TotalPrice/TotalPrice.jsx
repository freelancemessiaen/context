import { Text } from "react-native"  // Importation du composant Text depuis React Native
import { useContext } from "react"
import { BookContext} from '../../Contexts/BookContext'

export function TotalPrice() {
    // utilisations du Context créer
        const {books} = useContext(BookContext)
    // Calcul du prix total en utilisant la méthode reduce sur le tableau 'books'
    const totalPrice = books.reduce((acc, currentBook) => {
        // Ajoute le prix du livre actuel à l'accumulateur 'acc'
        return currentBook.price + acc;
    }, 0);  // 0 est la valeur initiale de l'accumulateur

    // Retourne un composant Text affichant le prix total formaté avec deux décimales
    return (
        <>
            <Text>Prix total : {totalPrice.toFixed(2)} euros</Text>
        </>
    );
}
