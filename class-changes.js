const classChanges = [
  //  As designers, entrepreneurs...
  { time: 0, target: "img[src='facephoto.jpg']", add: "blur-in" },
  { time: 21, target: "img[src='facephoto.jpg']", remove: "blur-in" },
  { time: 0, target: ".grow1", add: "active" },
  { time: 44, target: ".grow1", remove: "active" },
  { time: 0, target: ".highlight23", add: "active" },
  { time: 44, target: ".highlight23", remove: "active" },

  //  jitter effect - Friction is resistance
  { time: 19, target: ".jitter1", add: "active" },
  { time: 21, target: ".jitter1", remove: "active" },

  //  senses
  { time: 31.6, target: ".sense1", add: "active" },
  { time: 31.6, target: ".sense1", add: "active" },
  { time: 32.5, target: ".sense1", remove: "active" },
  { time: 32.5, target: ".sense2", add: "active" },
  { time: 33.2, target: ".sense2", remove: "active" },
  { time: 33.2, target: ".sense3", add: "active" },
  { time: 34, target: ".sense3", remove: "active" },
  { time: 34, target: ".sense4", add: "active" },
  { time: 34.8, target: ".sense4", remove: "active" },
  { time: 34.8, target: ".sense5", add: "active" },
  { time: 35.4, target: ".sense5", remove: "active" },
  { time: 35.4, target: ".sense6", add: "active" },
  { time: 36.5, target: ".sense6", remove: "active" },
  { time: 36.5, target: ".sense7", add: "active" },
  { time: 37.1, target: ".sense7", remove: "active" },
  { time: 37.1, target: ".sense8", add: "active" },
  { time: 38, target: ".sense8", remove: "active" },
  { time: 38, target: ".sense9", add: "active" },
  { time: 39, target: ".sense9", remove: "active" },
  { time: 39, target: ".sense10", add: "active" },
  { time: 39.8, target: ".sense10", remove: "active" },
  { time: 39.8, target: ".sense11", add: "active" },
  { time: 40.6, target: ".sense11", remove: "active" },
  { time: 40.6, target: ".sense12", add: "active" },
  { time: 41.5, target: ".sense12", remove: "active" },

  //  the more we move and act
  { time: 45, target: ".highlight11", add: "active" },
  { time: 45, target: ".grow2", add: "active" },
  { time: 57, target: ".highlight11", remove: "active" },

  //  friction in this context
  { time: 57, target: ".highlight12", add: "active" },
  { time: 57, target: ".grow3", add: "active" },
  { time: 72, target: ".highlight12", remove: "active" },

  // Background color change
  { time: 60.8, target: "body", add: "bg-red" },
  { time: 63, target: "body", remove: "bg-red" },

  // friction is a lively intrinsic experience
  { time: 75, target: ".pink", add: "active" },
  { time: 75, target: ".jitter3", add: "active" },
  { time: 79, target: ".pink", remove: "active" },

  { time: 75, target: ".sense26", add: "active" },
  { time: 75.2, target: ".sense27", add: "active" },
  { time: 75.7, target: ".sense28", add: "active" },
  { time: 75.8, target: ".sense29", add: "active" },
  { time: 76.8, target: ".sense30", add: "active" },
  { time: 77.7, target: ".sense31", add: "active" },
  { time: 79, target: ".sense26", remove: "active" },
  { time: 79, target: ".sense27", remove: "active" },
  { time: 79, target: ".sense28", remove: "active" },
  { time: 79, target: ".sense29", remove: "active" },
  { time: 79, target: ".sense30", remove: "active" },
  { time: 79, target: ".sense31", remove: "active" },

  // first three cards
  { time: 82, target: ".highlight1", add: "active" },
  { time: 82, target: ".grow4", add: "active" },
  { time: 100, target: ".highlight1", remove: "active" },

  { time: 101, target: ".highlight2", add: "active" },
  { time: 101, target: ".grow5", add: "active" },
  { time: 116, target: ".highlight2", remove: "active" },

  { time: 116.5, target: ".highlight3", add: "active" },
  { time: 116.5, target: ".grow6", add: "active" },
  { time: 126, target: ".highlight3", remove: "active" },

  // // Split
  // { time: 109, target: ".card:nth-of-type(2)", add: "split-effect" },
  // { time: 112, target: ".card:nth-of-type(2)", remove: "split-effect" },

  // first two imgtxt
  { time: 126, target: ".highlight8", add: "active" },
  { time: 126, target: ".grow7", add: "active" },
  { time: 147, target: ".highlight8", remove: "active" },

  { time: 148, target: ".highlight9", add: "active" },
  { time: 148, target: ".grow8", add: "active" },
  { time: 187, target: ".highlight9", remove: "active" },

  // predictable futures can be controlled
  { time: 187, target: ".page", add: "grayscale" },
  { time: 197.5, target: ".page", remove: "grayscale" },
  { time: 195, target: ".jitter2", add: "active" },
  { time: 197.5, target: ".jitter2", remove: "active" },
  { time: 187, target: ".highlight-word", add: "glow" },
  { time: 197.5, target: ".highlight-word", remove: "glow" },

  // second set of cards
  { time: 199, target: ".highlight4", add: "active" },
  { time: 199, target: ".grow9", add: "active" },
  { time: 220, target: ".highlight4", remove: "active" },

  { time: 220, target: ".highlight5", add: "active" },
  { time: 220, target: ".grow10", add: "active" },
  { time: 246, target: ".highlight5", remove: "active" },

  { time: 248, target: ".highlight6", add: "active" },
  { time: 248, target: ".grow11", add: "active" },
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
  { time: 267, target: ".grow12", add: "active" },
  { time: 278, target: ".highlight10", remove: "active" },

  // We like to see designing friction...
  { time: 278, target: ".grow13", add: "active" },
  { time: 278, target: ".highlight13", add: "active" },
  { time: 291, target: ".highlight13", remove: "active" },

  // Embrace friction

  { time: 291, target: ".pink2", add: "active" },
  { time: 291, target: ".jitter4", add: "active" },
  { time: 293, target: ".pink2", remove: "active" },
  { time: 293, target: ".jitter4", remove: "active" },

  { time: 291, target: ".sense32", add: "active" },
  { time: 291.6, target: ".sense33", add: "active" },

  { time: 291, target: ".pink2", add: "active" },
  { time: 291, target: ".jitter4", add: "active" },
  { time: 293, target: ".pink2", remove: "active" },
  { time: 293, target: ".jitter4", remove: "active" },

  { time: 291, target: ".sense32", add: "active" },
  { time: 291.6, target: ".sense33", add: "active" },
  { time: 293, target: ".sense32", remove: "active" },
  { time: 293, target: ".sense33", remove: "active" },

  // To facilitate it...
  { time: 293, target: ".highlight14", add: "active" },
  { time: 293, target: ".grow14", add: "active" },
  { time: 317, target: ".highlight14", remove: "active" },

  // It should create situations...
  { time: 317, target: ".grow15", add: "active" },
  { time: 317, target: ".highlight15", add: "active" },
  { time: 328, target: ".highlight15", remove: "active" },

  // Embrace uncomfortable situations
  { time: 328.8, target: ".changeblue1", add: "active" },
  { time: 328.8, target: ".jitter7", add: "active" },
  { time: 329.8, target: ".changeblue1", remove: "active" },
  { time: 329.8, target: ".jitter7", remove: "active" },

  { time: 329.8, target: ".changeblue2", add: "active" },
  { time: 329.8, target: ".jitter8", add: "active" },
  { time: 331.8, target: ".changeblue2", remove: "active" },
  { time: 331.8, target: ".jitter8", remove: "active" },

  { time: 331.8, target: ".changeblue3", add: "active" },
  { time: 331.8, target: ".jitter9", add: "active" },
  { time: 332.6, target: ".changeblue3", remove: "active" },
  { time: 332.6, target: ".jitter9", remove: "active" },

  { time: 332.6, target: ".changeblue4", add: "active" },
  { time: 332.6, target: ".jitter10", add: "active" },
  { time: 333.3, target: ".changeblue4", remove: "active" },
  { time: 333.3, target: ".jitter10", remove: "active" },

  { time: 333.3, target: ".changeblue5", add: "active" },
  { time: 333.3, target: ".jitter11", add: "active" },
  { time: 334, target: ".changeblue5", remove: "active" },
  { time: 334, target: ".jitter11", remove: "active" },

  { time: 334, target: ".changeblue6", add: "active" },
  { time: 334, target: ".jitter12", add: "active" },
  { time: 335, target: ".changeblue6", remove: "active" },
  { time: 335, target: ".jitter12", remove: "active" },

  { time: 335, target: ".changeblue7", add: "active" },
  { time: 335, target: ".jitter13", add: "active" },
  { time: 335.4, target: ".changeblue7", remove: "active" },
  { time: 335.4, target: ".jitter13", remove: "active" },

  { time: 335.4, target: ".changeblue8", add: "active" },
  { time: 335.4, target: ".jitter14", add: "active" },
  { time: 335.8, target: ".changeblue8", remove: "active" },
  { time: 335.8, target: ".jitter14", remove: "active" },

  { time: 335.8, target: ".changeblue9", add: "active" },
  { time: 335.8, target: ".jitter15", add: "active" },
  { time: 336.2, target: ".changeblue9", remove: "active" },
  { time: 336.2, target: ".jitter15", remove: "active" },

  { time: 336.2, target: ".changeblue10", add: "active" },
  { time: 336.2, target: ".jitter16", add: "active" },
  { time: 336.7, target: ".changeblue10", remove: "active" },
  { time: 336.7, target: ".jitter16", remove: "active" },

  { time: 336.7, target: ".changeblue11", add: "active" },
  { time: 336.7, target: ".jitter17", add: "active" },
  { time: 337.2, target: ".changeblue11", remove: "active" },
  { time: 337.2, target: ".jitter17", remove: "active" },

  { time: 337.2, target: ".changeblue12", add: "active" },
  { time: 337.2, target: ".jitter18", add: "active" },
  { time: 337.6, target: ".changeblue12", remove: "active" },
  { time: 337.6, target: ".jitter18", remove: "active" },

  { time: 337.6, target: ".changeblue13", add: "active" },
  { time: 337.6, target: ".jitter19", add: "active" },
  { time: 338.1, target: ".changeblue13", remove: "active" },
  { time: 338.1, target: ".jitter19", remove: "active" },

  { time: 338.8, target: ".changeblue14", add: "active" },
  { time: 338.8, target: ".jitter20", add: "active" },
  { time: 339.5, target: ".changeblue14", remove: "active" },
  { time: 339.5, target: ".jitter20", remove: "active" },

  // Uncomfortable situations help you to feel...
  { time: 340, target: ".highlight6", add: "active" },
  { time: 340, target: ".grow16", add: "active" },
  { time: 348, target: ".highlight6", remove: "active" },

  // With friction we get immersed, we get creative...
  { time: 348, target: ".highlight7", add: "active" },
  { time: 348, target: ".grow17", add: "active" },
  { time: 363, target: ".highlight7", remove: "active" },

  // Designing friction is exploring boundaries
  { time: 363.8, target: ".pink3", add: "active" },
  { time: 363.8, target: ".jitter21", add: "active" },
  { time: 367, target: ".pink3", remove: "active" },
  { time: 367, target: ".jitter21", remove: "active" },

  // Friciton makes thing slower
  { time: 368, target: ".highlight16", add: "active" },
  { time: 368, target: ".grow18", add: "active" },
  { time: 380, target: ".highlight16", remove: "active" },

  // This results in the loss of desire...
  { time: 380.7, target: ".pink4", add: "active" },
  { time: 380.7, target: ".jitter22", add: "active" },
  { time: 385, target: ".pink4", remove: "active" },
  { time: 385, target: ".jitter22", remove: "active" },

  // Avoidind boredom makes us...
  { time: 385.2, target: ".highlight17", add: "active" },
  { time: 385.2, target: ".grow19", add: "active" },
  { time: 408, target: ".highlight17", remove: "active" },

  // third set of cards
  { time: 409, target: ".highlight18", add: "active" },
  { time: 409, target: ".grow20", add: "active" },
  { time: 431, target: ".highlight18", remove: "active" },

  { time: 431, target: ".highlight19", add: "active" },
  { time: 431, target: ".grow21", add: "active" },
  { time: 445, target: ".highlight19", remove: "active" },

  // acknowledge the fulfillment...
  { time: 446.8, target: ".highlight21", add: "active" },
  { time: 462, target: ".highlight21", remove: "active" },
  { time: 446.8, target: ".grow22", add: "active" },

  // These mechanisms...
  { time: 462, target: ".highlight22", add: "active" },
  { time: 479, target: ".highlight22", remove: "active" },
  { time: 462, target: ".grow23", add: "active" },

  // Perform your unpredictable self...
  { time: 479, target: ".pink5", add: "active" },
  { time: 479, target: ".jitter23", add: "active" },
  { time: 495, target: ".pink5", remove: "active" },
  { time: 495, target: ".jitter23", remove: "active" },

  // Friction percieved as an obstacle...
  { time: 496, target: ".grow24", add: "active" },
  { time: 502, target: ".grow24", remove: "active" },

  { time: 496, target: ".sense13", add: "active" },
  { time: 496.8, target: ".sense14", add: "active" },
  { time: 497.2, target: ".sense15", add: "active" },
  { time: 497.4, target: ".sense16", add: "active" },
  { time: 497.7, target: ".sense17", add: "active" },
  { time: 498.5, target: ".sense18", add: "active" },
  { time: 499, target: ".sense19", add: "active" },
  { time: 499.3, target: ".sense20", add: "active" },
  { time: 499.7, target: ".sense21", add: "active" },
  { time: 500, target: ".sense22", add: "active" },
  { time: 500.4, target: ".sense23", add: "active" },
  { time: 500.8, target: ".sense24", add: "active" },
  { time: 501, target: ".sense25", add: "active" },

  { time: 502, target: ".sense13", remove: "active" },
  { time: 502, target: ".sense14", remove: "active" },
  { time: 502, target: ".sense15", remove: "active" },
  { time: 502, target: ".sense16", remove: "active" },
  { time: 502, target: ".sense17", remove: "active" },
  { time: 502, target: ".sense18", remove: "active" },
  { time: 502, target: ".sense19", remove: "active" },
  { time: 502, target: ".sense20", remove: "active" },
  { time: 502, target: ".sense21", remove: "active" },
  { time: 502, target: ".sense22", remove: "active" },
  { time: 502, target: ".sense23", remove: "active" },
  { time: 502, target: ".sense24", remove: "active" },
  { time: 502, target: ".sense25", remove: "active" },
];
