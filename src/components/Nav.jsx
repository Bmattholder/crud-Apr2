import {Link} from 'react-router-dom'

function Nav(props) {
    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly' }}>
            <Link to='/'>Home</Link>
            <Link to='/form'>Form</Link>
        </div>
    );
}

export default Nav;