class Cuestion {

  constructor(pregunta, opciones, respuestaDelUsuario) {
    this.pregunta = pregunta;
    this.opciones = opciones;
    this.respuestaDelUsuario = respuestaDelUsuario;
    this.resultadosPositivos = ["excelente", "buena", "regular"];
  }
  siLaRespuestaEsLaEsperada() {
    // return true si la respuesta del usuario es excelente, buena o regular. De otra forma returns false.
    return this.resultadosPositivos.includes(this.respuestaDelUsuario)
  }
}



class Quiz {
  constructor(preguntas) {
    this.preguntas = preguntas;
  }

  askQuestions() {
    this.preguntas.forEach((pregunta) => {
      console.log(pregunta.pregunta);
      const respuestaDelUsuario = pregunta.respuestaDelUsuario;
      if (pregunta.siLaRespuestaEsLaEsperada()) {
        console.log(`El usuario respondio con resultado positivo! (${respuestaDelUsuario})`);

      } else {
        console.log(`¡El usuario tiene respuesta negativa! (${respuestaDelUsuario})`);
      }
    })
  }
}

//tercera parte
const questions = [
  new Cuestion("¿que le ha parecido entre la calidad del servicio y el precio?", ["excelente", "buena", "regular", "mala", "pesima"], "buena"),
  new Cuestion("¿que opinas de la informacion de acceso proporcionada en nuestro sitio wep?", ["muy", "claro", "claro", "confuso"], "buena"),
  new Cuestion("¿como juzgas el tiempo de espera en la recepcion?", ["excelente", "buena", "regular", "mala", "pesima"], "buena"),
  new Cuestion("¿que opinas de la amabilidad del personal de recepcion?", ["excelente", "buena", "regular", "mala", "pesima"], "buena"),
  new Cuestion("¿como valoras la bienbenida que recibiste cuando llegaste?", ["exelente", "buena", "regular", "mala", "pesima"], "buena"),
  new Cuestion("¿como valoras nuestra forma de pago?", ["excelente", "buena", "regular", "mala", "pesima"], "buena"),
  new Cuestion("¿has econtrado facilmente la direccion del hotel?", ["facil", "dificl", "regular"], "buena"),
  new Cuestion("¿como se juzga el acceso a wifi?", ["excelente", "buena", "regular", "mala", "pesiam"], "buena"),
  new Cuestion("¿que opinas de la calidad precio de nuestro establecimeinto?", ["excelente", "buena", "regular", "mala", "pesima"], "buena"),
  new Cuestion("cual es su evaluacion general de nuestro establecimiento?", ["excelente", "buena", "regular", "mala", "pesima"], "pesima")
]

const quiz = new Quiz(questions);
quiz.askQuestions();



//-------------------- PROGRAMACION FUNCIONAL --------------- 

const arregloDePreguntas = [
  {
    question: "¿que le ha parecido entre la calidad del servicio y el precio?",
    options: ["excelente,buena,regular,mala,pesima"],
    userAnswer: "buena",
  },

  {
    question: "¿que opinas de la informacion de acceso proporcionada en nuestro sitio wep?",
    options: ["muy claro,claro,confuso, muy confuso"],
    userAnswer: "buena",
  },

  {
    question: "¿como juzgas el tiempo de espera en la recepcion?",
    options: ["muy claro,claro,confuso, muy confuso"],
    userAnswer: "buena",
  },

  {
    question: "¿que opinas de la amabilidad del personal de recepcion?",
    options: ["excelente,buena,regular,mala,pesima"],
    userAnswer: "buena",
  },

  {
    question: "¿como valoras la bienbenida que recibiste cuando llegaste?",
    options: ["exelente,buena,regular,mala,pesima"],
    userAnswer: "buena",
  },

  {
    question: "¿como valoras nuestra forma de pago?",
    options: ["excelente,buena,regular,mala,pesima"],
    userAnswer: "buena",
  },

  {
    question: "¿has econtrado facilmente la direccion del hotel?",
    options: ["facil,dificl,regular"],
    userAnswer: "buena",
  },

  {
    question: "¿como se juzga el acceso a wifi?",
    options: ["excelente,buena,regular,mala,pesiam"],
    userAnswer: "buena",
  },

  {
    question: "¿que opinas de la calidad precio de nuestro establecimeinto?",
    options: ["excelente,buena,regular,mala, pesima"],
    userAnswer: "buena",
  },

  {
    question: "cual es su evaluacion general de nuestro establecimiento?",
    options: ["excelente,buena,regular,mala,pesima,"],
    userAnswer: "pesima",
  },
]


function resPuestaPositivaONegativa(respuesta) {
  const resultadosPositivos = ["excelente", "buena", "regular"];
  return resultadosPositivos.includes(respuesta)
}

function getUserAnswer(objectoPregunta) {
  // Esta función devuelve la respuesta proporcionada por el usuario

  return objectoPregunta.userAnswer;
}


// Paso 4: Crear la función askQuestion
function askQuestion(question) {
  console.log(question.question);
  const userAnswer = getUserAnswer(question);
  if (resPuestaPositivaONegativa(userAnswer)) {
    console.log(`El usuario respondio con resultado positivo! (${userAnswer})`)
  } else {
    console.log(`¡El usuario tiene respuesta negativa! (${userAnswer})`);
  }
}

// Paso 5: Utilizar la función askQuestion para cada pregunta
arregloDePreguntas.forEach((question) => {
  askQuestion(question);
});

let comentario = prompt("¿Tienes algun comentario o sugerencia?");

console.log("comentario de usuario:", comentario)
if(comentario) {
  alert("¡gracias por tu comentario!")
}