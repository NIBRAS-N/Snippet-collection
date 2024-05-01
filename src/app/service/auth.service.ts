import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut , onAuthStateChanged  } from "firebase/auth";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private uid?:string;
  constructor(private router:Router) { 
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        this.uid=user.uid
        alert(user.email+' logged in');
      } else {
        this.uid = undefined;
        alert("User logged out");
        console.log("User logged Out");
        // User is signed out
        // ...
      }
    });
  }

  registerUser(email:string,password:string){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log({user});
        this.router.navigate(["/"]);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorMessage);
    });
  }

  loginUSer(email:string,password:string){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log({user});
        this.router.navigate(["/"]);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorMessage);
      });
    }

    logout(){
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        alert("logout done");
        console.log("logout done");
      }).catch((error) => {
        // An error happened.
        alert("something went wrong during logout");
        console.log("logout || ",error);
      });

    }

    isAuthenticated(){
      return this.uid ? true:false;
    }

    getUid(){
      return this.uid;
    }
}
