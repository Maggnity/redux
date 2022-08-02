import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loggout } from '../redux/userSlice';

export default function Logout() {
    
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(loggout())
        console.log('logout');
        
    }    

    return (
        <div>
            <Button onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}