import { Routes } from '@angular/router';
import { HomeComponent} from './home/home.component'
import { NoteComponent } from './note/note.component'
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { MyNotesComponent } from './my-notes/my-notes.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Home | App Name"
    },
    {
        path: "notes/:id",
        component: NoteComponent,
        title: "Note | App Name"
    },
    {
        path: "signup",
        component: SignupComponent,
        title: "Signup | App Name"
    },
    {
        path: "login",
        component: LoginComponent,
        title: "Login | App Name"
    },
    {
        path: "addNote",
        component: AddNoteComponent,
        title: "Add Note | App Name"
    },
    {
        path: "myNotes",
        component: MyNotesComponent,
        title: "Notes | Username"
    }
];
