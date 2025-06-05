const classChanges = [
  //  Blur photo
  { time: 0, target: "img[src='facephoto.jpg']", add: "blur-in" },
  { time: 21, target: "img[src='facephoto.jpg']", remove: "blur-in" },

  //  jitter effect - Friction is resistance
  { time: 19, target: ".jitter1", add: "active" },
  { time: 21, target: ".jitter1", remove: "active" },

  //  senses
  { time: 31.6, target: ".imgtext", add: "pink" },
  { time: 32.5, target: ".imgtext", remove: "pink" },
  { time: 32.5, target: ".imgtext", add: "aqua" },
  { time: 33.2, target: ".imgtext", remove: "aqua" },
  { time: 33.2, target: ".imgtext", add: "blue" },
  { time: 34, target: ".imgtext", remove: "blue" },
  { time: 34, target: ".imgtext", add: "lime" },
  { time: 34.8, target: ".imgtext", remove: "lime" },
  { time: 34.8, target: ".imgtext", add: "orange" },
  { time: 35.4, target: ".imgtext", remove: "orange" },
  { time: 35.4, target: ".imgtext", add: "purple" },
  { time: 36.5, target: ".imgtext", remove: "purple" },
  { time: 36.5, target: ".imgtext", add: "brown" },
  { time: 37.1, target: ".imgtext", remove: "brown" },
  { time: 37.1, target: ".imgtext", add: "pink" },
  { time: 38, target: ".imgtext", remove: "pink" },
  { time: 38, target: ".imgtext", add: "red" },
  { time: 39, target: ".imgtext", remove: "red" },
  { time: 39, target: ".imgtext", add: "aqua" },
  { time: 39.8, target: ".imgtext", remove: "aqua" },
  { time: 39.8, target: ".imgtext", add: "lime" },
  { time: 40.6, target: ".imgtext", remove: "lime" },
  { time: 40.6, target: ".imgtext", add: "blue" },
  { time: 41.5, target: ".imgtext", remove: "blue" },

  //  the more we move and act
  { time: 45, target: ".highlight11", add: "active" },
  { time: 57, target: ".highlight11", remove: "active" },

  //  friction in this context
  { time: 57, target: ".highlight12", add: "active" },
  { time: 72, target: ".highlight12", remove: "active" },

  // Background color change
  { time: 60.8, target: "body", add: "bg-red" },
  { time: 63, target: "body", remove: "bg-red" },

  // friction is a lively intrinsic experience
  { time: 75, target: ".pink", add: "active" },
  { time: 79, target: ".pink", remove: "active" },

  // first three cards
  { time: 82, target: ".highlight1", add: "active" },
  { time: 100, target: ".highlight1", remove: "active" },
  { time: 101, target: ".highlight2", add: "active" },
  { time: 116, target: ".highlight2", remove: "active" },
  { time: 116.5, target: ".highlight3", add: "active" },
  { time: 126, target: ".highlight3", remove: "active" },

  // Split
  { time: 109, target: ".card:nth-of-type(2)", add: "split-effect" },
  { time: 112, target: ".card:nth-of-type(2)", remove: "split-effect" },

  // first two imgtxt
  { time: 126, target: ".highlight8", add: "active" },
  { time: 147, target: ".highlight8", remove: "active" },
  { time: 148, target: ".highlight9", add: "active" },
  { time: 187, target: ".highlight9", remove: "active" },

  // death by convenience
  { time: 161, target: "body", add: "grayscale" },
  { time: 163, target: "body", remove: "grayscale" },

  // death by convenience
  { time: 161, target: ".highlight-word", add: "glow" },
  { time: 163, target: ".highlight-word", remove: "glow" },

  // predictable futures can be controlled
  { time: 195, target: ".jitter2", add: "active" },
  { time: 197.5, target: ".jitter2", remove: "active" },

  // second set of cards
  { time: 199, target: ".highlight4", add: "active" },
  { time: 220, target: ".highlight4", remove: "active" },
  { time: 220, target: ".highlight5", add: "active" },
  { time: 246, target: ".highlight5", remove: "active" },
  { time: 248, target: ".highlight6", add: "active" },
  { time: 266, target: ".highlight6", remove: "active" },

  // omnipresent popups
  { time: 206, target: ".pop1", add: "active" },
  { time: 209, target: ".pop1", remove: "active" },
  { time: 206, target: ".pop2", add: "active" },
  { time: 209, target: ".pop2", remove: "active" },
  { time: 206, target: ".pop3", add: "active" },
  { time: 209, target: ".pop3", remove: "active" },
  { time: 206, target: ".pop4", add: "active" },
  { time: 209, target: ".pop4", remove: "active" },
  { time: 206, target: ".pop5", add: "active" },
  { time: 209, target: ".pop5", remove: "active" },
  { time: 206, target: ".pop6", add: "active" },
  { time: 209, target: ".pop6", remove: "active" },
  { time: 206, target: ".pop7", add: "active" },
  { time: 209, target: ".pop7", remove: "active" },
  { time: 206, target: ".pop8", add: "active" },
  { time: 209, target: ".pop8", remove: "active" },
  { time: 206, target: ".pop9", add: "active" },
  { time: 209, target: ".pop9", remove: "active" },
  { time: 206, target: ".pop10", add: "active" },
  { time: 209, target: ".pop10", remove: "active" },
  { time: 206, target: ".pop11", add: "active" },
  { time: 209, target: ".pop11", remove: "active" },
  { time: 206, target: ".pop12", add: "active" },
  { time: 209, target: ".pop12", remove: "active" },
  { time: 206, target: ".pop13", add: "active" },
  { time: 209, target: ".pop13", remove: "active" },
  { time: 206, target: ".pop14", add: "active" },
  { time: 209, target: ".pop14", remove: "active" },
  { time: 206, target: ".pop15", add: "active" },
  { time: 209, target: ".pop15", remove: "active" },
  { time: 206, target: ".pop16", add: "active" },
  { time: 209, target: ".pop16", remove: "active" },
  { time: 206, target: ".pop17", add: "active" },
  { time: 209, target: ".pop17", remove: "active" },
  { time: 206, target: ".pop18", add: "active" },
  { time: 209, target: ".pop18", remove: "active" },

  // second set imgtxt
  { time: 267, target: ".highlight10", add: "active" },
  { time: 278, target: ".highlight10", remove: "active" },

  // We like to see designing friction...
  { time: 278, target: ".grow1", add: "active" },
  { time: 278, target: ".highlight13", add: "active" },
  { time: 291, target: ".highlight13", remove: "active" },

  // Embrace friction

  { time: 291, target: ".pink2", add: "active" },
  { time: 293, target: ".pink2", remove: "active" },

  // To facilitate it...
  { time: 293, target: ".highlight14", add: "active" },
  { time: 293, target: ".grow2", add: "active" },
  { time: 317, target: ".highlight14", remove: "active" },

  // It should create situations...
  { time: 317, target: ".grow3", add: "active" },
  { time: 317, target: ".highlight15", add: "active" },
  { time: 328, target: ".highlight15", remove: "active" },

  // Embrace uncomfortable situations...
  { time: 328.8, target: ".changeblue1", add: "active" },
  { time: 329.8, target: ".changeblue1", remove: "active" },
  { time: 329.8, target: ".changeblue2", add: "active" },
  { time: 331.8, target: ".changeblue2", remove: "active" },
  { time: 331.8, target: ".changeblue3", add: "active" },
  { time: 332.6, target: ".changeblue3", remove: "active" },
  { time: 332.6, target: ".changeblue4", add: "active" },
  { time: 333.3, target: ".changeblue4", remove: "active" },
  { time: 333.3, target: ".changeblue5", add: "active" },
  { time: 334, target: ".changeblue5", remove: "active" },
  { time: 334, target: ".changeblue6", add: "active" },
  { time: 335, target: ".changeblue6", remove: "active" },
  { time: 335, target: ".changeblue7", add: "active" },
  { time: 335.4, target: ".changeblue7", remove: "active" },
  { time: 335.4, target: ".changeblue8", add: "active" },
  { time: 335.8, target: ".changeblue8", remove: "active" },
  { time: 335.8, target: ".changeblue9", add: "active" },
  { time: 336.2, target: ".changeblue9", remove: "active" },
  { time: 336.2, target: ".changeblue10", add: "active" },
  { time: 336.7, target: ".changeblue10", remove: "active" },
  { time: 336.7, target: ".changeblue11", add: "active" },
  { time: 337.2, target: ".changeblue11", remove: "active" },
  { time: 337.2, target: ".changeblue12", add: "active" },
  { time: 337.6, target: ".changeblue12", remove: "active" },
  { time: 337.6, target: ".changeblue13", add: "active" },
  { time: 338.1, target: ".changeblue13", remove: "active" },
  { time: 338.8, target: ".changeblue14", add: "active" },
  { time: 339.5, target: ".changeblue14", remove: "active" },

  // Uncomfortable situations help you to feel...
  { time: 340, target: ".highlight6", add: "active" },
  { time: 348, target: ".highlight6", remove: "active" },

  // With friction we get immersed, we get creative...
  { time: 348, target: ".highlight7", add: "active" },
  { time: 363, target: ".highlight7", remove: "active" },

  // Designing friction is exploring boundaries
  { time: 363.8, target: ".pink3", add: "active" },
  { time: 367, target: ".pink3", remove: "active" },

  // Friciton makes thing slower
  { time: 368, target: ".highlight16", add: "active" },
  { time: 380, target: ".highlight16", remove: "active" },

  // This results in the loss of desire...
  { time: 380.7, target: ".pink4", add: "active" },
  { time: 385, target: ".pink4", remove: "active" },

  // Avoidind boredom makes us...
  { time: 385.2, target: ".highlight17", add: "active" },
  { time: 408, target: ".highlight17", remove: "active" },

  // third set of cards
  { time: 409, target: ".highlight18", add: "active" },
  { time: 431, target: ".highlight18", remove: "active" },
  { time: 431, target: ".highlight19", add: "active" },
  { time: 445, target: ".highlight19", remove: "active" },

  // acknowledge the fulfillment...
  { time: 446.8, target: ".pink5", add: "active" },
  { time: 446.8, target: ".grow4", add: "active" },
  { time: 461.5, target: ".pink5", remove: "active" },

  // These mechanisms...
  { time: 462, target: ".pink6", add: "active" },
  { time: 462, target: ".grow5", add: "active" },
  { time: 478, target: ".pink6", remove: "active" },

  // Perform your unpredictable self...
  { time: 479, target: ".highlight20", add: "active" },
  { time: 495, target: ".highlight20", remove: "active" },

  // Background color change
  { time: 496, target: "body", add: "bg-yellow" },
  { time: 502, target: "body", remove: "bg-yellow" },
];
