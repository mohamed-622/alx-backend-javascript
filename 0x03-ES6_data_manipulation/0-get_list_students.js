export default function getListStudents() {
  const students = [];
  const student1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const student2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const student3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };
  students.push(student1);
  students.push(student2);
  students.push(student3);
  return students;
}
