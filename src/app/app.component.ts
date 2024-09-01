import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import * as signalR from '@microsoft/signalr'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  hub:signalR.HubConnection | undefined
  ngOnInit(): void {
    console.log("Hello")
  }
  constructor(){
    //this.Connection()
  }
  title = 'Demo';
  Connection(){
    this.hub=new signalR.HubConnectionBuilder().withUrl("https://localhost:7184/chat-hub").build()
    this.hub?.start().then(()=>{
      console.log("Connection is started...");
      this.title="Connection"
    })
  }
}
