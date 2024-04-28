import React, { useContext, useState } from "react";
import { TechnologyModel } from "./models/Technologies";
import { Button, Card } from "react-bootstrap";
import Icons from "./Icons";
import { displayCurrency } from "./Helpers";
import { BUY_TECHNOLOGY, StateContext } from "./App";
import { MAIN_CURRENCY } from "./models/Wallet";

interface TechnologyProps {
  technology: TechnologyModel,
}

export default function Technology(props: TechnologyProps) {
  const [isOpen, setOpen] = useState(false);
  const { state, dispatch } = useContext(StateContext);

  if (props.technology.isLocked) {
    return (
      <Card className="my-3 bg-body-tertiary" style={{ opacity: .4 }}>
        <Card.Body className="d-flex flex-row p-2 gap-3" style={{ cursor: "not-allowed" }}>
          <Icons.Padlock width={64} height={64} fill="white" stroke="black" strokeWidth={3} />
          <div className="flex-grow-1 d-flex flex-column justify-content-center" style={{ height: "64px" }}>
            <h5 className="mb-0">Locked</h5>
            <span style={{ fontSize: ".8rem" }}>{props.technology.lockedMessage}</span>
          </div>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="my-3 bg-body-tertiary">
      <Card.Body className="d-flex flex-row p-2 gap-3 align-items-center" style={{ cursor: "pointer" }} onClick={() => setOpen(!isOpen)}>
        {props.technology.icon}
        <div className="flex-grow-1 d-flex flex-column justify-content-center" style={{ height: "64px" }}>
          <h5 className="mb-0">{props.technology.name}</h5>
          <span style={{ fontSize: ".8rem" }}>{props.technology.effectMessage}</span>
        </div>
        {props.technology.bought ? <Icons.CheckMark width={32} height={32} fill="lime" stroke="black" strokeWidth={3} className="me-3" /> : ""}
      </Card.Body>
      <Card.Footer className={isOpen ? "p-2" : "d-none"}>
        <div className="fw-light mb-2" style={{ maxHeight: "5.5rem", overflow: "auto" }}>{props.technology.description}</div>
        {props.technology.bought ? "" :
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">Cost <span className="font-monospace" style={{ color: "gold" }}>{displayCurrency(props.technology.cost)}</span></div>
            <div>
              <Button variant="dark" onClick={() => dispatch({ type: BUY_TECHNOLOGY, payload: { technology: props.technology } })} disabled={props.technology.cost > state.wallet.get(MAIN_CURRENCY)!}>Buy</Button>
            </div>
          </div>
        }
      </Card.Footer>
    </Card>
  );
}
