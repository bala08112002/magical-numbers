import { Component,ViewChild,ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl:'./app.component.html', 
  styleUrl: './app.component.css'
})

 export class AppComponent  {
  title = 'magicalnumbers';
  numb="";
  result1: string = '';
  result2: string = '';
  tf=false;
  msg!:string;

  @ViewChild ('op1') o1!:ElementRef;

  @ViewChild('op2') o2!: ElementRef;



  //'Coloralert' function is for notification box
  coloralert(message: string) {
    this.msg = message;
    this.tf = true;

    setTimeout(() => {
      this.tf = false;
    }, 1000);
  }

  

  calculate ()
   {
    
    // this.numb=parseInt((document.getElementById("numb") as HTMLInputElement).value);
    // parseInt(document.getElementById("numbe")?.nodeValue);
    console.log(this.numb);
    if (this.numb === '' || isNaN(parseInt(this.numb)) ) {
      this.numb="";
      this.o1.nativeElement.style.display="none";
      this.o1.nativeElement.textContent="";
      this.o2.nativeElement.style.display="none";
      this.o2.nativeElement.textContent=""; 
      this.coloralert("Please Enter the Valid Number!.");
      return;
    }

    const num = parseInt(this.numb);

    let res1: string;
    if (!this.isPrime(num)) {
      res1 = "The Number " + num + " is Not a Prime";
    } else if (this.isSuperPrime(num)) {
      res1 = "The Number " + num + " is Super Prime";
    } else {
      res1 = "The Number " + num + " is Prime";
    }

    let res2: string | undefined;
    if (this.isOdd(num)) {
      res2 = this.superOdd(num);
    } else if (this.isEven(num)) {
      res2 = this.superEven(num);
    } else {
      res2 = undefined;
    }

    this.result1 = res1;

    if (res2 !== undefined) {
      this.result2 = res2;
    } else {
      this.result2 = "";
    }

    console.log(this.result1);
    console.log(this.result2);

 
     
     
      this.o1.nativeElement.style.display="table-cell";
      this.o1.nativeElement.textContent=this.result1;  
     
      this.o2.nativeElement.style.display="table-cell";
      this.o2.nativeElement.textContent=this.result2;  


  }


  isPrime(n: number): boolean {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  isSuperPrime(n: number): boolean {
    if (!this.isPrime(n)) {
      return false;
    }

    let s = 0;
    let t = n;
    while (t > 0) {
      s += (t % 10);
      t = Math.floor(t / 10);
    }
    return this.isPrime(s);
  }

  isOdd(n: number): boolean {
    return n % 2 !== 0;
  }

  isEven(n: number): boolean {
    return n % 2 === 0;
  }

  superOdd(n: number): string {
    let s = 0;
    let t = n;
    while (t > 0) {
      s += (t % 10);
      t = Math.floor(t / 10);
    }
    if (this.isOdd(s)) {
      return "The Number " + n + " is Super ODD";
    } else {
      return "The Number " + n + " is ODD";
    }
  }

  superEven(n: number): string {
    let s = 0;
    let t = n;
    while (t > 0) {
      s += (t % 10);
      t = Math.floor(t / 10);
    }
    if (this.isEven(s)) {
      return "The Number " + n + " is Super EVEN";
    } else {
      return "The Number " + n + "   is EVEN";
    }
  }

}
