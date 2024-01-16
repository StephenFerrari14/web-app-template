import { useEffect, useState, useContext } from "react";
import SignIn from "./auth/SignIn";
import MenuAppBar from './app/MenuAppBar';
import Copyright from "./app/Copyright";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "./GlobalProvider";

export default function App() {
  const [currentSession, setSession] = useState<null>(null); // Change type depending on auth
  const context = useContext(GlobalContext);

  useEffect(() => {
    // Add auth check here
    setSession(null)
  }, [context])

  return (
    <>
      <MenuAppBar session={currentSession}/>
      {currentSession ? <Outlet/> : <SignIn />}
      <Copyright />
    </>
  );
}
