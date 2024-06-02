import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, Outlet } from 'react-router-dom';

function Root() {
    const [data, setData] = useState(null);

    useEffect(() => {
        Axios.get("http://localhost:3000/api/users-with-rents")
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.log('Error fetching data: ', err);
            });
    }, []);

    const styles = {
        container: {
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        nav: {
            fontSize: "18px",
            backgroundColor: "#000000",
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            textAlign: "center",
            listStyle: "none",
        },
        items: {
            textAlign: "center",
            padding: "25px 20px",
        },
        link: {
            // color: "#ffffff",
            textDecoration: "none",
            fontWeight: "bold"
        },
        table: {
            width: "80%",
            margin: "20px auto",
            borderCollapse: "collapse",
        },
        th: {
            border: "1px solid #ddd",
            padding: "8px",
            textAlign: "center",
            fontSize: "18px"
        },
        td: {
            border: "1px solid #ddd",
            padding: "8px",
            textAlign: "center",
            verticalAlign: "middle",
        },
        thead: {
            backgroundColor: "#f2f2f2",
        },
    };

    return (
        <div className='table-container' style={styles.container}>
            <nav style={styles.nav}>
                        <li style={styles.items}><Link style={styles.link} to={`/add-user`}>Add User</Link></li>
                        <li style={styles.items}><Link style={styles.link} to={`/rent-calculation`}>Calculate Rent</Link></li>

            </nav>
            <h2>User details are below</h2>
            <table style={styles.table}>
                <thead style={styles.thead}>
                    <tr>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item) => (
                        <tr key={item.id}>
                            <td style={styles.td}>
                                <Link style={styles.link} state={{ item }} to={`/userdetails/${item.name}`}>{item.name}</Link>
                            </td>
                            <td style={styles.td}>{item.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Outlet />
        </div>
    );
}

export default Root;
