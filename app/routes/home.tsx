import type { Route } from "./+types/home";
import {Link} from "react-router";
//import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    // { title: "New React Router App" },
    // { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  //return <Welcome />;
  return(
      <div>
        <h1>Sword</h1>

          <Link
              to="/swordSlash/swordSlash"
          >
              Sword testing
          </Link>
      </div>


  )
}
