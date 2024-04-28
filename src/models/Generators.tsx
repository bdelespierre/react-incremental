import { ReactElement } from "react"
import Icons from "../Icons"
import React from "react"
import { StateType } from "../App"
import { where } from "../Helpers"

// ----------------------------------------------------------------------------
// Models

export type GeneratorModel = {
  name: string
  icon: ReactElement,
  description: string | ReactElement

  output: number
  baseCost: number
  growthRate: number
  owned: number

  isLocked: Boolean
  unlock?: (state: StateType) => boolean,
  lockedMessage?: string,

  bonuses: GeneratorBonusModel[],
}

export type GeneratorBonusModel = {
  name: string,
  multiplier: number,
}

export const EntropicAccelerator = {
  name: "Entropic Accelerator",
  icon: <Icons.Clockwork width={64} height={64} fill="white" stroke="black" strokeWidth={3} />,
  description: <div>
    <p>The Entropic Accelerator is a highly advanced and enigmatic device, shrouded in mystery and speculation. Rumored to have been created by an ancient, highly advanced civilization, this machine possesses the ability to manipulate the fundamental laws of thermodynamics on a cosmic scale.</p>

    <p>At its core, the Entropic Accelerator harnesses the power of quantum fluctuations, amplifying and directing them in a controlled manner.By introducing carefully calculated disturbances into the fabric of spacetime, it disrupts the delicate balance of energy and matter, causing an accelerated increase in the universe's overall entropy.</p>

    <p>The consequences of activating this machine are both awe-inspiring and terrifying. Entire star systems could be destabilized, their orderly structures unraveling into chaotic maelstroms of energy. Galaxies might be torn asunder, their constituent matter dispersed into a diffuse, disorganized state, contributing to the ever-increasing disorder of the cosmos.</p>

    <p>While the true purpose behind the creation of such a device remains a mystery, some speculate that it was intended as a last resort, a failsafe mechanism to hasten the eventual heat death of the universe, should it become necessary to reset the cosmic cycle and pave the way for a new beginning.</p>
  </div>,
  isLocked: false,
  output: 1,
  baseCost: 10,
  growthRate: 1.5,
  owned: 1,
  bonuses: [],
};

export const IntegratedCircuits = {
  name: "Integrated Circuits",
  icon: <Icons.Processor width={64} height={64} fill="white" stroke="black" strokeWidth={3} />,
  description: <div>
    <p>The Integrated Circuits are a cutting-edge technological marvel, designed to augment the already formidable capabilities of the Entropic Accelerator. Developed by a clandestine group of brilliant minds, these circuits harness the power of quantum entanglement and parallel processing on an unprecedented scale.</p>

    <p>At their core, the Integrated Circuits are composed of vast arrays of interconnected quantum processors, each capable of performing billions of calculations simultaneously. These processors are intricately linked through a network of entangled particles, allowing for instantaneous communication and synchronization across the entire system.</p>

    <p>When integrated with the Entropic Accelerator, these circuits exponentially amplify its ability to manipulate the fabric of spacetime. By leveraging the principles of quantum superposition and parallel universes, the Integrated Circuits enable the Accelerator to introduce disturbances across multiple realities simultaneously, accelerating the increase in entropy at a rate that defies conventional physics.</p>

    <p>The implications of such technology are both awe-inspiring and terrifying. With the Integrated Circuits in place, entire galaxies could be unraveled in the blink of an eye, their matter and energy dispersed into a chaotic, entropic maelstrom. The boundaries between realities blur, as the universe hurtles towards its ultimate fate – a state of absolute disorder and randomness – at an unprecedented pace.</p>
  </div>,
  isLocked: true,
  unlock: (state: StateType) => (where(state.generators, (generator) => generator.name == EntropicAccelerator.name)?.owned ?? 0) >= 2,
  output: 3,
  baseCost: 1,
  growthRate: 1.05,
  owned: 0,
  bonuses: [],
};

