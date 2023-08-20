const selectLang = document.getElementById("select-lang")
const searchPara = document.querySelectorAll('.search-para')
const selectSorting = document.getElementById('sort-by')
const searchBtn = document.querySelector('.submit')
const resultView = document.querySelector('.inner-result-body')
const loadingToast = document.querySelector('.loading-toast')
const resultBody = document.querySelector('.result-body')
let queryRules = []
let resultRepos =[] 

searchBtn.addEventListener('click', () => {
    queryRules.push(selectLang.options[selectLang.selectedIndex].getAttribute('value'))
    searchPara.forEach((e) => {
        queryRules.push(e.value)
    })
    queryRules.push(selectSorting.options[selectSorting.selectedIndex].getAttribute('value'))

    fetchResult(queryRules)
    queryRules=[]
})

selectSorting.onchange = () => {
    searchBtn.click()
}

const fetchResult = async(queryRules) => {
    loadingToast.style.display = 'block'
    const response = await fetch(`/repos-query/${JSON.stringify(queryRules)}`)
    loadingToast.style.display = 'none'
    const result = await response.json()
    console.log(result)
    viewRepos(result)
}    


const viewRepos = (resultRepos) => {
    let viewString =``

    if(Object.keys(resultRepos).length === 0) {
        resultView.innerHTML = `
        <div class="no-result">
            <div class="no-result-png">
                <img src="exclamation-mark-PhotoRoom.png-PhotoRoom.png" alt="">
            </div>
            <div class="no-result-msg">
                <div class="no-result-msg-1">
                    <span>Your search did not match any code</span>
                </div>
                <div class="no-result-msg-2">
                    <span>You can try again.</span>
                </div>
            </div>
        </div>
        `
    }

    for(let j=0; j<resultRepos.length; j++) {
        let topicString =``

        if(resultRepos[j].topics) {
            resultRepos[j].topics
            for(let i=0; i<resultRepos[j].topics.length; i++) {
                topicString += `
                    <a href="https://github.com/topics/${resultRepos[j].topics[i]}"><div class="topic">${resultRepos[j].topics[i]}</div></a>
                `
            }
        }
        


        viewString += `
            <div class="card">
            <div class="card-head">
                <div>
                    <div class="profile-pic"><a href="${resultRepos[j].owner_url}"><img src="${resultRepos[j].avatar_url}" alt="profile-pic"></a></div>
                </div>
                <div class="full-name-wrap">
                    <span class="full-name"><a href="${resultRepos[j].html_url}">${resultRepos[j].full_name}</a></span>
                </div>
            </div>
            <div class="card-body">
                <div class="description-wrap">
                    <span class="description">${resultRepos[j].description}</span>
                </div>
            </div>
            <div class="card-upper-footer">
                ${topicString}
            </div>
            <div class="card-footer">
                <div class="lang-color" style="background-color:${resultRepos[j].color}">
                    
                </div>
                <div class="language-wrap">
                    <span class="language">${resultRepos[j].language}</span>
                </div>
                <div class="divider">
                    <span>.</span>
                </div>
                <div class="stars-wrap">
                    <div class="star-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="star-shape"><path fill="#7d8590" d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68a1,1,0,0,0,.4,1,1,1,0,0,0,1.05.07L12,18.76l5.1,2.68a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a1,1,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"></path></svg>
                    </div>
                    <div>
                        <a href="${resultRepos[j].stars_url}"><span class="stars">${resultRepos[j].stars}</span></a>
                    </div>
                </div>
                <div class="divider">
                    <span>.</span>
                </div>
                <div class="forks-wrap">
                    <div class="fork-logo">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <g>
                                <path fill="#7d8590" d="M458.7,81.1L458.7,81.1c0-44.8-36.3-81.1-81.1-81.1c-44.8,0-81.1,36.3-81.1,81.1c0,40.3,29.3,73.7,67.8,80l0.5,0.1v37.3
                                    c0,28.3-22.9,51.2-51.2,51.2H151.5v-89.3c36.8-8.1,64-40.5,64-79.3c0-44.8-36.3-81.1-81.1-81.1C89.6,0,53.3,36.3,53.3,81.1
                                    c0,38.7,27.2,71.1,63.5,79.1l0.5,0.1v191.4c-36.8,8.1-64,40.5-64,79.3c0,44.8,36.3,81.1,81.1,81.1c44.8,0,81.1-36.3,81.1-81.1
                                    c0-38.7-27.1-71.1-63.5-79.1l-0.6-0.1v-67.9h162.1c47.1-0.1,85.3-38.2,85.3-85.3v-39.1C433.6,149.5,458.6,118.3,458.7,81.1
                                    L458.7,81.1z M87.5,81.1c0-25.9,21-46.9,46.9-46.9c25.9,0,46.9,21,46.9,46.9c0,25.9-21,46.9-46.9,46.9
                                    C108.5,128,87.5,107,87.5,81.1L87.5,81.1z M181.3,430.9c0,25.9-21,46.9-47,46.9c-25.9,0-46.9-21-46.9-46.9
                                    c0-25.9,21-46.9,46.9-46.9C160.3,384,181.3,405,181.3,430.9L181.3,430.9z M377.6,128c-25.9,0-47-21-47-46.9s21-46.9,47-46.9
                                    c25.9,0,46.9,21,46.9,46.9C424.5,107,403.5,128,377.6,128L377.6,128z"/>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <a href="${resultRepos[j].forks_url}"><span class="forks">${resultRepos[j].forks}</span></a>
                    </div>
                </div>
                <div class="divider">
                    <span>.</span>
                </div>
                <div class="updated-on-wrap">
                    <div>
                        <span>Updated on ${resultRepos[j].updated_at}</span>
                    </div>
                </div>
            </div>
        </div>
            
        `

        resultView.innerHTML = viewString
        resultBody.scrollTop = 0
    }
     
}




document.addEventListener('keydown', (event)=> {
    if(event.key === 'Enter') {
        searchBtn.click()  
    }
})