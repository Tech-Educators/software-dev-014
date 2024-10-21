import * as Popover from "@radix-ui/react-popover";

export default function PopoverComponent() {
  return (
    <>
      <Popover.Root>
        <Popover.Trigger className="PopoverTrigger">
          Are you ready for some coaster rollers?
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="PopoverContent">
            <p>The best selection of coaster rollers in the world!</p>
            <p>Cool animations like you have never seen</p>
            <p>Ice-screams to die for!</p>
            <p>An egg timer to bless you during the day</p>
            <p>Biscuits with chai tea available on request</p>
            <Popover.Arrow className="PopoverArrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}
