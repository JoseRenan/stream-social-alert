import React from 'react'
import './CallToActionAlert.css'

const CallToActionAlert = ({ show = false, username = "joserenan", avatarUrl = "https://cdn.discordapp.com/avatars/304774649626230784/67b8c37e1fefd5523d4264817c1c37de.webp", message = "Posso ser mentor e aprendiz ao mesmo tempo? Posso ser mentor e aprendiz ao mesmo tempo? Posso ser mentor e aprendiz ao mesmo tempo? Posso ser mentor e aprendiz ao mesmo tempo? Posso ser mentor e aprendiz ao mesmo tempo?" }) => (
    <div style={{display: 'flex', height: '110px' }}>
        <div className={`${show ? 'cta_appear-opacity' : 'cta_hideable-opacity'}`} style={{position: 'relative'}}>
            <img src={avatarUrl} alt="Avatar" className="cta_image" />
            <div className="cta_social-logo">
                <img alt="discord logo" src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-512.png" width="36" />
            </div>
        </div>
        <div className="cta_content-bars">
            <div className={`cta_username ${show ? 'cta_appear-width' : 'cta_hideable-width'}`}>
                <span className={show ? 'cta_appear-font' : 'cta_hideable-font'}>@{username}</span>
            </div>
            <div className={`cta_message ${show ? 'cta_appear-width' : 'cta_hideable-width'}`}>
                <span className={show ? 'cta_appear-font' : 'cta_hideable-font'}>{message}</span>
            </div>
        </div>
    </div>
)

export default CallToActionAlert