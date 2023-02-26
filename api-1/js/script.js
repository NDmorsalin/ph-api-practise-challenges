const persons = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};

const container = document.getElementById("container");
const found = document.getElementById("found");
/**
 * Or
 * found.innerText = persons.message;
 */
found.innerText = persons.found;

persons.result.forEach((person) => {
  const col = document.createElement("div");
  col.classList.add("col-sm-6", "mb-3", "mb-sm-0");
  col.innerHTML = `<div class="card shadow ">
      <div class="card-header"> 
          <h3 class="">Person Name: <span id="name">${person.name.fullName.join(
            " "
          )}</span></h3>
      </div>
      <div class="card-body">
          
        <p class="card-text">Age: <span id="age">${person.age}</span></p>
        <p class="card-text"> Street: <span id="street">${
          person.address.street
        }</span></p>
        
      </div>
    </div>`;

  container.appendChild(col);
});
