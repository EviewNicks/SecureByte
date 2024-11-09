import { useContext } from "react";
import { AuthContext } from "../context/Auth";
import HomePageAdmin from "./HomePageAdmin";
import HomePageUser from "./HomePageUser";


const Demo = () =>
{
    const { authData } = useContext(AuthContext);

    return (
        <>
            {authData && authData.role == "admin" && (
                <HomePageAdmin id={authData.id} />
            )}
            {authData && authData.role == "student" && (
                <HomePageUser id={authData.id} />
            )}
        </>
    );
};

export default Demo;

