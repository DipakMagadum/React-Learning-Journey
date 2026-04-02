import { Input } from "./Components/Input";

export function Register(){
    return(
        <>
        <div className="flex justify-center items-center h-screen">

            <form className="flex flex-col bg-white shadow-xl/50 w-90 rounded-xl p-6">

            <h1 className="text-center text-sky-600 font-bold text-xl ">Register</h1>

            <Input
            label="Username"
            type=""
            value=""
            onChange=""
            />

            </form>
        </div>
        </>
    )
}