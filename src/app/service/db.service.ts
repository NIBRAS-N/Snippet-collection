import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc ,getDocs , doc , getDoc} from "firebase/firestore";
import { snippetsField } from '../../models/snippet';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db:any;
  constructor(private authService:AuthService,private router:Router) { 
    
    this.db = getFirestore();
    
  }

  async createSnippet(snippet:snippetsField){

    try {
      const docRef = await addDoc(collection(this.db, "Mysnippet"), {
        ...snippet,
        by: this.authService.getUid()
      });
      console.log("Document written with ID: ", docRef.id);
      this.router.navigate(['/']);  
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("error while creating")
    }
  }

  async getAllSnippets(){
    try{
      const result:any[] = [];
      const querySnapshot = await getDocs(collection(this.db, "Mysnippet"));
      querySnapshot.forEach((doc) => {
        result.unshift({id:doc.id,...doc.data()})
        console.log(`${doc.id} => ${doc.data()}`);
      })
      return result;
    }catch(error){
      console.error("Error adding document: ", error);
      alert("error while reading from database")
      return error;
    }
    
  }

  async getSnippet(docId:string){

    try {
      
      const docRef = doc(this.db, "Mysnippet", docId);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        return {
          id:"",
          title:"not found",
          snippet:"not found"
        }
      }
    
    } catch (error) {
        console.log(error);
        return error;
    }
}

}