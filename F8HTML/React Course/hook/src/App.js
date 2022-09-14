import { useState } from 'react';
import Content from './Content';

//! Gỡ bỏ số thứ tự trên App để chạy chương trình

// Thay đổi trạng thái của dữ liệu
//* Ví dụ: Nguyễn Văn A đổi tên thành Nguyễn Văn B
// dữ liệu thay đổi gì giao diện thay đổi đó

const orders = [100, 200, 300];

/*function App1() {
  //initial state có thể dùng function để truyền vào 
  // Nó sẽ lấy giá trị return của hàm 
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur, 0);
    console.log(total);
    return total;
  });

  const [info, setInfo] = useState({
    name: "Nguyễn Vũ Thành Nguyên",
    age: 18,
    address: "Hà Nội, VN",
  });

  const handleIncrease = () => {
    //setCounter(counter + 1)

    //? Set state vớ callback
    setCounter(preCounter => preCounter + 1);
    /* setCounter(preCounter => preCounter + 1);
    setCounter(preCounter => preCounter + 1);
  };

  const handleChangeProfile = () => {
    setInfo({
      ...info,
      bio: "Sinh viên công nghệ thông tin trường HUFLIT"
    })
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      {<button onClick={handleIncrease}>Increase</button>}

      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleChangeProfile}>Update</button>
    </div>
  );
}*/

//! Exercise
//* count sum an array then multiply for 3

/* const array = [1, 2, 3, 4, 5, 6, 3, 9 ,10, 12]
let flag = false;
function App() {
  const [value, setValue] = useState(() => {
    const total = array.sort((a, b) => b - a);
    return total;
  });

  const handleSum = () => {
    setValue(array.reduce((acc, cur) => acc + cur));
    flag = true;
  }
  const handleSort = () => {
    setValue(array.sort((a, b) => a - b))
  }

  const [infor, setInfor] = useState(({
    name: "Nguyễn Vũ Thành Nguyên",
    dob: '05/06/2002',
    address: '76/14/8 đường 7 Linh Trung Thủ Đức'
  }))
  const handleProfile = () => {
    setInfor(() => ({
      ...infor,
      bio: 'Thích màu hồng ghét sự giả dối'
    }))
  }
  
  
  return (
    <div className='App'>
      <h1> { true && value}</h1>
      <button onClick={handleSum}>Sum</button>

      <h1>{false && value}</h1>
      <button onClick={handleSort}>Sort</button>

      <h1>{JSON.stringify(infor)}</h1>
      <button onClick={handleProfile}>Update Profile</button>
    </div>
  )
} */


//! Random gift

const gifts = [
  'Macbook 14" Pro',
  'Porsche',
  'Mecerdes'
];


function App2() {

  const [gift, setGift] = useState();
  console.log(gift)
  const handleGetGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index]);
  }

  return (
    <div className='App' style={{ padding: 32 }}>
      <h1>{gift || 'Chưa có phần thưởng'}</h1>
      <button onClick={handleGetGift}>Lấy thưởng</button>
    </div>
  )
}

//! Two way binding
//* Thay đổi một chiều mà chiều còn lại cũng thay đổi là two way binding
//* Thay đổi chỉ được một chiều là one one binding
//* GÕ BÊN NGOÀI THÌ BÊN TRONG THAY ĐỔI GÕ BÊN TRONG THÌ BÊN NGOÀI THAY ĐỔI
// => TWO WAY BINDING

const courses = [
  {
    id: 1,
    name: 'javascript'
  },
  {
    id: 2,
    name: 'ReactJS'
  },
  {
    id: 3,
    name: 'C#'
  },
  {
    id: 4,
    name: 'HTML&CSS'
  }
]


//With radio


function App3() {
  const [checked, setChecked] = useState(2);

  console.log(checked);
  const handleSubmit = () => {

  }
  return (
    <div className='App' style={{ padding: 32 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type={"radio"}
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

//With checkbox

function App4() {
  const [checked, setChecked] = useState([]);

  console.log(checked);
  const handleSubmit = () => {
    //Call API
    console.log({ ids: checked })
  }

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        //Uncheck
        return checked.filter(item => item !== id)
      } else {
        //Check
        return [...prev, id]
      }
    })
  }
  return (
    <div className='App' style={{ padding: 32 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type={"checkbox"}
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

//Tự làm

const cars = [
  {
    id: 1,
    name: 'BMW'
  },
  {
    id: 2,
    name: 'Maybach'
  },
  {
    id: 3,
    name: 'Mecerdes'
  },
]

function AppExercise() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState();
  const [checkedBox, setCheckedBox] = useState([]);

  const handleRegister = () => {
    console.log({
      name,
      email,
      checked,
    })
  }

  const handleCheck = (id) => {
    setCheckedBox(prev => {
      const isChecked = checkedBox.includes(id);
      if (isChecked) {
        //Uncheck
        return checkedBox.filter(item => item != id)
      } else {
        return [...prev, id];
      }
    });
  }

  console.log(checkedBox)

  return (
    <div className='App' style={{ padding: 32 }}>
      {/* //* Input with text */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => setName("Nguyen Văn BBB")}>Change Name</button>
      <br></br>

      {/* //* Input with radio */}
      {cars.map((car) => (
        <div key={car.id}>
          <input
            onChange={() => setChecked(car.id)}
            checked={checked == car.id}
            type={"radio"}
          /> {car.name}
        </div>
      ))}
      <br></br>

      {/* //* Input with checkbox */}
      {cars.map((car) => (
        <div key={car.id}>
          <input
            type={"checkbox"}
            checked={checkedBox.includes(car.id)}
            onChange={() => handleCheck(car.id)}
          />
          {car.name}
        </div>
      ))}
      <button onClick={handleRegister}>Register</button>

    </div>
  )
}


function App6() {

  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const StorageJobs = JSON.parse(localStorage.getItem('jobs'))
    return StorageJobs ?? []
  })

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs);
      return newJobs;
    });
    setJob('')
  }
  console.log(job)

  return (
    <div style={{ padding: 32 }}>
      <input
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  )
}


// Mounted / Unmounted

function App() {
  const [show, setShow] = useState(false);
  return(
    <div style={{padding: 20}}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  )
}


export default App;
