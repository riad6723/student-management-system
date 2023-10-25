const demoTeachers = [
    {
      name: "John Smith",
      email: "john.smith@example.com",
      password: "password123",
      id: 1
    },
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      password: "secretPassword",
      id: 2
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      password: "mySecurePassword",
      id: 3
    }
  ];

  const students = [
    {
      name: "Alice Wonders",
      email: "alice.wonders@example.com",
      password: "password123",
    },
    {
      name: "Bob Smith",
      email: "bob.smith@example.com",
      password: "password456",
    },
    {
      name: "Carol Johnson",
      email: "carol.johnson@example.com",
      password: "password789",
    },
    {
      name: "Dave Miller",
      email: "dave.miller@example.com",
      password: "password012",
    },
    {
      name: "Eve Williams",
      email: "eve.williams@example.com",
      password: "password345",
    },
  ];

  const classes = [
    {
      teacherName: "John Smith",
      className: "Math",
      classPic: "https://example.com/math.png",
      classDesc: "This is a math class.",
      id: 1
    },
    {
      teacherName: "John Smith",
      className: "Science",
      classPic: "https://example.com/science.png",
      classDesc: "This is a science class.",
      id:2
    },
    {
      teacherName: "Alice Johnson",
      className: "English",
      classPic: "https://example.com/english.png",
      classDesc: "This is an English class.",
      id:3
    },
    {
      teacherName: "Jane Doe",
      className: "History",
      classPic: "https://example.com/history.png",
      classDesc: "This is a history class.",
      id: 4
    },
    {
      teacherName: "Jane Doe",
      className: "Art",
      classPic: "https://example.com/art.png",
      classDesc: "This is an art class.",
      id:5
    },
  ];

  const classTeachers = [
    {
      teacherID: 1,
      classID: 1,
    },
    {
      teacherID: 1,
      classID: 2,
    },
    {
        teacherID: 2,
        classID: 3,
    },
    {
        teacherID: 3,
        classID: 4,
    },
    {
        teacherID: 3,
        classID: 5,
    },
  ];

  const classStudents = [
    {
      studentID: 1,
      classID: 1,
    },
    {
      studentID: 1,
      classID: 2,
    },
    {
       studentID: 1,
       classID: 3,
    },
    {
       studentID: 1,
       classID: 5,
    },

    {
        studentID: 2,
        classID: 1,
      },
      {
        studentID: 2,
        classID: 2,
      },
      {
         studentID: 2,
         classID: 4,
      },
      {
         studentID: 3,
         classID: 2,
      },

      {
        studentID: 3,
        classID: 3,
      },
      {
        studentID: 3,
        classID: 4,
      },
      {
         studentID: 4,
         classID: 1,
      },
      {
         studentID: 4,
         classID: 2,
      },
      {
        studentID: 5,
        classID: 1,
      },
      {
        studentID: 5,
        classID: 2,
      },
      {
         studentID: 5,
         classID: 3,
      },
      {
         studentID: 5,
         classID: 4,
      },
    
  ];
  
  
  
  
  module.exports={demoTeachers, students, classes, classTeachers,classStudents}
  