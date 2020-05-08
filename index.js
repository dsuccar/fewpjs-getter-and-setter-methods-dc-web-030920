class Circle{
  constructor(radius){
    this.radius =radius
  }

  get diameter(){
    return 2 * this.radius
  }
  set diameter( diameter ) {
    this.radius = diameter / 2
  }


  get circumference(){
   return 2 * Math.PI * this.radius
  }

  set circumference( circumference ) {
    this.radius = circumference / ( Math.PI * 2 )
  }

  get area(){
   return Math.PI * (this.radius ** 2)
  }
// get diamater() {
//   set area( area ) {
//     this.radius = Math.sqrt( area / pi )
//   }
// // }

}