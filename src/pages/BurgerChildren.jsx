import { useParams } from 'react-router-dom'
/* import { Header } from '../components/Header';
import { Footer } from '../components/Footer'; */

export const BurgerChildren = () => {

    const params = useParams();
    console.log(params)


    return (
        <div>
            ContactById - {params.id}
            <div>

            </div>
        </div>
    )
}
