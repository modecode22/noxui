import { useRef, useState } from "react";
import SelectAction from "../ui/select-action";
import Tooltip from "../ui/tooltip";
import Button from "../ui/button";

const SelectActionExample = () => {
      const [isLoading, setIsLoading] = useState(false);
      const handleClick = () => {
        setIsLoading(true);
        // Simulate loading for 2 seconds
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      };
      const ref = useRef<HTMLButtonElement | null>(null);
  return (
    <SelectAction
      theLabel={
        <Tooltip name="Select action" key={"321"} direction="bottom">
          <Button isLoading={isLoading} ref={ref}>
            Select action
          </Button>
        </Tooltip>
      }
    >
      <main
        onClick={() => {
          handleClick();
          ref?.current?.click();
        }}
        className="mt-1 relative gap-1 flex-col flex p-1 z-50 min-w-[4rem] overflow-hidden rounded-md border border-gray-100/20   bg-gray-800/50 backdrop-blur-sm  shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 "
      >
        <div
          onClick={() => {
            console.log("datatatata");
          }}
          className="relative text-gray-200  hover:bg-gray-600 cursor-pointer flex w-full  select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-700 focus:text-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        >
          action 1
        </div>
        <div
          onClick={() => {
            console.log("datatatata");
          }}
          className="relative text-gray-200  hover:bg-gray-600 cursor-pointer flex w-full  select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-700 focus:text-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        >
          action 2
        </div>
        <div
          onClick={() => {
            console.log("datatatata");
          }}
          className="relative text-gray-200  hover:bg-gray-600 cursor-pointer flex w-full  select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-700 focus:text-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        >
          action 3
        </div>
        <div
          onClick={() => {
            console.log("datatatata");
          }}
          className="relative text-gray-200  hover:bg-gray-600 cursor-pointer flex w-full  select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-700 focus:text-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        >
          action 4
        </div>
      </main>
    </SelectAction>
  );
}

export default SelectActionExample