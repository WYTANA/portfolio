import React from 'react'
import { FaGithub, FaHandPointRight } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

export default function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-left">
                Travis L Orback
                <span><FaHandPointRight className="Hand" /></span>
                <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2022
            </div>
            <a href="https://github.com/WYTANA" target="_blank" rel="noreferrer"><FaGithub className="Github" /></a>
            <a href="https://twitter.com/tlorback" target="_blank" rel="noreferrer"><FaTwitter className="Twitter" /></a>
            <a href="https://discord.gg/vhbWMRVF" target="_blank" rel="noreferrer"><FaDiscord className="Discord" /></a>
            <a href="https://t.me/+3B82G6dyW2djYzYx" target="_blank" rel="noreferrer"><FaTelegram className="Telegram" /></a>
            <a href="https://www.linkedin.com/in/travislorback/" target="_blank" rel="noreferrer"><FaLinkedin className="Linkedin" /></a>
        </div>
    )
}
