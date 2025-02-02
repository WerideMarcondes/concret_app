// iniciar mascara dos campos
$(document).ready(function () {
  $("#width").mask("0000000", { reverse: true });
  $("#height").mask("0000000", { reverse: true });
  $("#length").mask("0000000", { reverse: true });
  $("#percentage").mask("000", { reverse: true });
  $("#run").mask("0000000", { reverse: true });
  $("#rise").mask("0000000", { reverse: true });
  $("#length").mask("0000000", { reverse: true });
  $("#plataform").mask("0000000", { reverse: true });
  $("#stepsNumber").mask("0000000", { reverse: true });
  $("#widthsteps").mask("0000000", { reverse: true });
   Swal.fire({
    title: "Select the type of work and the unit of measurement, and the corresponding values!",
    text: "",
    icon: "success"
  });
  totalArea();
  
});

// apagar campo resultado
window.onload = function reset() {
  const length = document.getElementById("length");
  length.addEventListener("input", function () {
    document.getElementById("final").value = innerHTML = "";
  });

  const height = document.getElementById("height");
  height.addEventListener("input", function () {
    document.getElementById("final").value = innerHTML = "";
  });

  const width = document.getElementById("width");
  width.addEventListener("input", function () {
    document.getElementById("final").value = innerHTML = "";
  });

  const Totalarea = document.getElementById("totalarea");
  Totalarea.addEventListener("input", function () {
    document.getElementById("final").value = innerHTML = "";
  });
};

function ereserCamps() {
  var totalarea = (document.getElementById("totalarea").value = "");
  var Width = (document.getElementById("width").value = "");
  var Height = (document.getElementById("height").value = "");
  var Length = (document.getElementById("length").value = "");
  var diametercamp = (document.getElementById("diametercamp").value = "");
  var run = (document.getElementById("run").value = "");
  var rise = (document.getElementById("rise").value = "");
  var stepsNumber = (document.getElementById("stepsNumber").value = "");
  var plataform = (document.getElementById("plataform").value = "");
  var widthsteps = (document.getElementById("widthsteps").value = "");
  var Porcentagem = document.getElementById("percentage").value=""
  var Totalarea = document.querySelectorAll(".option").value === "inch";
  document.getElementById("final").value = innerHTML = "";
  
}

//select kind job cilindro
function Steps() {
  // Swal.fire({
  //   title: "Select the measurement unit, the number of steps and the dimensions!",
  //   text: "",
  //   icon: "success"
  // });
  ereserCamps();
  var Totalarea = document.querySelectorAll(".totalArea");
  var retangulocamp = document.querySelectorAll(".retangulocamp");
  var diametercamp = document.querySelectorAll(".diametercamp");
  var height = document.querySelectorAll(".height");
  var steps = document.querySelectorAll(".steps");

  for (var i = 0; i < Totalarea.length; i++) {
    Totalarea[i].hidden = true;
  }
  for (var j = 0; j < retangulocamp.length; j++) {
    retangulocamp[j].hidden = true;
  }
  for (var l = 0; l < diametercamp.length; l++) {
    diametercamp[l].hidden = true;
  }
  for (var m = 0; m < steps.length; m++) {
    steps[m].hidden = false;
  }
  for (var n = 0; n < height.length; n++) {
    height[n].hidden = true;
  }
}
//select kind job area total
function totalArea() {
  // Swal.fire({
  //   title: "Select the measurement unit, height and area in square meters!",
  //   text: "",
  //   icon: "success"
  // });
  ereserCamps();
  var Totalarea = document.querySelectorAll(".totalArea");
  var retangulocamp = document.querySelectorAll(".retangulocamp");
  var diametercamp = document.querySelectorAll(".diametercamp");
  var height = document.querySelectorAll(".height");
  var steps = document.querySelectorAll(".steps");
  for (var i = 0; i < retangulocamp.length; i++) {
    retangulocamp[i].hidden = true;
  }
  for (var j = 0; j < Totalarea.length; j++) {
    Totalarea[j].hidden = false;
  }
  for (var l = 0; l < diametercamp.length; l++) {
    diametercamp[l].hidden = true;
    diametercamp.value = innerHTML = "teste";
  }
  for (var m = 0; m < steps.length; m++) {
    steps[m].hidden = true;
  }
  for (var n = 0; n < height.length; n++) {
    height[n].hidden = false;
  }
}
//select kind job retangulo
function Rectangle() {
  // Swal.fire({
  //   title: "Select the measurement unit, the number of areas and the size of the dimensions!",
  //   text: "",
  //   icon: "success"
  // });
  ereserCamps();
  var Totalarea = document.querySelectorAll(".totalArea");
  var retangulocamp = document.querySelectorAll(".retangulocamp");
  var diametercamp = document.querySelectorAll(".diametercamp");
  var height = document.querySelectorAll(".height");
  var steps = document.querySelectorAll(".steps");

  for (var i = 0; i < Totalarea.length; i++) {
    Totalarea[i].hidden = true;
  }
  for (var j = 0; j < retangulocamp.length; j++) {
    retangulocamp[j].hidden = false;
  }
  for (var l = 0; l < diametercamp.length; l++) {
    diametercamp[l].hidden = true;
  }
  for (var m = 0; m < steps.length; m++) {
    steps[m].hidden = true;
  }
  for (var n = 0; n < height.length; n++) {
    height[n].hidden = false;
  }
}
//select kind job cilindro
function Cylinder() {
  // Swal.fire({
  //   title: "Select the measurement unit, quantity, diameter and height!",
  //   text: "",
  //   icon: "success"
  // });
  ereserCamps();
  var Totalarea = document.querySelectorAll(".totalArea");
  var retangulocamp = document.querySelectorAll(".retangulocamp");
  var diametercamp = document.querySelectorAll(".diametercamp");
  var height = document.querySelectorAll(".height");
  var steps = document.querySelectorAll(".steps");
  for (var i = 0; i < Totalarea.length; i++) {
    Totalarea[i].hidden = true;
  }
  for (var j = 0; j < retangulocamp.length; j++) {
    retangulocamp[j].hidden = true;
  }
  for (var l = 0; l < diametercamp.length; l++) {
    diametercamp[l].hidden = false;
  }
  for (var m = 0; m < steps.length; m++) {
    steps[m].hidden = true;
  }
  for (var n = 0; n < height.length; n++) {
    height[n].hidden = false;
  }
}

