// Inside your app
import Handsfree from 'handsfree'

//--------------- ESTO ES LA CREACION DEL OBJETO QUE DETECTARA 
const handsfree = new Handsfree({
    hands: {
      enabled: true,
      // The maximum number of hands to detect [0 - 4]
      maxNumHands: 2,
  
      // Minimum confidence [0 - 1] for a hand to be considered detected
      minDetectionConfidence: 0.5,
  
      // Minimum confidence [0 - 1] for the landmark tracker to be considered detected
      // Higher values are more robust at the expense of higher latency
      minTrackingConfidence: 0.5
    }
  })
  

// ----------- IDENTIFICAR QUE MANO ES (IZQUIERDA O DERECHA)
// handIndex [0 - 3] An array of landmark points for each detected hands
handsfree.data.hands.multiHandedness[handIndex] == {
    // "Right" or "Left"
    label,
    // The probability that it is "Right" or "Left"
    score
  }
  
  // hand 0
  handsfree.data.hands.multiHandedness[0].label
  handsfree.data.hands.multiHandedness[0].score


// ---------- Arrays de landkmarks (puntos rojos de la mano)

  // handIndex [0 - 3] An array of landmark points for each detected hands
handsfree.data.hands.landmarks

// Left hand, person #1
handsfree.data.hands.landmarks[0]
// Right hand, person #1
handsfree.data.hands.landmarks[1]

// ------------ ACESSO A LOS VALORES (x,y):
handsfree.data.hands.landmarks[0][12].x



// -------- VISIBILIDAD DE UNA MANO
// Left hand, person #1
handsfree.data.hands.landmarksVisible[0]


//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
// El codigo de arriba es documentacion interesante
// El codgio de abajo es el que se usara en el poryecto
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
const handsfree = new Handsfree({
    hands: {
      enabled: true,
      // The maximum number of hands to detect [0 - 4]
      maxNumHands: 2,
  
      // Minimum confidence [0 - 1] for a hand to be considered detected
      minDetectionConfidence: 0.5,
  
      // Minimum confidence [0 - 1] for the landmark tracker to be considered detected
      // Higher values are more robust at the expense of higher latency
      minTrackingConfidence: 0.5
    }
  })

handsfree.start()



// TIP --> Parte más elevada del dedo
THUMBS_TIP = 4
INDEX_TIP = 8
MIDDLE_TIP = 12
RINGE_TIP = 16
PINKY_TIP = 20

// MCP --> Nudillo del dedo (parte mas baja)
THUMBS_MCP = 1
INDEX_MCP = 5
MIDDLE_MCP = 9
RINGE_MCP = 13
PINKY_MCP = 17

WRIST_POSITION = 0


// El paramtro *landmarks* representa los landmarks de la mano: indexIsCurled(handsfree.data.hands.landmarks[1])
function thumbIsCurled(landmarks) {
    return landmarks[THUMBS_TIP].y < landmarks[INDEX_MCP].y; 
}

function indexIsCurled(landmarks) {
    return landmarks[INDEX_TIP].y < landmarks[INDEX_MCP].y;
}

function middleIsCurled(landmarks) {
    return landmarks[MIDDLE_TIP].y < landmarks[MIDDLE_MCP].y;
}

function ringeIsCurled(landmarks) {
    return landmarks[RINGE_TIP].y < landmarks[RINGE_MCP].y;
}

function pinkyIsCurled(landmarks) {
    return landmarks[PINKY_TIP].y < landmarks[PINKY_MCP].y;
}

function getPosition(landmarks) {
    return landmarks[WRIST_POSITION];
}

// USAGE
var isCurled = pinkyIsCurled(handsfree.data.hands.landmarks[0]);
var position = getPosition(handsfree.data.hands.landmarks[1])
var pos_x = position.x; // position.y;



/* IDEA:
En el cliente se iniciara el handsfree y se entrara en un bucle donde se ira comprobando que dedos estan extendidos,
el estado de los dedos (5 variables booleanas) se traducira en la manos 3D. Si un dedo esta extendido, este tambien lo estara
en el 3D. (aqui habria que ver como indicarlo al render del three.js ))

Dado que es online, no sera necesario realizar ninguna mecanica de paso de dedos. Se encarga el propio jugador

punto 0 posicion
*/


// Codigo para evitar que pete el programa si una mano no es visible o detectada
if (data.hands) { // Solo entra si existen las manos
    // Una mano
    if(handsfree.data.hands.landmarksVisible[0]) {
        // Solo entra si la mano es visible y por lo tanto existen los landmarks
    }


    // La otra mano
    if(handsfree.data.hands.landmarksVisible[1]) {
        // Solo entra si la mano es visible y por lo tanto existen los landmarks
    }
}



// Quiza usar Listeners o Plugins si lo anterior no funciona