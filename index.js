let arr = ["Sumanth", "Varsha", "Shyam", "Karthik", "Ramya"];

for (let i in arr) {
  console.log(+i + 1 + "-" + arr[i]);
}

for (let [index, value] of arr.entries()) {
  console.log(`${index + 1}-${value}`);
}

let students = [
  { id: 1, s_name: "Priya", city: "Hyderabad" },
  { id: 2, s_name: "Arjun", city: "Guntur" },
  { id: 3, s_name: "Madhu", city: "Rajahmundry" },
  { id: 4, s_name: "Lenin", city: "Chennai" },
  { id: 5, s_name: "Sitara", city: "Karnataka" },
  { id: 6, s_name: "Vinay", city: "Kakinada" },
];

for (let index in students) {
  let student = students[index];
  console.log(`${student.s_name} from ${student.city}`);
}

for (let student of students) {
  console.log(`${student.s_name} from ${student.city}`);
}