const users = [
  {
    id: 1,
    name: 'Kim',
    schoolId: '11-2-00091'
  },
  {
    id: 2,
    name: 'Linus',
    schoolId: '11-2-00092'
  }
];

const grades = [
  {
    id: 1,
    schoolId: '11-2-00091',
    grade: 99
  },
  {
    id: 2,
    schoolId: '11-2-00092',
    grade: 100
  },
  {
    id: 3,
    schoolId: '11-2-00091',
    grade: 84
  }
];

const getUser = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.id === id);
      user ? resolve(user) : reject(`Unable to find user with id ${id}`);
    }, 200);
  });
};

const getGrades = schoolId => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const studentGrades = grades.filter(g => g.schoolId === schoolId);
      studentGrades ? resolve(studentGrades) : reject(`Unable to find user with id ${schoolId}`);
    }, 200);
  });
};

const getStatus = async (id) => {
  const user = await getUser(id);
  const grades = await getGrades(user.schoolId);
  const average = grades.map(g => g.grade).reduce((a, b) => a += b) / grades.length;
  return `${user.name} has an average of ${average}%`;
};

// getUser(2)
//   .then(user => console.log(user))
//   .catch(e => console.log(e));

// getGrades('11-2-00091')
//   .then(grade => console.log(grade))
//   .catch(e => console.log(e));

getStatus(1)
  .then(d => console.log(d))
  .catch(e => console.log(e));
