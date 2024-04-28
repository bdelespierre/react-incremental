import { ReactElement } from "react"
import Icons from "../Icons"
import React from "react"
import { StateType } from "../App"
import { where } from "../Helpers"
import { Entropy } from "./Wallet"

// ----------------------------------------------------------------------------
// Models

export type GeneratorModel = {
  id: string,
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

const Generators: { [key: string]: GeneratorModel } = {};

Generators.EntropicAccelerator = {
  id: "EntropicAccelerator",
  name: "Entropic Accelerator",
  icon: <Icons.Clockwork width={64} height={64} fill="white" stroke="black" strokeWidth={3} />,
  description: <div>
    <p>The Entropic Accelerator is a highly advanced and enigmatic device, shrouded in mystery and speculation. Rumored to have been created by an ancient, highly advanced civilization, this machine possesses the ability to manipulate the fundamental laws of thermodynamics on a cosmic scale.</p>

    <p>At its core, the Entropic Accelerator harnesses the power of quantum fluctuations, amplifying and directing them in a controlled manner.By introducing carefully calculated disturbances into the fabric of spacetime, it disrupts the delicate balance of energy and matter, causing an accelerated increase in the universe's overall entropy.</p>

    <p>The consequences of activating this machine are both awe-inspiring and terrifying. Entire star systems could be destabilized, their orderly structures unraveling into chaotic maelstroms of energy. Galaxies might be torn asunder, their constituent matter dispersed into a diffuse, disorganized state, contributing to the ever-increasing disorder of the cosmos.</p>

    <p>While the true purpose behind the creation of such a device remains a mystery, some speculate that it was intended as a last resort, a failsafe mechanism to hasten the eventual heat death of the universe, should it become necessary to reset the cosmic cycle and pave the way for a new beginning.</p>
  </div>,
  isLocked: false,
  output: 1000,
  baseCost: 10,
  growthRate: 1.5,
  owned: 1,
  bonuses: [],
};

Generators.IntegratedCircuits = {
  id: "IntegratedCircuits",
  name: "Integrated Circuits",
  icon: <Icons.Processor width={64} height={64} fill="white" stroke="black" strokeWidth={3} />,
  description: <div>
    <p>The Integrated Circuits are a cutting-edge technological marvel, designed to augment the already formidable capabilities of the Entropic Accelerator. Developed by a clandestine group of brilliant minds, these circuits harness the power of quantum entanglement and parallel processing on an unprecedented scale.</p>

    <p>At their core, the Integrated Circuits are composed of vast arrays of interconnected quantum processors, each capable of performing billions of calculations simultaneously. These processors are intricately linked through a network of entangled particles, allowing for instantaneous communication and synchronization across the entire system.</p>

    <p>When integrated with the Entropic Accelerator, these circuits exponentially amplify its ability to manipulate the fabric of spacetime. By leveraging the principles of quantum superposition and parallel universes, the Integrated Circuits enable the Accelerator to introduce disturbances across multiple realities simultaneously, accelerating the increase in entropy at a rate that defies conventional physics.</p>

    <p>The implications of such technology are both awe-inspiring and terrifying. With the Integrated Circuits in place, entire galaxies could be unraveled in the blink of an eye, their matter and energy dispersed into a chaotic, entropic maelstrom. The boundaries between realities blur, as the universe hurtles towards its ultimate fate – a state of absolute disorder and randomness – at an unprecedented pace.</p>
  </div>,
  isLocked: true,
  unlock: (state: StateType) => state.generators.EntropicAccelerator.owned >= 2,
  output: 3,
  baseCost: 1,
  growthRate: 1.05,
  owned: 0,
  bonuses: [],
};

Generators.EssenceOfVoid = {
  id: "EssenceOfVoid",
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
  unlock: (state: StateType) => state.generators.IntegratedCircuits.owned >= 2,
  lockedMessage: "Requires 2 Integrated Circuits",
  bonuses: [],
}

Generators.CursedStar = {
  id: "CursedStar",
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
  unlock: (state: StateType) => state.generators.EssenceOfVoid.owned >= 2,
  lockedMessage: "Requires 2 Essences of Void",
  bonuses: [],
}

Generators.DemonCore = {
  id: "DemonCore",
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
  unlock: (state: StateType) => state.generators.CursedStar.owned >= 2,
  lockedMessage: "Requires 2 Essences of Void",
  bonuses: [],
}
/*
Generators.ChronosTimepiece = {
  id: "ChronosTimepiece",
  name: "Chronos' Timepiece",
  description: <div>
    <p>Chronos' Timepiece is an intricate clockwork mechanism of unparalleled complexity, designed to disrupt the very fabric of time itself. This enigmatic device, named after the Greek god of time, is a marvel of engineering that defies conventional understanding.</p>

    <p>At its core, Chronos' Timepiece is powered by a series of gears and cogs, each one meticulously crafted to work in perfect harmony. However, this is no ordinary timepiece – its purpose is not to keep time, but to manipulate it. By harnessing the power of entropy, the device is able to accelerate the natural decay of time, causing it to flow at an exponential rate.</p>

    <p>As the gears of Chronos' Timepiece turn, they set in motion a chain reaction that ripples through the very fabric of reality. Time becomes distorted, causing events to unfold at a dizzying pace. The natural order is disrupted, and entropy reigns supreme. In the wake of Chronos' Timepiece, the world descends into chaos, as the very foundations of existence are shaken to their core.</p>

    <p>Yet, despite its destructive power, the device remains a testament to the ingenuity and ambition of its creators. It is a reminder that even the most fundamental aspects of reality are subject to the whims of those who would seek to control them.</p>
  </div>,
};

Generators.OblivionsMaw = {
  id: "OblivionsMaw",
  name: "Oblivion's Maw",
  description: <div>
    <p>Oblivion's Maw is a terrifying, mechanical monstrosity that defies all logic and reason. This gaping, metallic orifice is a testament to the depths of human depravity and the pursuit of power at any cost.</p>

    <p>At first glance, Oblivion's Maw appears to be a simple device, a mere collection of gears and pistons. But as one draws closer, the true horror of its nature becomes apparent. For this is no ordinary machine – it is a living, breathing entity, fueled by an insatiable hunger for matter and energy.</p>

    <p>As Oblivion's Maw opens its cavernous jaws, it unleashes a force of pure entropy, a maelstrom of chaos that consumes everything in its path. Buildings crumble, mountains are reduced to dust, and even the very fabric of space-time is torn asunder.</p>

    <p>Yet, despite its destructive power, Oblivion's Maw is not without purpose. For those who control it, it is a weapon of unimaginable power, a tool to reshape the world in their own image. But for those who fall victim to its ravenous appetite, it is a nightmare made flesh, a harbinger of the end of all things.</p>

    <p>In the end, Oblivion's Maw stands as a testament to the darkest corners of the human psyche, a reminder that even the most advanced technology can be twisted to serve the basest of desires.</p>
  </div>,
};

Generators.PandorasApparatus = {
  id: "PandorasApparatus",
  name: "Pandora's Apparatus",
  description: <div>
    <p>Pandora's Apparatus is a complex machine that defies all attempts at understanding. This enigmatic device, named after the fabled box of Greek myth, is a testament to the boundless curiosity and ambition of its creators.</p>

    <p>At its core, Pandora's Apparatus is a labyrinth of gears, pistons, and wires, each one intricately designed to work in perfect harmony. Yet, this is no ordinary machine – it is a portal to a realm of pure chaos, a gateway to the very heart of disorder itself.</p>

    <p>As the machine is activated, it begins to hum with a primal energy, a force that seems to defy all known laws of physics. Slowly, the gears begin to turn, and the wires begin to pulse with an otherworldly light. And then, with a deafening roar, the machine unleashes its payload – a torrent of pure entropy, a maelstrom of chaos that sweeps across the land.</p>

    <p>In the wake of Pandora's Apparatus, the world is transformed. Buildings crumble, mountains are reduced to rubble, and even the very fabric of reality is torn asunder. And like the fabled box of Greek myth, once opened, there is no way to close it again.</p>

    <p>Yet, despite the devastation it leaves in its wake, Pandora's Apparatus remains a testament to the boundless potential of the human mind. For those who dare to unlock its secrets, it promises untold power and the ability to reshape the world in their own image.</p>
  </div>,
};

Generators.DisintegratorRay = {
  id: "DisintegratorRay",
  name: "Disintegrator Ray",
  description: <div>
    <p>The Disintegrator Ray is a weapon of unparalleled destructive power, a testament to the darkest depths of human ingenuity. This beam of pure energy is capable of breaking down matter at the molecular level, reducing even the most solid of substances to a fine powder.</p>

    <p>At its core, the Disintegrator Ray is powered by a complex array of generators and capacitors, each one designed to channel an immense amount of energy into a focused beam. As the weapon is charged, the air around it crackles with electricity, and the very ground trembles beneath its power.</p>

    <p>When fired, the Disintegrator Ray unleashes a torrent of pure destruction, a beam of light that cuts through even the thickest of armor like a hot knife through butter. As the beam strikes its target, the matter that makes it up begins to break down, the bonds between atoms and molecules dissolving in an instant.</p>

    <p>In the wake of the Disintegrator Ray, chaos reigns supreme. Buildings collapse, vehicles are reduced to scrap, and even the very landscape is transformed, as the beam carves a path of destruction through everything in its path.</p>

    <p>Yet, despite its power, the Disintegrator Ray remains a double-edged sword. For while it may be an effective weapon against enemy forces, it also has the potential to cause untold collateral damage, sowing disarray and destruction wherever it is used.</p>
  </div>,
};

Generators.EntropyBomb = {
  id: "EntropyBomb",
  name: "Entropy Bomb",
  description: <div>
    <p>The Entropy Bomb is a weapon of unimaginable power, a device that harnesses the very forces of chaos itself. This explosive contraption is a testament to the darkest corners of human ingenuity, a creation born from the desire to sow destruction and disorder on an unprecedented scale.</p>

    <p>At its core, the Entropy Bomb is a complex array of chemicals and compounds, each one carefully selected for its ability to generate entropy. As the device is armed, the air around it crackles with an otherworldly energy, a palpable sense of impending doom that sends shivers down the spine of all who witness it.</p>

    <p>When detonated, the Entropy Bomb unleashes a shockwave of pure chaos, a force that ripples through the very fabric of reality. Buildings crumble, the ground splits open, and even the laws of physics seem to bend and twist under the strain of the blast.</p>

    <p>In the aftermath of the explosion, the world is left in a state of utter disarray. Survivors struggle to make sense of the devastation, as they grapple with the realization that the very foundations of their existence have been shaken to the core.</p>

    <p>Yet, despite the horror of its power, the Entropy Bomb remains a weapon of last resort, a tool to be used only in the most desperate of circumstances. For those who wield it, it is a double-edged sword, a weapon that promises victory but at a terrible cost.</p>
  </div>,
};

Generators.ChaosDynamo = {
  id: "ChaosDynamo",
  name: "Chaos Dynamo",
  description: <div>
    <p>The Chaos Dynamo is a colossal machine that defies all attempts at understanding. This massive generator is a testament to the boundless ambition of its creators, a device that seeks to harness the very forces of entropy itself and bend them to its will.</p>

    <p>At its heart, the Chaos Dynamo is a labyrinth of gears and pistons, each one meticulously crafted to work in perfect harmony. As the machine is activated, it begins to hum with a primal energy, a force that seems to defy all known laws of physics. Slowly, the gears begin to turn, and the air around the Dynamo crackles with an otherworldly electricity.</p>

    <p>As the Chaos Dynamo reaches its peak output, it unleashes a torrent of pure entropy, a force that ripples through the very fabric of reality. Buildings collapse, mountains are reduced to rubble, and even the laws of nature seem to bend and twist under the strain of the machine's power.</p>

    <p>In the wake of the Chaos Dynamo, the world is left in a state of utter chaos. Survivors struggle to make sense of the devastation, as they grapple with the realization that the very foundations of their existence have been shaken to the core.</p>

    <p>Yet, despite the horror of its power, the Chaos Dynamo remains a testament to the boundless potential of human ingenuity. For those who dare to harness its might, it promises the ability to reshape the world in their own image, to create a new order from the ashes of the old.</p>
  </div>,
};

Generators.DisruptorCannon = {
  id: "DisruptorCannon",
  name: "Disruptor Cannon",
  description: <div>
    <p>The Disruptor Cannon is a weapon of unparalleled power, a device that fires concentrated bursts of pure entropy, shattering the very foundations of reality itself. This fearsome armament is a testament to the darkest depths of human ingenuity, a creation born from the desire to dominate and destroy.</p>

    <p>At its core, the Disruptor Cannon is a complex array of generators and capacitors, each one designed to channel an immense amount of entropic energy into a focused beam. As the weapon is charged, the air around it crackles with an otherworldly electricity, and the very ground trembles beneath its power.</p>

    <p>When fired, the Disruptor Cannon unleashes a torrent of pure chaos, a beam of energy that disrupts the natural order of things. As the beam strikes its target, the bonds between atoms and molecules begin to break down, causing the very fabric of reality to warp and twist.</p>

    <p>In the wake of the Disruptor Cannon's blast, the world is left in a state of utter disarray. Buildings collapse, vehicles are reduced to scrap, and even the very landscape is transformed, as the beam carves a path of destruction through everything in its path.</p>

    <p>Yet, despite its power, the Disruptor Cannon remains a double-edged sword. For while it may be an effective weapon against enemy forces, it also has the potential to cause untold collateral damage, sowing disarray and destruction wherever it is used.</p>
  </div>
};

Generators.DoomsdaMechanism = {
  id: "DoomsdaMechanism",
  name: "Doomsday Mechanism",
  description: <div>
    <p>Doomsday Mechanism is the ultimate device, a creation of unparalleled power and ambition. This enigmatic contraption is designed to accelerate entropy on a universal scale, harnessing the very forces of chaos itself to bring about the end of all order.</p>

    <p>At its core, the Doomsday Mechanism is a labyrinth of gears and pistons, each one meticulously crafted to work in perfect harmony. As the machine is activated, it begins to hum with a primal energy, a force that seems to defy all known laws of physics. Slowly, the gears begin to turn, and the air around the device crackles with an otherworldly electricity.</p>

    <p>As the Doomsday Mechanism reaches its peak output, it unleashes a torrent of pure entropy, a force that ripples through the very fabric of reality. Galaxies collapse, stars are snuffed out, and even the very laws of nature seem to bend and twist under the strain of the machine's power.</p>

    <p>In the wake of the Doomsday Mechanism, the universe is left in a state of utter chaos. Survivors struggle to make sense of the devastation, as they grapple with the realization that the very foundations of their existence have been shaken to the core.</p>

    <p>Yet, despite the horror of its power, the Doomsday Mechanism remains a testament to the boundless potential of human ingenuity. For those who dare to wield its might, it promises the ability to reshape the universe in their own image, to create a new order from the ashes of the old.</p>
  </div>,
};

Generators.EntropyEngine = {
  id: "EntropyEngine",
  name: "Entropy Engine",
  description: <div>
    <p>The Entropy Engine is a colossal generator that harnesses the power of entropy, ",converting it into a limitless source of energy. This massive machine is a testament to the boundless ambition of its creators, a device that seeks to reshape the very fabric of reality itself.</p>

    <p>At its heart, the Entropy Engine is a labyrinth of gears and pistons, each one meticulously crafted to work in perfect harmony. As the machine is activated, it begins to hum with a primal energy, a force that seems to defy all known laws of physics. Slowly, the gears begin to turn, and the air around the Engine crackles with an otherworldly electricity.</p>

    <p>In the wake of the Entropy Engine's power, the world is transformed. Buildings collapse, mountains are reduced to rubble, and even the very laws of nature seem to bend and twist under the strain of the machine's might. Yet, despite the horror of its power, the Entropy Engine remains a testament to the boundless potential of human ingenuity, a device that promises to reshape the world in its own image.</p>
  </div>
};

Generators.ChaosConduit = {
  id: "ChaosConduit",
  name: "Chaos Conduit",
  description: <div>
    <p>The Chaos Conduit is a device that channels the forces of entropy, allowing the user to manipulate and direct the flow of chaos. This enigmatic contraption is a testament to the darkest corners of human ingenuity, a creation born from the desire to dominate and control the very forces of nature itself.</p>

    <p>At its core, the Chaos Conduit is a complex array of generators and capacitors, each one designed to channel an immense amount of entropic energy into a focused beam. As the device is activated, the air around it crackles with an otherworldly electricity, and the very ground trembles beneath its power.</p>

    <p>When the Chaos Conduit is used, it unleashes a torrent of pure chaos, a force that ripples through the very fabric of reality. Buildings collapse, vehicles are reduced to scrap, and even the very landscape is transformed, as the beam carves a path of destruction through everything in its path. Yet, despite its power, the Chaos Conduit remains a double-edged sword, a weapon that promises victory but at a terrible cost.</p>
  </div>
};

Generators.OblivionReactor = {
  id: "OblivionReactor",
  name: "Oblivion Reactor",
  description: <div>
    <p>The Oblivion Reactor is the heart of a massive machine that accelerates entropy on a planetary scale, reducing everything to dust. This colossal device is a testament to the darkest depths of human ambition, a creation that seeks to unmake the very foundations of existence itself.</p>

    <p>At its core, the Oblivion Reactor is a complex array of generators and capacitors, each one designed to channel an immense amount of entropic energy into a focused beam. As the device is activated, the air around it crackles with an otherworldly electricity, and the very ground trembles beneath its power.</p>

    <p>When the Oblivion Reactor is fired, it unleashes a torrent of pure entropy, a force that ripples through the very fabric of reality. Entire cities are reduced to rubble, mountains are flattened, and even the very bedrock of the planet begins to break down under the strain of the machine's power. In the wake of the Oblivion Reactor's blast, the world is left in a state of utter devastation, a lifeless husk that serves as a testament to the folly of those who dared to wield its might.</p>
  </div>
};

Generators.EntropySingularity = {
  id: "EntropySingularity",
  name: "Entropy Singularity",
  description: <div>
    <p>The Entropy Singularity is a device that creates a localized area of extreme entropy, causing the very fabric of reality to break down. This enigmatic contraption is a testament to the boundless curiosity and ambition of its creators, a device that seeks to unlock the secrets of the universe itself.</p>

    <p>At its core, the Entropy Singularity is a complex array of generators and capacitors, each one designed to channel an immense amount of entropic energy into a focused beam. As the device is activated, the air around it crackles with an otherworldly electricity, and the very ground trembles beneath its power.</p>

    <p>When the Entropy Singularity is used, it creates a localized area of extreme entropy, a zone of pure chaos that defies all attempts at understanding. Within this area, the laws of physics break down, and the very fabric of reality begins to warp and twist. Buildings collapse, vehicles are torn apart, and even the very air itself seems to thicken and choke the life from those who dare to venture too close. Yet, despite the horror of its power, the Entropy Singularity remains a testament to the boundless potential of human ingenuity, a device that promises to unlock the secrets of the universe itself.</p>
  </div>
};

Generators.DoomsdayDynamo = {
  id: "DoomsdayDynamo",
  name: "Doomsday Dynamo",
  description: <div>
    <p>The Doomsday Dynamo is a generator that amplifies the effects of entropy, causing a ripple effect that destabilizes entire systems. This massive machine is a testament to the darkest corners of human ambition, a creation that seeks to unmake the very fabric of reality itself.</p>

    <p>At its heart, the Doomsday Dynamo is a labyrinth of gears and pistons, each one meticulously crafted to work in perfect harmony. As the machine is activated, it begins to hum with a primal energy, a force that seems to defy all known laws of physics. Slowly, the gears begin to turn, and the air around the Dynamo crackles with an otherworldly electricity.</p>

    <p>As the Doomsday Dynamo reaches its peak output, it unleashes a torrent of pure entropy, a force that ripples through the very fabric of reality. Entire systems are destabilized, causing a chain reaction of chaos that spreads like wildfire. Buildings collapse, vehicles are torn apart, and even the very air itself seems to thicken and choke the life from those who dare to venture too close. In the wake of the Doomsday Dynamo's power, the world is left in a state of utter devastation, a testament to the folly of those who dared to wield its might.</p>
  </div>
};

Generators.ChaosEmitter = {
  id: "ChaosEmitter",
  name: "Chaos Emitter",
  description: <div>
    <p>The Chaos Emitter is a device that releases concentrated bursts of entropy, disrupting the natural order and causing widespread disorder. This fearsome armament is a testament to the darkest depths of human ingenuity, a creation born from the desire to dominate and destroy.</p>

    <p>At its core, the Chaos Emitter is a complex array of generators and capacitors, each one designed to channel an immense amount of entropic energy into a focused beam. As the weapon is charged, the air around it crackles with an otherworldly electricity, and the very ground trembles beneath its power.</p>

    <p>When fired, the Chaos Emitter unleashes a torrent of pure chaos, a beam of energy that disrupts the natural order of things. As the beam strikes its target, the bonds between atoms and molecules begin to break down, causing the very fabric of reality to warp and twist. In the wake of the Chaos Emitter's blast, the world is left in a state of utter disarray, a testament to the folly of those who dared to wield its might.</p>
  </div>
};

Generators.EntropyAmplifier = {
  id: "EntropyAmplifier",
  name: "Entropy Amplifier",
  description: <div>
    <p>The Entropy Amplifier is a machine that enhances the entropic properties of other devices, allowing them to cause even greater levels of chaos. This enigmatic contraption is a testament to the boundless ambition of its creators, a device that seeks to push the boundaries of what is possible.</p>

    <p>At its core, the Entropy Amplifier is a complex array of generators and capacitors, each one designed to channel an immense amount of entropic energy into a focused beam. As the machine is activated, the air around it crackles with an otherworldly electricity, and the very ground trembles beneath its power.</p>

    <p>When the Entropy Amplifier is used in conjunction with other entropic devices, it enhances their effects, causing them to unleash even greater levels of chaos. Buildings collapse more quickly, vehicles are torn apart with greater force, and the very fabric of reality seems to unravel at an accelerated pace. Yet, despite its power, the Entropy Amplifier remains a double-edged sword, a device that promises victory but at a terrible cost.</p>
  </div>
};

Generators.OblivionProjector = {
  id: "OblivionProjector",
  name: "Oblivion Projector",
  description: <div>
    <p>The Oblivion Projector is a weapon that fires a beam of pure entropy, capable of breaking down matter and energy on a molecular level. This fearsome armament is a testament to the darkest depths of human ingenuity, a creation born from the desire to dominate and destroy.</p>

    <p>At its core, the Oblivion Projector is a complex array of generators and capacitors, each one designed to channel an immense amount of entropic energy into a focused beam. As the weapon is charged, the air around it crackles with an otherworldly electricity, and the very ground trembles beneath its power.</p>

    <p>When fired, the Oblivion Projector unleashes a torrent of pure entropy, a beam of energy that breaks down matter and energy on a molecular level. As the beam strikes its target, the bonds between atoms and molecules begin to break down, causing the very fabric of reality to warp and twist. In the wake of the Oblivion Projector's blast, the world is left in a state of utter devastation, a testament to the folly of those who dared to wield its might.</p>
  </div>
};

Generators.ChaosNexus = {
  id: "ChaosNexus",
  name: "Chaos Nexus",
  description: <div>
    <p>The Chaos Nexus is a device that acts as a central hub for the manipulation of entropy, allowing the user to coordinate multiple entropic effects. This enigmatic contraption is a testament to the boundless ambition of its creators, a device that seeks to harness the very forces of chaos itself.</p>

    <p>At its core, the Chaos Nexus is a complex array of generators and capacitors, each one designed to channel an immense amount of entropic energy into a focused beam. As the device is activated, the air around it crackles with an otherworldly electricity, and the very ground trembles beneath its power.</p>

    <p>When the Chaos Nexus is used, it allows the user to coordinate multiple entropic effects, causing them to work in tandem to create even greater levels of chaos. Buildings collapse in rapid succession, vehicles are torn apart by a series of explosions, and the very fabric of reality seems to unravel as the forces of entropy converge. Yet, despite its power, the Chaos Nexus remains a double-edged sword, a device that promises victory but at a terrible cost.</p>
  </div>
};

Generators.EntropyVortex = {
  id: "EntropyVortex",
  name: "Entropy Vortex",
  description: <div>
    <p>The Entropy Vortex is a machine that creates a localized area of extreme entropy, causing a swirling maelstrom of chaos that consumes everything in its path. This colossal device is a testament to the darkest depths of human ambition, a creation that seeks to unmake the very foundations of existence itself.</p>

    <p>At its heart, the Entropy Vortex is a labyrinth of gears and pistons, each one meticulously crafted to work in perfect harmony. As the machine is activated, it begins to hum with a primal energy, a force that seems to defy all known laws of physics. Slowly, the gears begin to turn, and the air around the Vortex crackles with an otherworldly electricity.</p>

    <p>As the Entropy Vortex reaches its peak output, it creates a localized area of extreme entropy, a swirling maelstrom of chaos that consumes everything in its path. Buildings are torn apart, vehicles are sucked into the vortex, and even the very air itself seems to thicken and choke the life from those who dare to venture too close. In the wake of the Entropy Vortex's power, the world is left in a state of utter devastation, a testament to the folly of those who dared to wield its might.</p>
  </div>
};
*/

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

export function getGeneratorOutput(generator: GeneratorModel): number {
  let amount = generator.output * generator.owned;

  // apply bonuses
  for (const bonus of generator.bonuses) {
    amount *= bonus.multiplier;
  }

  return amount;
}
