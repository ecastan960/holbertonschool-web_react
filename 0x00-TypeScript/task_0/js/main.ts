interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Erling',
  lastName: 'Haaland',
  age: 22,
  location: 'Norway'
};

const student2: Student = {
  firstName: 'Vinicius',
  lastName: 'Jr',
  age: 22,
  location: 'Brazil'
};

const studentsList: Student[] = [student1, student2];

const tableRow = ['firstName', 'location'];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const thead: HTMLTableSectionElement = document.createElement('thead');

document.body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);

for (const item of tableRow) {
  const th : HTMLTableCellElement = document.createElement('th');
  th.appendChild(document.createTextNode(`${item}`))
  thead.appendChild(th)
}

for (const student of studentsList) {
  const tr: HTMLTableRowElement = document.createElement('tr');
  tbody.appendChild(tr);
  const values = [student.firstName, student.location];

  for (const value of values) {
    const td : HTMLTableCellElement = document.createElement('td');
    td.appendChild(document.createTextNode(`${value}`));
    tr.appendChild(td);
  }
}
