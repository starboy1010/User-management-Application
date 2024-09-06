import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import loadingGif from '../loading.gif';

export default function Read() {
    const [apiData, setApiData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://66da1b734ad2f6b8ed57008c.mockapi.io/crud`)
            .then((getData) => {
                setApiData(getData.data);
                setIsLoading(false);
            })
    }, [])

    const setData = (id, firstName, lastName,email) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
        localStorage.setItem('email', email)
    }

    const getData = () => {
        axios.get(`https://66da1b734ad2f6b8ed57008c.mockapi.io/crud`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://66da1b734ad2f6b8ed57008c.mockapi.io/crud/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            {isLoading ? (
                <img src={loadingGif} alt="Loading..." />
            ) : (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button
                                            color="green"
                                            onClick={() => setData(data.id, data.firstName, data.lastName,data.email)}>
                                            Update
                                        </Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        )}
        </div>
    )
}