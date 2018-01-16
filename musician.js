function Musician(name)
{
    this.name=name;
}
Musician.prototype.play=function(piece)
{
    console.log(`${this.name} is playing ${piece}`);
};
var violinist=new Musician("Violinist");
var pianist=new Musician("Pianist");
violinist.play("jingle bell");
pianist.play("Christmas song");

