function MateriaOscura(n) {
  const E = 1;
  const M = 0;
  let Travels = [];
  var missionData = [];
  var count = 0;
  var temp = 0;
  var A = 0;

  if (n <= 100 && n != 0) { //First Conditional
    for (i = 1; i <= n; i++) { //Primer Ciclo
      for (j = 0; j < 1; j++) { //Segundo Ciclo
        m = prompt(`Minutos: T${i}`);
        missionData.push(m);
        e = prompt(`Esferas: T${i}`);
        missionData.push(e);
        Travels.push(missionData);
        missionData = [];
      }
    } if (n < 100) { //Second Conditional

      for (i = 0; i < n; i++) { //Verify e
        if (Travels[i][E] != 0) {
          count++;
        } else if (Travels[i][E] == 0) {
        } else {
        }
      }

      A = Travels[0][0];
      A = parseInt(A);
      var b = 0;
      var sum = 0;
      //Third conditional
      switch (count) {//Cases of 0 or 1 e.
        case 0:
          count == 0;
          for (i = 1; i < n; i++) {
            temp = Travels[i][M];
            temp = parseInt(temp);
            b = b + temp;
          }
          sum = A + b;
          break;
        case 1:
          count == 1;
          for (i = 1; i < n; i++) {
            temp = Travels[i][M];
            temp = parseInt(temp);
            b = b + (temp / 2);
          }
          sum = A + b;
          break;
      } if (count > 2 || count <= 10) { //Case of more e than 2
        for (i = 1; i < n; i++) {
          temp = Travels[i][M];
          temp = parseInt(temp);
          b = b + (temp / 2);
        }
        sum = A + b;
      } else {
        console.log('Missing cases')
      }
    }
    console.log(`El tiempo minimo requerido para los trayectos es: ${sum}`)
  } else {
    console.log('Limite de trayectos excedido!')
  }
  Travels = [];
};

const n = 3;
MateriaOscura(n);