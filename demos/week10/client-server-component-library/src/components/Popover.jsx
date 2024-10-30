import Animation from "./Animation";
import * as Popover from "@radix-ui/react-popover";
import "./styles.css";

const FlowerPopover = ({ flower_name, flower_location }) => (
  <Popover.Root>
    <Popover.Trigger className="PopoverTrigger">Flower Info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" sideOffset={5}>
        <Animation
          flower_name={flower_name}
          flower_location={flower_location}
        />

        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default FlowerPopover;
