import { atom, selector } from "recoil";

export enum Categories {
    "TO_DO" = "TO_DO", 
    "DOING" = "DOING", 
    "DONE" = "DONE",
}

export interface IToDo {
    text: string;
    id: number;
    category: Categories;
}

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
})

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

//selector는 기존의 state를 이용해 새로운 state를 만들 수 있음
//+ atom의 output을 변형시킬 수 있음
export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => { //get함수는 selector가 어떤 것을 반환할지 결정
        //인자로는 get function이 또 들어있고 이 함수는 원하는 atom을 가져올 수 있
        const toDos = get(toDoState);
        const category = get(categoryState);
        //return값이 바로 toDoSelector의 value
        return toDos.filter((toDo) => toDo.category === category);
    }
})