import './userList.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutlined } from '@material-ui/icons'
import { userRows } from '../../dummyData'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function UserList() {
    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 96 },
        {
            field: 'user', headerName: 'User', width: 220, renderCell: (params) => {
                return (
                    <div className='userListUser'>
                        <img className='userListImg' alt='' src={params.row.avatar} />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 220 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction', headerName: 'Transaction', width: 160 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to={'/user/' + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlined className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },

    ];



    return (
        <div className='userList'>
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </div>
    )
}

export default UserList
