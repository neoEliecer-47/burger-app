import { Phone } from "lucide-react";
import Logo from "./icons/Logo";
import { Button } from "./ui/button";
import MenuBar from "./icons/MenuBar";

const Navbar = () => {
  return (
    <div className="bg-red-600">
      <Button
        variant={"outline"}
        size={"icon"}
        className="rounded-full bg-gray-200"
      >
        <Logo />
      </Button>

      <Button>
        <Phone className="mr-2 h-4 w-4"/>  
        Call Me Back
      </Button>

      <Button>
        <MenuBar />
      </Button>
    </div>
  );
};

export default Navbar;
