// Replacement function from: http://stackoverflow.com/a/17606289/1687505
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

var replacement_array = {
	// xkcd 1288 https://xkcd.com/1288/
	"Witnesses"     :"These Dudes I Know",
	"witnesses"     :"these dudes I know",
	"Allegedly"     :"Kinda Probably",
	"allegedly"     :"kinda probably",
	"New Study"     :"Tumblr Post",
	"new study"     :"tumblr post",
	"Rebuild"       :"Avenge",
	"rebuild"       :"avenge",
	"Space"         :"Spaaace",
	"space"         :"spaaace",
	"Google Glass"  :"Virtual Boy",
	"google glass"  :"virtual boy",
	"Smartphone"    :"Pokédex",
	"smartphone"    :"pokédex",
	"Electric"      :"Atomic",
	"electric"      :"atomic",
	"Senator"       :"Elf-Lord",
	"Car"           :"Cat",
	"car"           :"cat",
	"Election"      :"Eating Contest",
	"election"      :"eating contest",

	//Alright, these ones are super long
	"Congressional Leaders":"River Spirits",
	"Congressional leaders":"River Spirits",
	"Homeland Security":"Homestar Runner",
	"could not be reached for comment":"is guilty and everyone knows it.",

	// xkcd 1625 (Yea I got lazy with the spacing.)
	"Debate":"Dance-Off",
	"debate":"dance-off",
	"Self-Driving":"Uncontrollably Swerving",
	"Self Driving":"Uncontrollably Swerving",
	"self-driving":"uncontrollably swerving",
	"self driving":"uncontrollably swerving",
	"Poll":"Psychic Reading",
	"poll":"psychic reading",
	"Candidate":"Airbender",
	"candidate":"airbender",
	"Drone":"Dog",
	"drone":"dog",
	"Vows To":"Probably Won't",
	"Vows to":"Probably won't",
	"vows to":"probably won't",
	"At Large":"Very Large",
	"At large":"Very large",
	"at large":"very large",
	"Successfully":"Suddenly",
	"successfully":"suddenly",
	"Expands":"Physically Expands",
	"expands":"physically expands",

	"First-Degree":"Friggin' Awful",
	"First-degree":"Friggin' awful",
	"first-degree":"friggin' awful",
	"1st-degree":"friggin' awful",
	"Second-Degree":"Friggin' Awful",
	"Second-degree":"Friggin' awful",
	"second-degree":"friggin' awful",
	"2nd-degree":"friggin' awful",
	"Third-Degree":"Friggin' Awful",
	"Third-degree":"Friggin' awful",
	"third-degree":"friggin' awful",
	"3rd-degree":"friggin' awful",

	"An unknown number":"Like hundreds",
	"an unknown number":"like hundreds",
	"Front Runner":"Blade Runner",
	"Front runner":"Blade runner",
	"front runner":"blade runner",
	"Global":"Spherical",
	"global":"spherical",

	//The following lines are awful but avoids forcing everything to years.
	"Year":"To_M",
	"year":"To_m",
	"Minute":"To_Y",
	"minute":"To_y",
	"To_M":"Minute",
	"To_m":"minute",
	"To_Y":"Year",
	"To_y":"year",

	"No Indication":"Lots of Signs",
	"No indication":"Lots of signs",
	"no indication":"lots of signs",
	"Urged Restraint By":"Drunkenly Egged On",
	"Urged restraint by":"Drunkenly egged on",
	"urged restraint by":"drunkenly egged on",
	"Horsepower":"Tons of Horsemeat",
	"horsepower":"tons of horsemeat",

	// xkcd 1679
	"Gaffe":"Magic Spell",
	"gaffe":"magic spell",
	"Ancient":"Haunted",
	"ancient":"haunted",
	"Star-Studded":"Blood-Soaked",
	"Star-studded":"Blood-soaked",
	"star-studded":"blood-soaked",
	"Remains To Be Seen":"Will Never be Known",
	"Remains to be seen":"Will never be known",
	"remains to be seen":"will never be known",
	"Silver Bullet":"Way to Kill Werewolves",
	"Silver bullet":"Way to kill werewolves",
	"silver bullet":"way to kill werewolves",
	"Subway System":"Tunnels I Found",
	"Subway system":"Tunnels I found",
	"subway system":"tunnels I found",
	"Suprising":"Suprising (But not to me)",
	"suprising":"suprising (but not to me)",
	"War Of Words":"Interplanetary War",
	"War of Words":"Interplanetary War",
	"War of words":"Interplanetary war",
	"war of words":"Interplanetary war",
	" Tension":"Sexual Tension",
	" tension":"sexual tension",
	"Cautiously Optimistic":"Delusional",
	"Cautiously optimistic":"Delusional",
	"cautiously optimistic":"delusional",
	//Leaving capitalized because 'The doctor who' can be a phrase
	"Doctor Who":"The Big Bang Theory",
	"Win Votes":"Find Pokémon",
	"Win votes":"Find pokémon",
	"win votes":"find pokémon",
	"Behind The Headlines":"Beyond The Grave",
	"Behind the Headlines":"Beyond the Grave",
	"Behind the headlines":"Beyond the grave",
	"behind the headlines":"beyond the grave",
	"Email":"Poem",
	"email":"poem",
	"Facebook Post":"Poem",
	"Facebook post":"Poem",
	"facebook post":"poem",
	"Tweet":"Poem",
	"tweet":"poem",
	"Facebook CEO":"This Guy",
	"Latest":"Final",
	"latest":"final",
	"Disrupt":"Destroy",
	"disrupt":"destroy",
	"Meeting":"Ménage à Troi",
	"meeting":"ménage à troi",
	"Scientists":"Channing Tatum and his Friends",
	"scientists":"Channing Tatum and his friends",
	"You Won't Believe":"I'm Really Sad About",
	"You won't believe":"I'm really sad about"

	//Wow. That's a lot of words. I really hope I don't have to type more!
};

//Below function modified from: http://stackoverflow.com/a/7275856/1687505
var allTextNodes = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),tmpnode,tmptext;

while (allTextNodes.nextNode()) {
	tmpnode = allTextNodes.currentNode;
	tmptext = tmpnode.nodeValue
	for (var key in replacement_array) {
		tmptext = tmptext.replaceAll(key,replacement_array[key]);
	}
	tmpnode.nodeValue = tmptext;
}