import React, { useContext, useState } from "react";
import EntropyContext from "./EntropyContext";
import { GeneratorDict } from "./models/Generators";
import { TechnologyDict, TechnologyModel } from "./models/Technologies";
import { Card } from "react-bootstrap";
import Icons from "./Icons";
import { currency } from "./Helpers";

interface TechnologyProps {
  generators: GeneratorDict,
  technologies: TechnologyDict,
  technology: TechnologyModel,
  setTechnology: (technology: TechnologyModel) => void,
}

export default function Technology(props: TechnologyProps) {
  const { entropy, setEntropy } = useContext(EntropyContext);
  const [isOpen, setOpen] = useState(false);

  const buy = () => {
    if (props.technology.cost > entropy) {
      return
    }

    // update tech
    props.setTechnology({
      ...props.technology,
      isLocked: false,
    })

    // apply tech effect
    props.technology.effect(
      props.generators
    );

    // update entropy
    setEntropy(
      entropy - props.technology.cost,
    )
  }

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
      <Card.Body className="d-flex flex-row p-2 gap-3" style={{ cursor: "pointer" }} onClick={() => setOpen(!isOpen)}>
        {props.technology.icon}
        <div className="flex-grow-1 d-flex flex-column justify-content-center" style={{ height: "64px" }}>
          <h5 className="mb-0">{props.technology.name}</h5>
          <span style={{ fontSize: ".8rem" }}>{props.technology.effectMessage}</span>
        </div>
        {/* <div className="font-monospace" style={{ fontSize: "48px", lineHeight: "64px", textAlign: "center", height: "64px", paddingTop: "4px" }}>
          {props.technology.unlock}
        </div> */}
      </Card.Body>
      <Card.Footer className={isOpen ? "p-2" : "d-none"}>
        <div className="fw-light mb-2" style={{ maxHeight: "5.5rem", overflow: "auto" }}>{props.technology.description}</div>
        <div className="d-flex align-items-center">
          <div className="flex-grow-1">Cost <span className="font-monospace" style={{ color: "gold" }}>{currency(props.technology.cost)}</span> per {props.technology.name}</div>
          {/* <div>
            <ButtonGroup className="font-monospace" size="sm">
              <Button variant="dark" onClick={() => buy(1)} disabled={cost(1) > entropy} title={`${cost(1)}`}>x1</Button>
              <Button variant="dark" onClick={() => buy(10)} disabled={cost(10) > entropy} title={`${cost(10)}`}>x10</Button>
              <Button variant="dark" onClick={() => buy(100)} disabled={cost(100) > entropy} title={`${cost(100)}`}>x100</Button>
              <Button variant="dark" onClick={() => buy(max)} disabled={max <= 0} title={`${cost(max)}`}>MAX</Button>
            </ButtonGroup>
          </div> */}
        </div>
      </Card.Footer>
    </Card>
  );
}
