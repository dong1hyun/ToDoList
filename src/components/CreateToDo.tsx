import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atom";

interface IForm {
    toDo: string;
}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const handleValid = ({ toDo }: IForm) => { //인자로 입력받은 데이터가 들어옴
        setToDos((oldToDos) => [
            { text: toDo, id:Date.now(), category }, 
            ...oldToDos
        ]);
        setValue("toDo", "");
    };
    const {register, handleSubmit, setValue} = useForm<IForm>();
    return (
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(handleValid)}>
            <input {...register("toDo", { required: "toDo is required" })} placeholder="Write a to do" />
            <button>Add</button>
        </form>
    )
}

export default CreateToDo;

