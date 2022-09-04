import { LogOutButton } from '../app';
import { ISignUp } from '../../core';
import { EditButton } from './view';
import './user.css';

export abstract class UserView {
  public static getUserImage(user: ISignUp) {
    return `
        <div class="user-wrapper">
            <p class="user-title"><span class="title-name">${user.name}</span> welcome to RS Lang</p>
            <div class="user-body">
                <div class="user-name">
                    <div class="name-title">Name:</div>
                    <div class="name-text">${user.name}</div> 
                </div>
                <div class="user-hr"></div>
               <div class="user-email">
                    <div class="email-title">Email:</div>
                    <div class="email-text">${user.email}</div> 
                </div>
                <div class="user-hr"></div>
            </div>      
            <div class="user-buttons">
                <div>${EditButton.getEditButtonImage()}</div>
                <div>${LogOutButton.getLogOutButtonImage()}</div>
            </div>
        </div>
        `;
  }
}
