export function Login(){
    return(
        <>
        <div className="flex justify-center items-center h-screen">

            <form >
                <h1>Login</h1>
                <label>Username</label>
                <input type="text" placeholder="username"/>

                <label>Password</label>
                <input type="password" placeholder="password"/>

                <button>Login</button>
            </form>
        </div>
        </>
    )
}