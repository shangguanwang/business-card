import React from 'react';


export default function Header() {
    return (<header>
    <img src={require("./profile-picture.jpeg")} class="profile-img" alt="headshot" width="200px"/>
    <h1 class="h1-name">Shangguan Wang</h1>
    <p class="short-description">Aspiring Frontend Developer</p>
    <a href="mailto:wangshangguan@hotmail.com" target="_blank">
        <button class="email-button">
        <i class="fas fa-envelope"></i> Email
        </button>
    </a>
    </header>)
}


