import React from "react";
import { useState } from "react";
// import Menu from "./Menu";
import 'flowbite';
import { Navbar } from "flowbite-react/lib/esm/components/Navbar";
import { Dropdown } from "flowbite-react/lib/esm/components/Dropdown";
import { Avatar } from "flowbite-react/lib/esm/components/Avatar";

const Navabr = () => {
  // const [isMenuOpen, SetMenu] = useState(false);
  return (

    <div className="dark ">
    <Navbar 
    fluid={true}
    rounded={true}
  ><div className=" sm:absolute">
    <Navbar.Brand   href="https://flowbite.com/">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="mr-0 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flowbite
      </span>
    </Navbar.Brand></div>
    <div className="flex md:order-2 ">
      <Dropdown
        arrowIcon={false}
        inline={true}
        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
      >
        <Dropdown.Header>
          <span className="block text-sm">
            Bonnie Green
          </span>
          <span className="block truncate text-sm font-medium">
            name@flowbite.com
          </span>
        </Dropdown.Header>
        <Dropdown.Item>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item>
          Settings
        </Dropdown.Item>
        <Dropdown.Item>
          Earnings
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          Sign out
        </Dropdown.Item>
      </Dropdown>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link
        href="/navbars"
        active={true}
      >
        Home
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        About
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Services
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Pricing
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Contact
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  </div>

   
  );
};

export default Navabr;