// converter unidades medidas WIDTH
function convert_Width() {
  var Width = document.getElementById("width").value;
  var INCH = document.getElementById("widthcampo");
  var CM = document.getElementById("widthcampo");
  var FEET = document.getElementById("widthcampo");
  var MT = document.getElementById("widthcampo");
  var YD = document.getElementById("widthcampo");

  const inc = INCH.value === "inch";
  const cm = CM.value === "cent";
  const Feet = FEET.value === "feet";
  const mt = MT.value === "metro";
  const yd = YD.value === "jarda";

  var centimetros_Inc = 2.54;
  var inch = centimetros_Inc;
  var feet = inch * 12;
  var yards = feet * 3
  var centimetros_Metros = 1;
  var metros = centimetros_Metros * 100;

  if (cm) {
    return (Width = centimetros_Metros * Width);
  } else if (Feet) {
    return (Width = feet * Width);
  } else if (inc) {
    return (Width = inch * Width);
  } else if (mt) {
    return (Width = metros * Width);
  }else if (yd) {
    return (Width = yards * Width);
  }
}

// converter unidades medidas HEIGHT
function convert_Height() {
  var Height = document.getElementById("height").value;

  var INCH = document.getElementById("heightcampo");
  var CM = document.getElementById("heightcampo");
  var FEET = document.getElementById("heightcampo");
  var MT = document.getElementById("heightcampo");
  var YD = document.getElementById("heightcampo");

  const inc = INCH.value === "inch";
  const cm = CM.value === "cent";
  const Feet = FEET.value === "feet";
  const mt = MT.value === "metro";
  const yd = YD.value === "jarda";

  var centimetros_Inc = 2.54;
  var inch = centimetros_Inc;
  var feet = inch * 12;
  var yards = feet * 3
  var centimetros_Metros = 1;
  var metros = centimetros_Metros * 100;

  if (cm) {
    return (Height = centimetros_Metros * Height);
  } else if (Feet) {
    return (Height = feet * Height);
  } else if (inc) {
    return (Height = inch * Height);
  } else if (mt) {
    return (Height = metros * Height);
  }else if (yd) {
    return (Height = yards * Height);
  }
}

// converter unidades medidas LENGHT
function convert_lenght() {
  var Lenght = document.getElementById("length").value;

  var INCH = document.getElementById("lenghtcampo");
  var CM = document.getElementById("lenghtcampo");
  var FEET = document.getElementById("lenghtcampo");
  var MT = document.getElementById("lenghtcampo");
  var JD = document.getElementById("lenghtcampo");

  const inc = INCH.value === "inch";
  const cm = CM.value === "cent";
  const Feet = FEET.value === "feet";
  const mt = MT.value === "metro";
  const yd = JD.value === "jarda";

  var centimetros_Inc = 2.54;
  var inch = centimetros_Inc;
  var feet = inch * 12;
  var yards = feet * 3
  var centimetros_Metros = 1;
  var metros = centimetros_Metros * 100;

  if (cm) {
    return (Lenght = centimetros_Metros * Lenght);
  } else if (Feet) {
    return (Lenght = feet * Lenght);
  } else if (inc) {
    return (Lenght = inch * Lenght);
  } else if (mt) {
    return (Lenght = metros * Lenght);
  } else if (yd) {
    return (Lenght = yards * Lenght);
  }
}

