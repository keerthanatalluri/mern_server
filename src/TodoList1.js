import { useState } from "react"
export default function TodoList(){
    const [formData,SubmitFormData] = useState({
        Email:"",
        time:"",
        date:"",
        note:""
    })
    const [TableData,SubmitTable]=useState([])

    function HandleForm(e){
        const {name,value} = e.target
        SubmitFormData({...formData,[name]:value});
    }
    function HandleSubmit(){
        SubmitTable([...TableData,formData]);
        SubmitFormData({
            Email:"",
            time:"",
            date:"",
            note:""
        })
    }
    return(
        <div>
            <h1>Todo List</h1>
            <div class="form">
            <input name="Email"
                type="Email"
                value={formData.Email}
                onChange={HandleForm}
                />
                <input name="time"
                type="time"
                value={formData.time}
                onChange={HandleForm}
                />
                <input name="date"
                type="date"
                value={formData.date}
                onChange={HandleForm}
                />
                 <input name="note"
                type="text"
                value={formData.note}
                onChange={HandleForm}
                />
                <br/>
                <button onClick={HandleSubmit}>Submit</button>
                <br/>
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Time</th>
                            <th>date</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TableData.map((data,index)=>(
                        <tr>
                            <td>{data.Email}</td>
                            <td>{data.time}</td>
                            <td>{data.date}</td>
                            <td>{data.note}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}