export const EssenceOfVoid = {
  name: "Essence of Void",
  icon: <Icons.DrippingTube width={64} height={64} fill="white" stroke="black" strokeWidth={3} />,
  description: <div>
    <p>The Essence of Void is a mysterious and enigmatic liquid that defies the laws of physics as we know them. Rumored to have been discovered by an ancient civilization, this inky black substance seems to absorb all light that touches its surface, creating an unsettling void-like appearance.</p>

    <p>Handling the Essence of Void is a perilous endeavor, as it exhibits properties that challenge our understanding of matter and energy. When exposed to the liquid, ordinary objects appear to lose their mass and density, becoming weightless and ethereal, as if they are being slowly erased from existence.</p>

    <p>Perhaps the most unsettling aspect of the Essence of Void is its ability to distort the fabric of spacetime itself. Eyewitnesses have reported strange gravitational anomalies and distortions in the very fabric of reality near large quantities of the liquid, as if it were a gateway to a realm beyond our comprehension.</p>

    <p>Some speculate that the Essence of Void is a manifestation of a higher-dimensional reality, a glimpse into the true nature of the cosmos, where the concepts of matter, energy, and even existence itself are mere illusions. Others fear that it is a harbinger of oblivion, a force that could unravel the very foundations of our universe if left unchecked.</p>
  </div>,
  isLocked: true,
  output: 1,
  baseCost: 10,
  growthRate: 1.5,
  owned: 1,
  unlock: (state: StateType) => (where(state.generators, (generator) => generator.name == IntegratedCircuits.name)?.owned ?? 0) >= 2,
  lockedMessage: "Requires 2 Integrated Circuits",
  bonuses: [],
}

export const CursedStar = {
  name: "Cursed Star",
  icon: <Icons.CursedStar width={64} height={64} fill="white" stroke="black" strokeWidth={3} />,
  description: <div>
    <p>The Cursed Star is a mysterious and powerful artifact of unknown origin. It appears as a perfectly spherical gemstone, about the size of a golf ball, with an inky black color that seems to absorb all light that touches it. The Cursed Star emits a faint, ominous hum that only those in close proximity can hear.</p>

    <p>When held in one's hand, the Cursed Star exerts a strange pull, as if it is trying to draw the holder's life force into its depths. Those who gaze into its black depths often report feeling a sense of vertigo and unease, as if they are peering into the void itself. Legends say that the Cursed Star contains the essence of a malevolent entity from another realm, one that seeks to consume all light and life in the universe.</p>

    <p>Only the most powerful and skilled mages dare to study the Cursed Star, for it is said that those who delve too deeply into its mysteries risk being consumed by the darkness within. The Cursed Star's origins and true nature remain shrouded in mystery, a testament to the darkness that lurks at the heart of the cosmos.</p>
  </div>,
  isLocked: true,
  output: 1,
  baseCost: 1,
  growthRate: 1,
  owned: 1,
  unlock: (state: StateType) => (where(state.generators, (generator) => generator.name == EssenceOfVoid.name)?.owned ?? 0) >= 2,
  lockedMessage: "Requires 2 Essences of Void",
  bonuses: [],
}

export const DemonCore = {
  name: "Demon Core",
  icon: <Icons.PlanetCore width={64} height={64} fill="white" stroke="black" strokeWidth={3} />,
  description: <div>
    <p>In the depths of a secret laboratory, a team of brilliant scientists has harnessed the power of the Demon Core, a mysterious and volatile energy source. This enigmatic power core, once a subject of fascination and fear, has been tamed and transformed into a game-changing technology.</p>

    <p>The Demon Core emits a pulsating, otherworldly glow, its energy crackling with untamed potential. When properly contained and channeled, this power source can provide an almost limitless supply of energy, fueling advanced technologies and pushing the boundaries of what's possible.</p>

    <p>The Demon Core's power is not without its risks, however. Mishandling or overexposure to its energy can have devastating consequences, leading to glitches, malfunctions, and even catastrophic failures. One must carefully manage his use of the Demon Core, balancing its immense power with the need for caution and precision.</p>
  </div>,
  isLocked: true,
  output: 1,
  baseCost: 1,
  growthRate: 1,
  owned: 1,
  unlock: (state: StateType) => (where(state.generators, (generator) => generator.name == CursedStar.name)?.owned ?? 0) >= 2,
  lockedMessage: "Requires 2 Essences of Void",
  bonuses: [],
}

// ----------------------------------------------------------------------------
// Models List

const Generators: GeneratorModel[] = [
  EntropicAccelerator,
  IntegratedCircuits,
  EssenceOfVoid,
  CursedStar,
  DemonCore
];

export default Generators;

// ----------------------------------------------------------------------------
// Functions

/**
 * @see https://blog.kongregate.com/the-math-of-idle-games-part-i
 */
export function getCostToBuy(generator: GeneratorModel, qt: number): number {
  const b = generator.baseCost;
  const r = generator.growthRate;
  const k = generator.owned;

  return b * ((Math.pow(r, k) * (Math.pow(r, qt) - 1)) / (r - 1));
}

/**
 * @see https://blog.kongregate.com/the-math-of-idle-games-part-i
 * @param generator The generator
 * @param amount The amount of currency owned
 */
export function getMaxToBuy(generator: GeneratorModel, amount: number): number {
  const b = generator.baseCost;
  const r = generator.growthRate;
  const k = generator.owned;

  return Math.floor(Math.log((amount * (r - 1)) / (b * Math.pow(r, k)) + 1) / Math.log(r));
}
