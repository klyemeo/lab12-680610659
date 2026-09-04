import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import Footer from "../components/Footer";
import TaskCard from "../components/TaskCard";
import { type TaskCardProps }  from "../libs/Todolist";
export default function TodolistPage() {
  // 📋 src/pages/TodolistPage.tsx
const title = "Todo List";
const tasks: TaskCardProps[] = [

  {
    id: "1",
    title: "Read a book",
    description: "Vite + React + Bootstrap + TS",
    isDone: false,
  },
  {
    id: "2",
    title: "Write code",
    description: "Finish project for class",
    isDone: false,
  },
  {
    id: "3",
    title: "Deploy app",
    description: "Push project to GitHub Pages",
    isDone: false ,
  },
];
  /* ...ToDolist... */


  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        <div className="col-2 p-0">
          <Sidebar userName="Jarkrasri" type="student" />
        </div>

        <div className="col-10 p-0 d-flex flex-column min-vh-100">
          {/* ══ [ขั้นที่ 2A ] แยก Component "Header" (ไม่มี props) ══════════════════
          <Header />
          */}
        <Header></Header>

          <main className="flex-grow-1 p-4">
            <div className="container">
              {/* [ขั้นที่ 1] เปลี่ยน 2 บรรทัดนี้ให้ดึงค่าจากตัวแปรผ่าน { } */}
              <h2 className="text-center">{title}</h2>
              <p className="text-center text-muted">ทั้งหมด {tasks.length} งาน   </p>
            
              <TaskInput></TaskInput>
              {/* <div className="d-flex my-3">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Insert a task here.."
                />
                <button className="btn btn-primary px-4">Add</button>
              </div> */
              tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  isDone={task.isDone}
                />
              ))
            }


             
          
          </div>

          </main>
        
        <Footer year = "2026" fullName="Jarkrasri Thonglueng" studentId="680610659"></Footer>
        </div>
      </div>
    </div>
  );
}
