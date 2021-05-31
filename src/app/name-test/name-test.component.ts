import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-test',
  templateUrl: './name-test.component.html',
  styleUrls: ['./name-test.component.css']
})
export class NameTestComponent implements OnInit {

  strengths: string[];
  weaknesses: string[];
  s: string[];
  w: string[];
  nameStatus: boolean;
  myName: string;
  counter: number = 0;
  op: string = "Please Enter Your Name."
  constructor() {
    this.nameStatus = false
    this.myName="null"
          this.strengths = [
      "Very creative","Open to trying new things",
      "Focused on tackling new challenges",
      "Happy to think about abstract concepts",
      "Spends time preparing",
      "Finishes important tasks right away",
      "Pays attention to detail",
      "Enjoys having a set schedule",
      "Enjoys being the center of attention",
      "Likes to start conversations",
      "Enjoys meeting new people",
      "Has a wide social circle of friends and acquaintances",
      "Finds it easy to make new friends",
      "Feels energized when around other people",
      "Say things before thinking about them",
      "Has a great deal of interest in other people",
      "Cares about others",
      "Feels empathy and concern for other people",
      "Enjoys helping and contributing to the happiness of other people",
      "Assists others who are in need of help",
      "Prefers solitude",
      "Carefully thinks things through before speaking",
      "Dislikes being the center of attention",
      "Emotionally stable",
      "Deals well with stress",
      "Rarely feels sad or depressed",
      "Doesn't worry much",
      "Is very relaxed"
    ]
    this.weaknesses = [
      "Dislikes change",
      "Does not enjoy new things",
      "Experiences a lot of stress",
      "Worries about many different things",
      "Gets upset easily",
      "Experiences dramatic shifts in mood",
      "Feels anxious",
      "Struggles to bounce back after stressful events",
      "Resists new ideas",
      "Not very imaginative",
      "Dislikes structure and schedules",
      "Makes messes and doesn't take care of things",
      "Fails to return things or put them back where they belong",
      "Procrastinates important tasks",
      "Fails to complete necessary or assigned tasks",
      "Dislikes abstract or theoretical concepts",
      "Feels exhausted when having to socialize a lot",
      "Takes little interest in others",
      "Doesn't care about how other people feel",
      "Has little interest in other people's problems",
      "Insults and belittles others",
      "Manipulates others to get what they want",
      "Finds it difficult to start conversations",
      "Dislikes making small talk"
    ]

    this.s = []
    this.w = []
  }

  ngOnInit(): void {
  }
  
  getData(nameData: string) {
    if (this.counter === 0) {
      
    this.myName = nameData
      if (this.myName) {
      this.counter = 1
      this.myName = "Hello! " + nameData + "   Here are some of your STRENGTHS and WEAKNESSES."
      this.nameStatus = true
      this.s = []
      this.w = []
      for (let i = 0; i < 5; i++) {
        this.s.push(this.strengths[Math.floor(Math.random() * 24)])
        this.w.push(this.weaknesses[Math.floor(Math.random() * 24)])
          ;
      }
    }
    
    else {
      this.s = []
      this.w = []
      this.myName = "Please Enter Your Name."
      this.nameStatus = true
    }
    }
     else {
      this.myName = "The result cannot be changed."
      this.nameStatus = true
    }
  }

}
