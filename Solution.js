function MateriaOscura(n) {
  let Travels = [];
  var missionData = [];
  var a = 0;
  var b = 0;
  var c = 0;
  if (n <= 100) { //Primer Condicional
    for (i = 1; i <= n; i++) { //Primer Ciclo
      for (j = 0; j < 1; j++) { //Segundo Ciclo
        m = prompt(`Minutos: T${i}`);
        missionData.push(m);
        e = prompt(`Esferas: T${i}`);
        missionData.push(e);
        Travels.push(missionData);
        missionData = [];
      }
    } if (n < 100) { //Segundo Condicional
      debugger
      for (i = 0; i < 1; i++) { //Get a
        a = Travels[i][0];
        a = parseInt(a)
      }
      for (i = 1; i < n; i++) { // Get b
        b = Travels[i][0];
        b = parseInt(b)
      }
      for (i = 0; i < n; i++) {
        e = Travels[i][1];
        if (e != 0) {
          b = b / 2;
        } else {
        }
      }
      c = a + b;
    }
    console.log(`El tiempo minimo requerido para los trayectos es: ${c}`)
  } else {
    console.log('Limite de trayectos excedido!')
  }
  Travels = [];
};

const n = 2;
MateriaOscura(n);


const Trayectos = [
  [24, 1],
  [10, 0]
];