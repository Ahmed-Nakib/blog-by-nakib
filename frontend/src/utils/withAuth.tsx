import { useMeQuery } from "@/redux/modules/auth/auth.api"
import type { ComponentType } from "react";
import { useNavigate } from "react-router";

export const withAuth = (Component: ComponentType) => {

    return function Com () {
        const {data} = useMeQuery(undefined);

        const navigate = useNavigate();


        if(!data) {
            navigate("/login")
        }
        console.log(data);
        return <Component /> ;
    }
}

