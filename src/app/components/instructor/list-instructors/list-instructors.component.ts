import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { TokenService } from "src/app/services/token.service";
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { environment } from '../../../../environments/environment';

import { Router } from "@angular/router";
import io from "socket.io-client";
import * as M from 'materialize-css';


declare var $:any
@Component({
  selector: 'app-list-instructors',
  templateUrl: './list-instructors.component.html',
  styleUrls: ['./list-instructors.component.scss']
})
export class ListInstructorsComponent implements OnInit {
  socket: any;
  instructors = []
  instructor  : any
  pageOfItems: Array<any>;
  search: string;
  instructorToShow = []
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private tokenService:TokenService
  ) {
    this.socket = io(environment.Url);
   }

   onChangePage(pageOfItems) {
    console.log('page of items',pageOfItems)
      // update current page of items
      this.pageOfItems = pageOfItems;
  }

    ngOnInit() {



      this.allInstructors();
      this.socket.on("refreshPage", () => {
      this.allInstructors();
      });


    }


    allInstructors(){
      this.authService.getInstructors().subscribe(data =>{
        console.log(data)
        this.instructors = data.instructors;
        this.instructorToShow = this.instructors;
        console.log('instructors',this.instructorToShow)
      },err =>{
        if(err.error.token===null){
          this.tokenService.DeleteToken();
          this.router.navigate([''])
        }
        })
    }


    openModal(modal){
    $(document).ready(()=>{
      $('.modal').modal();
      $(modal).modal('open');
    });
    }

    openModalDelete(instructor,modal){

      this.openModal(modal)
      this.instructor = instructor;
      console.log(this.instructor)

    }

    deleteInstructor(id){
      console.log(id)
      this.authService.deleteInstructor(id).subscribe(data =>{
      this.socket.emit("refresh", {});
    })

    }





    searchInstructor(){
    this.instructorToShow = this.instructors;
    this.instructorToShow = this.instructorToShow.filter(instructor =>
      instructor.username.toLowerCase().search(this.search) !== -1 || instructor.email.toLowerCase().search(this.search) !== -1
  )

   }

}