import { useContext } from "react";
import { Context } from "../context/User";

const useUser = () => useContext(Context);

export default useUser;