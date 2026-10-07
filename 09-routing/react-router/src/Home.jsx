import {Link} from "react-router-dom"
export function Home(){
    return(
        <>
        <div className="flex bg-sky-600 h-15 items-center justify-between p-4 ">
        <nav>
            <ul className="flex gap-7 text-white text-lg">
              <Link to="/login"> <li>Login</li></Link> 
               <Link to="/register"> <li>Register</li> </Link>
                <Link to="/about"><li>About</li></Link>
            </ul>
        </nav>
        </div>
        </>
    )
}