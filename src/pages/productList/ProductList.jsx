import {DataGrid} from '@material-ui/data-grid'
import {useState} from "react";
import { productListRows } from "../../dummyData";
import {DeleteOutline} from "@material-ui/icons";
import {Link} from "react-router-dom";
import Avatar from "../../images/avatar.png"
import "./productlist.css"
export default function ProductList() {
    const [data, setData] = useState(productListRows);
    
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }


const productListColumns =[
    {field: "id", headerName: "ID", width: 70},
    {field: "product", headerName: "Product", width: 200, renderCell: (params) => {
        return (
            <div className="userListUser">
                <img src={Avatar} alt="" className="userListImage" />
                {params.row.productName}
            </div>
        )
    }},
    {field: "price", headerName: "Price", width: 200},
    {field: "desc", headerName: "Description", width: 200},
    {field: "action", headerName: "Action", width: 150, renderCell: (params) => {
        return (
            <>
            <Link to= {`/product/${params.row.id}`}>
            <button className="userListEdit">Edit</button>
            </Link>
                
                <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
            </>
        );
    }
}
];
    return (
        <div className="productList">
            <DataGrid rows={data} disableSelectionOnClick columns={productListColumns} pageSize={8} checkboxSelection />
        </div>
    )
}
