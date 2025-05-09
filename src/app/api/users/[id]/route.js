import { NextResponse } from "next/server";

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 29,
    gender: "Female",
    email: "alice.johnson@example.com",
    phone: "+1-202-555-0173",
    address: "123 Maple Street, Springfield, IL",
    occupation: "Software Developer",
  },
  {
    id: 2,
    name: "Brian Smith",
    age: 35,
    gender: "Male",
    email: "brian.smith@example.com",
    phone: "+1-202-555-0147",
    address: "456 Oak Avenue, Dallas, TX",
    occupation: "Marketing Manager",
  },
  {
    id: 3,
    name: "Catherine Lee",
    age: 42,
    gender: "Female",
    email: "catherine.lee@example.com",
    phone: "+1-202-555-0189",
    address: "789 Pine Road, San Diego, CA",
    occupation: "Graphic Designer",
  },
  {
    id: 4,
    name: "David Thompson",
    age: 31,
    gender: "Male",
    email: "david.thompson@example.com",
    phone: "+1-202-555-0123",
    address: "321 Birch Blvd, Miami, FL",
    occupation: "Financial Analyst",
  },
  {
    id: 5,
    name: "Emily Davis",
    age: 27,
    gender: "Female",
    email: "emily.davis@example.com",
    phone: "+1-202-555-0192",
    address: "654 Cedar Street, Seattle, WA",
    occupation: "HR Specialist",
  },
  {
    id: 6,
    name: "Frank Martinez",
    age: 38,
    gender: "Male",
    email: "frank.martinez@example.com",
    phone: "+1-202-555-0170",
    address: "987 Elm Lane, Austin, TX",
    occupation: "Project Manager",
  },
  {
    id: 7,
    name: "Grace Kim",
    age: 26,
    gender: "Female",
    email: "grace.kim@example.com",
    phone: "+1-202-555-0156",
    address: "258 Willow Drive, Portland, OR",
    occupation: "Data Scientist",
  },
  {
    id: 8,
    name: "Henry Wilson",
    age: 33,
    gender: "Male",
    email: "henry.wilson@example.com",
    phone: "+1-202-555-0134",
    address: "369 Aspen Court, Denver, CO",
    occupation: "Mechanical Engineer",
  },
  {
    id: 9,
    name: "Isabelle Brown",
    age: 30,
    gender: "Female",
    email: "isabelle.brown@example.com",
    phone: "+1-202-555-0165",
    address: "147 Spruce Lane, Boston, MA",
    occupation: "UX Designer",
  },
  {
    id: 10,
    name: "Jack Taylor",
    age: 45,
    gender: "Male",
    email: "jack.taylor@example.com",
    phone: "+1-202-555-0111",
    address: "753 Fir Street, Chicago, IL",
    occupation: "Architect",
  },
];

export async function GET(_, { params }) {
  const { id } = params;
  const user = users.find((u) => u.id.toString() === id);

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}
