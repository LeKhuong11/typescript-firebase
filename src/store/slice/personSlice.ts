import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"
import { collection, getDocs } from "firebase/firestore"
import { db } from '../../firebase/config'
 
export interface Person {
    id: number,
    age: string
    name: string
}

interface PersonState {
    persons: Person[]
}

// frist value
const initialState: PersonState = {
    persons: [],
};


//Fetching data from firebase
export const fetchUser = createAsyncThunk(
    "user/fetch",
    async () => {
    let users: any = [];
    const querySnapshot = await getDocs(collection(db, "users"));

    querySnapshot.docs.forEach( doc => {
        users.push({...doc.data(), id: doc.id})
    })
    return users;
})

    
export const PersonSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        addPerson: (state, action: PayloadAction<{ name: string, age: string }>) => {
            state.persons.push({
                id: state.persons.length,
                name: action.payload.name,
                age: action.payload.age,
            })
        }  
    }, 
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
          state.persons = action.payload;
        });
      }, 
})

export default PersonSlice;
export const { addPerson } = PersonSlice.actions;