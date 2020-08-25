import React, { useState, useEffect } from 'react'
import io from "socket.io-client";
import { useFetch } from '../hooks';
import CallToActionAlert from '../components/call-to-action/CallToActionAlert';
import { API_URL } from '../util';

const AlertItem = ({ message, onShow, onHide }) => (
    // message: message.cleanContent,
    //     author: message.author.username,
    //     avatar: message.author.avatarURL(),
    //     source: 'discord',
    //     id: message.id,
    //     timestamp: message.createdTimestamp
    <div style={{margin: '20px'}}>
        <CallToActionAlert show={true} message={message.message} username={message.author} avatarUrl={message.avatar} />
        <button onClick={onShow}>Show alert</button>
        <button onClick={onHide}>Hide alert</button>
    </div>
)

const Admin = () => {
    const [alerts, setAlerts] = useState([])
    const { data: result } = useFetch('/alerts')

    useEffect(() => {
        if (result.data) setAlerts(result.data)
    }, [result])

    useEffect(() => {
        const socket = io(API_URL)
        socket.on('newAlert', alert => {
            setAlerts(prev => [...prev, alert])
        })
        return () => socket.close()
    }, [])

    const handleShowAlert = (id) => {
        fetch(`${API_URL}/alerts/show/${id}`)
    }

    const handleHideAlert = (id) => {
        fetch(`${API_URL}/alerts/hide/${id}`)
    }

    return (
        <>
            <span style={{margin: '20px'}}>Copy this link <a href="http://localhost:3000/overlay">http://localhost:3000/overlay</a> to the source browser of your streaming software</span>
            {alerts.map(alert => (
                <AlertItem key={alert.id} message={alert} onShow={() => handleShowAlert(alert.id)} onHide={() => handleHideAlert(alert.id)} />
            ))}
        </>
    );
}

export default Admin
