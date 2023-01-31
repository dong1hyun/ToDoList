import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atom";

function ToDo({ text, category, id }: IToDo) {
    const setToDo = useSetRecoilState(toDoState);
    const onClick = (newCategory : Categories) => {
        setToDo(oldToDos => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const newToDo = {text, id, category: newCategory};
            const front = oldToDos.slice(0, targetIndex);
            const rear = oldToDos.slice(targetIndex + 1);
            const newToDos = [...front, newToDo, ...rear];
            return newToDos;
        });
    }
    const onDelete = () => {
        setToDo(oldToDos => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const front = oldToDos.slice(0, targetIndex);
            const rear = oldToDos.slice(targetIndex + 1);
            const newToDos = [...front, ...rear];
            return newToDos;
        })
    } 
    return (
        <li>
            <span>{text}</span>
            {category !== Categories.TO_DO && <button onClick={() => onClick(Categories.TO_DO)}>To Do</button>}
            {category !== Categories.DOING && <button onClick={() => onClick(Categories.DOING)}>Doing</button>}
            {category !== Categories.DONE && <button onClick={() => onClick(Categories.DONE)}>Done</button>}
            <button onClick={onDelete}>삭제</button>
        </li>
    );
}

export default ToDo;