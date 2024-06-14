import TryToDoContainer from "../layout/tryTodoContainee";
import act1 from "../statics/tryTodo/act1.jpg";
import act2 from "../statics/tryTodo/act2.jpg"

export default function TryToDo() {
  return (
    <div>
      <div className="text-2xl flex justify-center mt-12">
        <h1>ลองทำดู หนูทำได้</h1>
      </div>
      <TryToDoContainer src={act1} />
      <TryToDoContainer src={act2} />
    </div>
  );
}
