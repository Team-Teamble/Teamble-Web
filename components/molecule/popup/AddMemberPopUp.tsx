import React, { useState } from "react";
import styled from "styled-components";
import { usePopper } from "react-popper";

export function AddMemberPopUp() {
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", enabled: true, options: { element: arrowElement } }],
  });

  return (
    <StyledAddMemberPopUp>
      <button type="button" ref={setReferenceElement}>
        Reference element
      </button>

      <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        Popper element
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </StyledAddMemberPopUp>
  );
}
const StyledAddMemberPopUp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gold;
`;
