const querryString = require('../modules/querryString')
const fetchApiWithQuery = require('../modules/fetchApiWithQuery')

const queryControler =  (req, res)=> {
    
    const queryRules =JSON.parse(req.params.query_rules) 

    const query = querryString(queryRules)

    fetchApiWithQuery(query)
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = queryControler



//lang,daterange,sort,quantity