// converter unidades medidas AREA TOTAL
function convert_totalArea() {
  var totalArea = document.getElementById("totalarea").value;

  var INCH = document.getElementById("TotalArea");
  var CM = document.getElementById("TotalArea");
  var FEET = document.getElementById("TotalArea");
  var MT = document.getElementById("TotalArea");
  var YD = document.getElementById("TotalArea");

  const inc = INCH.value === "inch";
  const cm = CM.value === "cent";
  const Feet = FEET.value === "feet";
  const mt = MT.value === "metro";
  const yd = YD.value === "jarda";

  var centimetros_Inc = 2.54;
  var inch = centimetros_Inc;
  var feet = inch * 12;
  var yards = feet * 3
  var centimetros_Metros = 1;
  var metros = centimetros_Metros * 100;

  if (cm) {
    return (totalArea = Math.pow(centimetros_Metros, 2) * totalArea);
  } else if (Feet) {
    return (totalArea = Math.pow(feet, 2) * totalArea);
  } else if (inc) {
    return (totalArea = Math.pow(inch, 2) * totalArea);
  } else if (mt) {
    return (totalArea = Math.pow(metros, 2) * totalArea);
  } else if (yd) {
    return (totalArea = Math.pow(yards, 2) * totalArea)
  }
}

// converter unidades medidas cilindro
function convert_cylinder() {
  var diametercamp = document.getElementById("diametercamp").value;

  var INCH = document.getElementById("cylinderArea");
  var CM = document.getElementById("cylinderArea");
  var FEET = document.getElementById("cylinderArea");
  var MT = document.getElementById("cylinderArea");
  var YD = document.getElementById("cylinderArea");

  const inc = INCH.value === "inch";
  const cm = CM.value === "cent";
  const Feet = FEET.value === "feet";
  const mt = MT.value === "metro";
  const yd = YD.value === "jarda";

  var centimetros_Inc = 2.54;
  var inch = centimetros_Inc;
  var feet = inch * 12;
  var yards = feet * 3
  var centimetros_Metros = 1;
  var metros = centimetros_Metros * 100;

  if (cm) {
    return (diametercamp = diametercamp * centimetros_Metros );
  } else if (Feet) {
    return (diametercamp = diametercamp * feet )
  } else if (inc) {
    return (diametercamp = diametercamp * inch );
  } else if (mt) {
    return (diametercamp = diametercamp * metros );
  } else if (yd) {
    return (diametercamp = diametercamp * yards )
  }
}

// start convert steps

