String.prototype.filterWords=function(bannedWords)
{
    var filtered=this;
    for(let bannedWord of bannedWords)
    {
        filtered=filtered.replace(bannedWord,'***');
    };
    return filtered;
    
};
console.log("This house is nice".filterWords(['house','nice']));