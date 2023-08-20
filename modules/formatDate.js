const monthName = ['Jan','Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

const formatDate = (date) => {
    let year = date.substring(0,4)
    let month = monthName[Number(date.substring(5,7))]
    let day = Number(date.substring(8,10))
    date = `${month} ${day}, ${year}`

    return date
}

module.exports = formatDate