// converter unidades medidas Steps run
function convert_stepsRun() {
  var run = document.getElementById("run").value;

  var INCH = document.getElementById("stepsrun");
  var CM = document.getElementById("stepsrun");
  var FEET = document.getElementById("stepsrun");
  var MT = document.getElementById("stepsrun");
  var YD = document.getElementById("stepsrun");

  const inc = INCH.value === "inch";
  const cm = CM.value === "cent";
  const Feet = FEET.value === "feet";
  const mt = MT.value === "metro";
  const yd = YD.value === "jarda";

  var centimetros_Inc = 2.54;
  var inch = centimetros_Inc;
  var feet = inch * 12;
  var yards = feet * 3
  var centimetros_Metros = 1;
  var metros = centimetros_Metros * 100;

  if (cm) {
    return (run = run * centimetros_Metros);
  } else if (Feet) {
    return (run = run * feet);
  } else if (inc) {
    return (run = run * inch);
  } else if (mt) {
    return (run = run * metros);
  }else if (yd) {
    return (run = run * yards)
  }
}
// converter unidades medidas Steps plataforma
function convert_stepsPlataform() {
  var plataform = document.getElementById("plataform").value;

  var INCH = document.getElementById("stepsdepth");
  var CM = document.getElementById("stepsdepth");
  var FEET = document.getElementById("stepsdepth");
  var MT = document.getElementById("stepsdepth");
  var YD = document.getElementById("stepsdepth");

  const inc = INCH.value === "inch";
  const cm = CM.value === "cent";
  const Feet = FEET.value === "feet";
  const mt = MT.value === "metro";
  const yd = YD.value === "jarda";

  var centimetros_Inc = 2.54;
  var inch = centimetros_Inc;
  var feet = inch * 12;
  var yards = feet * 3
  var centimetros_Metros = 1;
  var metros = centimetros_Metros * 100

  if (cm) {
    return (plataform = plataform * centimetros_Metros);
  } else if (Feet) {
    return (plataform = plataform * feet);
  } else if (inc) {
    return (plataform = plataform * inch);
  } else if (mt) {
    return (plataform = plataform * metros);
  } else if (yd) {
    return (plataform = plataform * yards);
  }
}
// converter unidades medidas Steps rise
function convert_stepsRise() {
  var rise = document.getElementById("rise").value;

  var INCH = document.getElementById("stepsrise");
  var CM = document.getElementById("stepsrise");
  var FEET = document.getElementById("stepsrise");
  var MT = document.getElementById("stepsrise");
  var YD = document.getElementById("stepsrise");

  const inc = INCH.value === "inch";
  const cm = CM.value === "cent";
  const Feet = FEET.value === "feet";
  const mt = MT.value === "metro";
  const yd = YD.value === "jarda";

  var centimetros_Inc = 2.54;
  var inch = centimetros_Inc;
  var feet = inch * 12;
  var yards = feet * 3
  var centimetros_Metros = 1;
  var metros = centimetros_Metros * 100

  if (cm) {
    return (rise = rise * centimetros_Metros);
  } else if (Feet) {
    return (rise = rise *feet);
  } else if (inc) {
    return (rise = rise * inch);
  } else if (mt) {
    return (rise = rise * metros);
  }else if (yd) {
    return (rise = rise * yards);
  }
}
// converter unidades medidas Steps width
function convert_stepsWidth() {
  var widthSteps = document.getElementById("widthsteps").value;

  var INCH = document.getElementById("widthSteps");
  var CM = document.getElementById("widthSteps");
  var FEET = document.getElementById("widthSteps");
  var MT = document.getElementById("widthSteps");
  var YD = document.getElementById("widthSteps");

  const inc = INCH.value === "inch";
  const cm = CM.value === "cent";
  const Feet = FEET.value === "feet";
  const mt = MT.value === "metro";
  const yd = YD.value === "jarda";

  var centimetros_Inc = 2.54;
  var inch = centimetros_Inc;
  var feet = inch * 12;
  var yards = feet * 3
  var centimetros_Metros = 1;
  var metros = centimetros_Metros * 100;

  if (cm) {
    return (widthSteps = widthSteps * centimetros_Metros );
  } else if (Feet) {
    return (widthSteps  = widthSteps  *feet);
  }else if (inc) {
    return (widthSteps = widthSteps * inch);
  } else if (mt) {
    return (widthSteps = widthSteps *metros );
  } else if (yd) {
    return (widthSteps = widthSteps * yards);
  }
}
//  and convert steps



function convert() {
  var quantity = document.getElementById("quantity").value;
  
  var quantityOfsteps = document.getElementById("quantitysteps").value;
  var quantityOfCylinder = document.getElementById("quantitycylinder").value;
  var retangulo = document.getElementById("rectangle");
  var totalArea = document.getElementById("totalArea");
  var cylinder = document.getElementById("cylinder");
  var steps = document.getElementById("steps");
  var stepsnumber = document.getElementById("stepsNumber").value;

  var Porcentagem = document.getElementById("percentage").value; // Para evitar desperdícios, é recomendado prever uma margem de segurança de 10% a 15%.

  //Funcoes conversao de medidas
  var width = convert_Width();
  var height = convert_Height();
  var length = convert_lenght();
  var Totalarea = convert_totalArea();
  var diameter = convert_cylinder();

  //steps
  var run = convert_stepsRun();
  var plataform = convert_stepsPlataform();
  var rise = convert_stepsRise();
  var widthSteps = convert_stepsWidth();

  if (totalArea.checked) {
    var volume = (Totalarea * height) / 1000000;
    acrecimo = volume * Porcentagem/100
    var  valumeTotal = volume + acrecimo
    return (document.getElementById("final").value = innerHTML =
    valumeTotal.toFixed(2));
  } else if (retangulo.checked) {
    var volume = (width * length * height) * quantity / 1000000;
    acrecimo = volume * Porcentagem/100
    var  valumeTotal = volume + acrecimo
    return (document.getElementById("final").value = innerHTML =
    valumeTotal.toFixed(2));
  } else if (cylinder.checked) {
    var volume = ((diameter / 2) ** 2 * 3.1416 * height) * quantityOfCylinder  / 1000000;
    acrecimo = volume * Porcentagem/100
    var  valumeTotal = volume + acrecimo 
    return (document.getElementById("final").value = innerHTML =
    valumeTotal.toFixed(2));
  } 
  
  else if (steps.checked) {
      var depth = run * (stepsnumber- 1) + plataform;
            var height = rise * stepsnumber;
            var volume1 = depth * height * widthSteps;
            var volume2 = (widthSteps * (rise * stepsnumber) * (run * (stepsnumber - 1))) / 2;
            var volume = (volume1 - volume2)*quantityOfsteps/1000000
            var acrecimo = volume * Porcentagem/100
              var volumeTotal = volume  + acrecimo 
    return (document.getElementById("final").value = innerHTML =
    volumeTotal.toFixed(2));
  }

  
}

