var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03, 
              49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];


// Create separate variables for each input
var max, aPlus, a, aMinus, bPlus, b, bMinus, cPlus, c, cMinus, d, f;
var total_students= new Array(12);


// Get all the input elements within the table
var inputFields = document.querySelectorAll('.input-field'); //store in a form of array

var submit_button = document.querySelector('#button');
submit_button.addEventListener("click", function(){
  var boolean = false;
  inputFields.forEach(function(input) {
    // Get the value of each input
    var value = input.value;

    // Perform your validation logic here
    if (isNaN(value) || parseFloat(value) < 0 || value == '') {
      boolean = true;
    }
  });

for(let i = 0;i<inputFields.length-1;i++){
  if(parseFloat(inputFields[i].value) <= parseFloat(inputFields[i+1].value))
    boolean = true;
};

  if(boolean == true)
    window.alert("Please fully enter data correctly & logically in inputs");
  else{
    max = parseFloat(inputFields[0].value);
    aPlus = parseFloat(inputFields[1].value);
    a = parseFloat(inputFields[2].value);
    aMinus = parseFloat(inputFields[3].value);
    bPlus = parseFloat(inputFields[4].value);
    b = parseFloat(inputFields[5].value);
    bMinus = parseFloat(inputFields[6].value);
    cPlus = parseFloat(inputFields[7].value);
    c = parseFloat(inputFields[8].value);
    cMinus = parseFloat(inputFields[9].value);
    d = parseFloat(inputFields[10].value);
    f = parseFloat(inputFields[11].value);

    processData(grades, total_students);
    addData(newChart,total_students);
    
  };
});

var new_grade = document.querySelectorAll('.box');
var submit_button2 = document.querySelector('#butt');

submit_button2.addEventListener("click", function(){
    var boolean = false;
    var input = parseFloat(new_grade[0].value);
    if (isNaN(input) || input < 0 || input > max || max == null) {
      boolean = true;
    }
    else{
      grades.push(input);
      processData(grades, total_students);
      addData(newChart,total_students);
    }

    if(boolean == true)
      window.alert("Please type valid grade (also type lower bounds first)!");
})

function addData(newChart, total_students) {
  newChart.data.datasets.forEach((dataset) => {
      dataset.data.push(total_students);
  });
  newChart.update();
}

function processData(grades, total_students){
  for(let i = 0;i<11;i++){
    total_students[i] = 0;
  }
  for(let i = 0;i<grades.length;i++){
    var input = grades[i];
    if(input >= aPlus)
      total_students[0]++;
    else if(input >= a && input < aPlus)
      total_students[1]++;
    else if(input >= aMinus && input < a)
      total_students[2]++;
    else if(input >=bPlus && input <aMinus)
      total_students[3]++;
    else if(input >= b && input < bPlus)
      total_students[4]++;
    else if(input >= bMinus && input <b)
      total_students[5]++;
    else if(input >=cPlus && input < bMinus)
      total_students[6]++;
    else if(input >= c && input < cPlus)
      total_students[7]++;
    else if(input >cMinus && input < c)
      total_students[8]++;
    else if(input >= d && input < cMinus)
      total_students[9]++;
    else
      total_students[10]++;
  }
}

var canvasElement = document.getElementById("histogramChart");
var config = {
  type: "bar",
  data: {labels: ["A+","A", "A-","B+","B","B-", "C+","C","C-","D","F"], 
  datasets: [
    {
    label: "Number of students", 
    data: total_students,
    backgroundColor: [
      "rgba(230, 30, 30, 0.4)", 
      "rgba(230, 30, 30, 0.4)", 
      "rgba(230, 30, 30, 0.4)",
      "rgba(230, 30, 30, 0.4)", 
      "rgba(230, 30, 30, 0.4)", 
      "rgba(230, 30, 30, 0.4)", 
      "rgba(230, 30, 30, 0.4)",
      "rgba(230, 30, 30, 0.4)",
      "rgba(230, 30, 30, 0.4)",
      "rgba(230, 30, 30, 0.4)", 
      "rgba(230, 30, 30, 0.4)", 
    ], 
    borderColor: [
      "rgba(230, 30, 30, 0.4)", 
      "rgba(230, 30, 30, 0.4)", 
      "rgba(230, 30, 30, 0.4)",
      "rgba(230, 30, 30, 0.4)", 
      "rgba(230, 30, 30, 0.4)", 
      "rgba(230, 30, 30, 0.4)", 
      "rgba(230, 30, 30, 0.4)", 
      "rgba(230, 30, 30, 0.4)", 
      "rgba(230, 30, 30, 0.4)",
      "rgba(230, 30, 30, 0.4)", 
      "rgba(230, 30, 30, 0.4)", 
    ],
     borderWidth: 1,
      },
    ],
  },
};

var newChart = new Chart(canvasElement, config)





















  