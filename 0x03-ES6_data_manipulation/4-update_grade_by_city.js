export default function updateStudentGradeByCity(students, city, newGrades) {
  const byCity = students.filter((student) => student.location === city);
  const updatedGrades = byCity.map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);
    return { ...student, grade: grade ? grade.grade : 'N/A' };
  });
  return updatedGrades;
}
