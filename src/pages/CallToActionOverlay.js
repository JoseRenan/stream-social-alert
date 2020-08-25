import React, { useState, useEffect } from 'react'
import io from "socket.io-client";
import CallToActionAlert from '../components/call-to-action/CallToActionAlert';

const CallToActionOverlay = () => {
    const [question, setQuestion] = useState()
    const [show, setShow] = useState(false)
    useEffect(() => {
        const socket = io('http://localhost:5000/')
        socket.on('alert', question => {
            setShow(false)
            setTimeout(() => {
                setQuestion(question)
                setShow(true)
            }, 1000)
        })
        socket.on('hide', alert => {
            console.log("alouuuu")
            if (question.id === alert.id) {
                setShow(false)
            }  
        })
        return () => socket.close()
    }, [question])
    return (
        <div style={{ height: '100vh', alignContent: 'center'}}>
            <CallToActionAlert show={show} username={question?.author} message={question?.message} avatarUrl={question?.avatar} />
        </div>
    );
}

export default CallToActionOverlay