document.querySelector("#getEmployees").addEventListener("click", loadEmployes);
document.querySelector("#getEmployee").addEventListener("click", loadEmploye);
let a;

function loadEmployes() {
  var loadimage = document.querySelector("#loading");
  loadimage.style.display = "block";

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "employees.json", true);

  setTimeout(() => {
    xhr.onload = function () {
      loadimage.style.display = "none";

      if (this.status === 200) {
        let employees = JSON.parse(this.responseText);

        let html = "";

        employees.forEach((employee) => {
          html += `<tr>
          <td>${employee.id}</td>
          <td>${employee.firstname}</td>
          <td>${employee.lastname}</td>
          <td>${employee.age}</td>
          <td>${employee.retired}</td>
      </tr>`;
        });

        document.querySelector("#empyloyes").innerHTML = html;
      }
    };

    xhr.send();
  }, 1500);
}
fetch("./employees.json")
  .then((response) => response.json())
  .then((data) => (a = data))
  .catch((err) => console.log(error));

function loadEmploye() {
  var loadimage = document.querySelector("#loading");
  loadimage.style.display = "block";

  var idd = document.getElementById("postid").value;

  var src = `./employees.json `;

  var xhr = new XMLHttpRequest();

  xhr.open("GET", src, true);

  setTimeout(() => {
    xhr.onload = function (e) {
      loadimage.style.display = "none";

      let c;
      let f = a.find((emple) => {
        return emple.id === parseInt(idd);
      });

      c = ` <tr>
                  <td>${idd}</td>
                  <td>${f.firstname}</td>
                  <td>${f.lastname}</td>
                  <td>${f.age}</td>
                  <td>${f.retired}</td>
              </tr>`;

      document.querySelector("#empyloyes").innerHTML = c;
    };

    xhr.send();
  }, 500);
}
