import { Button, ButtonGroup, Card } from "react-bootstrap"
import Icons from "./Icons"
import React, { ReactElement, useContext, useState } from "react"
import { GeneratorModel, getCostToBuy, getMaxToBuy } from "./models/Generators"
import { displayCurrency } from "./Helpers";
import { MAIN_CURRENCY } from "./models/Wallet";
import { BUY_GENERATOR, StateContext } from "./App";

interface GeneratorProps {
  generator: GeneratorModel,
}

export default function Generator(props: GeneratorProps) {
  const { state, dispatch } = useContext(StateContext)
  const [isOpen, setOpen] = useState(false);

  const funds = state.wallet.get(MAIN_CURRENCY)!;
  const cost = (n: number) => getCostToBuy(props.generator, n);
  const max = getMaxToBuy(props.generator, state.wallet.get(MAIN_CURRENCY)!);
  const buy = (n: number) => dispatch({
    type: BUY_GENERATOR,
    payload: { generator: props.generator, qt: n }
  })

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

  let bonuses: ReactElement | null = null;
  if (props.generator.bonuses.length > 0) {
    bonuses = <div>
      <strong>Bonuses</strong>
      <ul className="mb-0">{props.generator.bonuses.map((bonus) => <li key={bonus.name}>{bonus.name}: <span style={{ color: "lime" }}>+{Math.round((bonus.multiplier - 1) * 100)}%</span></li>)}</ul>
    </div>
  }

  return (
    <Card className="my-3 bg-body-tertiary">
      <Card.Body className="d-flex flex-row p-2 gap-3" style={{ cursor: "pointer" }} onClick={() => setOpen(!isOpen)}>
        {props.generator.icon}
        <div className="flex-grow-1 d-flex flex-column justify-content-center" style={{ height: "64px" }}>
          <h5 className="mb-0">{props.generator.name}</h5>
          <span style={{ fontSize: ".8rem" }}>Outputs <span className="font-monospace" style={{ color: "gold" }}>{displayCurrency(props.generator.output * props.generator.owned)}</span> Entropy</span>
        </div>
        <div className="font-monospace" style={{ fontSize: "48px", lineHeight: "64px", textAlign: "center", height: "64px", paddingTop: "4px" }}>
          {props.generator.owned}
        </div>
      </Card.Body>
      <Card.Footer className={isOpen ? "p-2" : "d-none"}>
        <div className="fw-light mb-2" style={{ maxHeight: "5.5rem", overflow: "auto" }}>{props.generator.description}</div>
        <div className="d-flex align-items-center">
          <div className="flex-grow-1">Cost <span className="font-monospace" style={{ color: "gold" }}>{displayCurrency(cost(1))}</span> per {props.generator.name}</div>
          <div>
            <ButtonGroup className="font-monospace" size="sm">
              <Button variant="dark" onClick={() => buy(1)} disabled={cost(1) > funds}>x1</Button>
              <Button variant="dark" onClick={() => buy(10)} disabled={cost(10) > funds}>x10</Button>
              <Button variant="dark" onClick={() => buy(100)} disabled={cost(100) > funds}>x100</Button>
              <Button variant="dark" onClick={() => buy(max)} disabled={max <= 0}>MAX</Button>
            </ButtonGroup>
          </div>
        </div>
        {bonuses}
      </Card.Footer>
    </Card>
  );
}
