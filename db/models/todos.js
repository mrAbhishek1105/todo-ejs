import mongoose,{Schema} from "mongoose";

const todoschema = new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    }
})
const Todo = mongoose.model('Todo', todoschema);

export default Todo;