import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import jwtDecode from 'jwt-decode'

const S = () => {
    const [user, setUser] = useState('')


    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if (token) {
            const auth = jwtDecode(token)
            if (!auth) {
                window.localStorage.removeItem('token')
                alert('Vui Lòng Đăng Nhập !!!')
                window.location.href = '/login'
            } else {
                setUser(auth.name)
            }

        } else {
            alert('Vui Lòng Đăng Nhập !!!')
            window.location.href = '/login'
        }


    }, [])

    const handleLogout = () => {
        window.confirm('Đăng Xuất Khỏi Trái Đất !!!')
        window.localStorage.removeItem('token')
        window.location.href = '/login'
    }


    return (
        <div className='full'>
            <div className="container">
                <div className="row gy-5 justify-content-center py-5 headT ">
                    <div className="col-md-7 shadow p-3 mb-5 bg-white rounded">
                        <div className="card border border-success border-radius">
                            <div className="card-header text-center m-3 h2 fw-bold">DASHBOARD</div>
                            <div className="card-body p-5">
                                <h1 className='text-center py-5'>Hello {user}</h1>
                            </div>
                            <button className='btn btn-outline' onClick={handleLogout}>Đăng Xuất</button>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}

export default S