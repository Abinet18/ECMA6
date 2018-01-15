function musician(name)
{
    this.name=name;
}
musician.prototype.play=function(piece)
{
    console.log(`${this.name} is playing ${piece}`);
};
var violinist=new musician("Violinist");
var pianist=new musician("Pianist");
violinist.play("jingle bell");
pianist.play("Christmas song");

