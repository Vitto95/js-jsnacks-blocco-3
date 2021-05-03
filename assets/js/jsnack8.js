$(document).ready(function () {
  let cars = [
    {
      marca: "Mercedes",
      modello: "GLS",
      alimentazione: "diesel",
    },
    {
      marca: "BMW",
      modello: "Z3",
      alimentazione: "benzina",
    },
    {
      marca: "auto3",
      modello: "modello3",
      alimentazione: "metano",
    },
    {
      marca: "auto4",
      modello: "modello4",
      alimentazione: "elettrico",
    },
    {
      marca: "auto5",
      modello: "modello5",
      alimentazione: "gpl",
    },
    {
      marca: "auto6",
      modello: "modello6",
      alimentazione: "diesel",
    },
    {
      marca: "auto7",
      modello: "modello7",
      alimentazione: "elettrico",
    },
    {
      marca: "auto8",
      modello: "modello8",
      alimentazione: "gpl",
    },
    {
      marca: "auto9",
      modello: "modello9",
      alimentazione: "benzina",
    },
    {
      marca: "auto10",
      modello: "modello10",
      alimentazione: "diesel",
    },
  ];

  console.log(cars);

  //FILTER
  const benzCars = cars.filter((car) => car.alimentazione === "benzina");
  console.log("Auto a benzina: ", benzCars);
  const dieselCars = cars.filter((car) => car.alimentazione === "diesel");
  console.log("Auto a diesel: ", dieselCars);
  /* const electricCars = cars.filter((car) => car.alimentazione !== "elettrico");
console.log("Auto elettriche: ", electricCars);
const gplCars = cars.filter((car) => car.alimentazione === "gpl");
console.log("Auto a gpl: ", gplCars); */
  const otherCars = cars.filter(
    (car) => car.alimentazione !== "diesel" && car.alimentazione !== "benzina"
  );
  console.log("Auto con altro tipo di alimentazione", otherCars);

  //OUTPUT in HTML
  benzCars.forEach((car) => {
    printOutput("#benz-cars", car);
  });
});

function printOutput(target, output) {
  let hmtl = `<li> + ${output} + </li>`;
  $(target).append("html");
}
