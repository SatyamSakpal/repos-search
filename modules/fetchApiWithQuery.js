const colorCordinate = require("./colorCordinate")
const formatCompactNumber = require("./formatCompactNumber")
const formatDate = require("./formatDate")


const fetchApiWithQuery = async(q) => {
    try {
        const response = await fetch(`https://api.github.com/search/repositories?q=${q}`)
        const result = await response.json()
        const items = result.items


        let finalResult = []
        for(let i = 0 ; i < items.length; i++) {
 
            let modifyObj = {
                avatar_url: items[i].owner.avatar_url,
                html_url: items[i].html_url,
                full_name: items[i].full_name,
                description: items[i].description,
                topics: items[i].topics,
                language: items[i].language,
                stars: formatCompactNumber(items[i].stargazers_count),
                stars_url: items[i].stargazers_url.replace('api.','').replace('/repos',''),
                forks: formatCompactNumber(items[i].forks_count),
                forks_url: items[i].forks_url.replace('api.','').replace('/repos',''),
                updated_at: formatDate(items[i].updated_at),
                color: colorCordinate(items[i].language),
                owner_url: items[i].owner.html_url,
            }
            finalResult.push(modifyObj)
        }

        return finalResult

    } catch (err) {
        console.log(err)
        return err
    }
    
}

module.exports = fetchApiWithQuery



