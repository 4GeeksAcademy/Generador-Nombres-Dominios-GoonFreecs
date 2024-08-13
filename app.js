let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let domains = [];

for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
        for (let c = 0; c < noun.length; c++) {
            let domain = pronoun[a] + adj[b] + noun[c] + ".com";
            domains.push(domain);
        }
    }
}

for (let i = 0; i < domains.length; i++) {
    console.log(domains[i]);
}

