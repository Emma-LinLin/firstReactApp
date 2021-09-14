import React from 'react'
import {useContext} from 'react'
import {UserContext} from '../../shared/provider/UserProvider'
import {ProfileDropDown} from './profiledropdown/ProfileDropDown'
import "./Profile.css"

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    return (
        <div className="profile">
            <img className="profile__image"
            src="https://thispersondoesnotexist.com/image"
            alt="randomly generated face"/>
            <span>{authenticatedUser}</span>
            <ProfileDropDown/>
        </div>
    )
}
