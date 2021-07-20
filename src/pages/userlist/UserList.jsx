import {DataGrid} from '@material-ui/data-grid'
import {DeleteOutline} from "@material-ui/icons"
import Avatar from "../../images/avatar.png";
import {userListRows} from "../../dummyData"
import {Link} from "react-router-dom"
import {useState} from "react"

import "./userlist.css"

export default function UserList() {
    const [data, setData] = useState(userListRows);
    
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }


const userListColumns =[
    {field: "id", headerName: "ID", width: 70},
    {field: "user", headerName: "User", width: 200, renderCell: (params) => {
        return (
            <div className="userListUser">
                <img src={Avatar} alt="" className="userListImage" />
                {params.row.username}
            </div>
        )
    }},
    {field: "email", headerName: "Email", width: 200},
    {field: "status", headerName: "Status", width: 120},
    {field: "transaction", headerName: "Transaction", width: 150},
    {field: "action", headerName: "Action", width: 150, renderCell: (params) => {
        return (
            <>
            <Link to= {`/user/${params.row.id}`}>
            <button className="userListEdit">Edit</button>
            </Link>
                
                <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
            </>
        );
    }
}
];

    return (
        <div className="userList">
            <DataGrid rows={data} disableSelectionOnClick columns={userListColumns} pageSize={8} checkboxSelection />
        </div>
    )
}
