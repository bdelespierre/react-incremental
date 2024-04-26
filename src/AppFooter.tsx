import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Icons from "./Icons";
import { useContext } from "react";
import NavigationContext from "./NavigationContext";

export default function AppFooter() {
  const { page, setPage } = useContext(NavigationContext);

  return (
    <Navbar fixed="bottom" className="bg-body-tertiary">
      <Nav fill className="justify-content-center w-100">
        <Nav.Item>
          <Nav.Link className={page == "Generators" ? "p-0" : ""} onClick={() => { setPage("Generators"); }}>
            <Icons.Clockwork width={page == "Generators" ? 48 : 32} height={page == "Generators" ? 48 : 32} fill={page == "Generators" ? "gold" : "white"} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={page == "Technologies" ? "p-0" : ""} onClick={() => { setPage("Technologies") }}>
            <Icons.Erlenmeyer width={page == "Technologies" ? 48 : 32} height={page == "Technologies" ? 48 : 32} fill={page == "Technologies" ? "gold" : "white"} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={page == "Prestige" ? "p-0" : ""} onClick={() => { setPage("Prestige") }}>
            <Icons.Upgrade width={page == "Prestige" ? 48 : 32} height={page == "Prestige" ? 48 : 32} fill={page == "Prestige" ? "gold" : "white"} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={page == "Achievements" ? "p-0" : ""} onClick={() => { setPage("Achievements") }}>
            <Icons.TrophyCup width={page == "Achievements" ? 48 : 32} height={page == "Achievements" ? 48 : 32} fill={page == "Achievements" ? "gold" : "white"} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={page == "Settings" ? "p-0" : ""} onClick={() => { setPage("Settings") }}>
            <Icons.Cog width={page == "Settings" ? 48 : 32} height={page == "Settings" ? 48 : 32} fill={page == "Settings" ? "gold" : "white"} />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
