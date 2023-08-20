const querryParam = ['lang','created','stars','forks','size','updated','comments','sort']

const querryString = (queryRules) => {
    let q = ''
    for(let i = 0; i<queryRules.length; i++) {
        if(queryRules[i]) {
            q = appendQuery(q , `${querryParam[i]}:${queryRules[i]}`)
       }
    }
    
    return q    
}


const appendQuery = (q, rule) => {
    if(!q) {
        q = rule
    }else {
        q += `+${rule}`
    }
    return q
}

module.exports = querryString


