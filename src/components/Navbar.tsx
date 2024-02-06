import { Phone } from "lucide-react";
import Logo from "./icons/Logo";
import { Button } from "./ui/button";
import MenuBar from "./icons/MenuBar"


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <div className="bg-red-600 flex justify-around p-2 md:justify-start md:gap-4">
      <Button
        variant={"outline"}
        size={"icon"}
        className="rounded-full bg-gray-200"
      >
        <Logo />
      </Button>

      <Button variant={'outline'} className="rounded-2xl bg-[#FFEDED] text-[#FF4D4F]">
        <Phone className="mr-2 h-4 w-4 text-[#FF4D4F] "/>  
        Call Me Back
      </Button>

      <Sheet>

      <SheetTrigger asChild>
      <Button
        variant={"outline"}
        size={"icon"}
        className="rounded-full bg-gray-200"
        
      >
        <MenuBar />
      </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
           
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
           
            
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
