import React , {useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import "./Header.css"

function Header() {
    const navigate = useNavigate()

    const [name, setName] = useState(localStorage.getItem('name'));

    const logOutuser = (e: any) => {
        e.preventDeafult()
        localStorage.setItem("name" , "")
        localStorage.setItem("token" , "")
        localStorage.setItem("room" , "")
        localStorage.setItem("role" , "")
        navigate("/")
    }

    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <Link className="navbar-brand" to="/"> <i>Chat Express</i> </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/chat">Chat</Link>
                        </li>
                       {/* {name ? <p style={{color:"white" , marginLeft:"20rem"}}>Welcome User: {name} </p> : null} */}
                    </ul>


                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-success m-2 my-sm-0" type="submit"> <Link to="/login"> Login </Link> </button>
                        <button className="btn btn-danger m-2 my-sm-0" type="submit" onClick={logOutuser}>  Logout  </button>
    
                        </form>
                      

                </div>
            </nav>
        </div>
    )
}

export default Header