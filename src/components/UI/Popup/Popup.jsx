import * as React from "react";

export default function Popup({ isOpen, className, children }) {
  const dialogRef = React.useRef(null);

  return (
    <dialog open={isOpen} ref={dialogRef} className={className} id="dialog">
      {children}
    </dialog>
  );
}
