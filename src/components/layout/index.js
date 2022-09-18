import { Outlet } from "react-router-dom";
import Menu from "../menu";

export default function Layout() {
  return (
    <>
      <Menu/>
      <div className="page">
       <Outlet/> 
      </div>
    </>
  )
}