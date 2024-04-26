import { Button, ButtonGroup, Card } from "react-bootstrap"
import Icons from "./Icons"
import React, { ReactElement, useContext, useState } from "react"
import { GeneratorModel } from "./models/Generators"
import EntropyContext from "./EntropyContext";
import { currency } from "./Helpers";

interface GeneratorProps {
  generator: GeneratorModel,
  setGenerator: (generator: GeneratorModel) => void,
}

export default function Generator(props: GeneratorProps) {
  const { entropy, setEntropy } = useContext(EntropyContext);
  const [isOpen, setOpen] = useState(false);

  const buy = (qt: number) => {
    const entropyCost = cost(qt);
    if (entropyCost > entropy) {
      return
    }
    props.setGenerator({
      ...props.generator,
      owned: props.generator.owned + qt
    });
    setEntropy(
      entropy - entropyCost
    )
  }

  // see https://blog.kongregate.com/the-math-of-idle-games-part-i/
  const b = props.generator.baseCost;
  const r = props.generator.growthRate;
  const k = props.generator.owned;
  const c = entropy;
  const cost = (n: number) => b * ((Math.pow(r, k) * (Math.pow(r, n) - 1)) / (r - 1));
  const max = Math.floor(Math.log((c * (r - 1)) / (b * Math.pow(r, k)) + 1) / Math.log(r));

  if (props.generator.isLocked) {
    return (
      <Card className="my-3 bg-body-tertiary" style={{ opacity: .4 }}>
        <Card.Body className="d-flex flex-row p-2 gap-3" style={{ cursor: "not-allowed" }}>
          <Icons.Padlock width={64} height={64} fill="white" stroke="black" strokeWidth={3} />
          <div className="flex-grow-1 d-flex flex-column justify-content-center" style={{ height: "64px" }}>
            <h5 className="mb-0">Locked</h5>
            <span style={{ fontSize: ".8rem" }}>{props.generator.lockedMessage}</span>
          </div>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="my-3 bg-body-tertiary">
      <Card.Body className="d-flex flex-row p-2 gap-3" style={{ cursor: "pointer" }} onClick={() => setOpen(!isOpen)}>
        {props.generator.icon}
        <div className="flex-grow-1 d-flex flex-column justify-content-center" style={{ height: "64px" }}>
          <h5 className="mb-0">{props.generator.name}</h5>
          <span style={{ fontSize: ".8rem" }}>Outputs <span className="font-monospace" style={{ color: "gold" }}>{currency(props.generator.output * props.generator.owned)}</span> Entropy</span>
        </div>
        <div className="font-monospace" style={{ fontSize: "48px", lineHeight: "64px", textAlign: "center", height: "64px", paddingTop: "4px" }}>
          {props.generator.owned}
        </div>
      </Card.Body>
      <Card.Footer className={isOpen ? "p-2" : "d-none"}>
        <div className="fw-light mb-2" style={{ maxHeight: "5.5rem", overflow: "auto" }}>{props.generator.description}</div>
        <div className="d-flex align-items-center">
          <div className="flex-grow-1">Cost <span className="font-monospace" style={{ color: "gold" }}>{currency(cost(1))}</span> per {props.generator.name}</div>
          <div>
            <ButtonGroup className="font-monospace" size="sm">
              <Button variant="dark" onClick={() => buy(1)} disabled={cost(1) > entropy} title={`${cost(1)}`}>x1</Button>
              <Button variant="dark" onClick={() => buy(10)} disabled={cost(10) > entropy} title={`${cost(10)}`}>x10</Button>
              <Button variant="dark" onClick={() => buy(100)} disabled={cost(100) > entropy} title={`${cost(100)}`}>x100</Button>
              <Button variant="dark" onClick={() => buy(max)} disabled={max <= 0} title={`${cost(max)}`}>MAX</Button>
            </ButtonGroup>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
}
