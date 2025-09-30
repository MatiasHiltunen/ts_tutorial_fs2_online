import {writeFile} from 'fs/promises'

const imageUrl = "https://www.visitrovaniemi.fi/wp-content/uploads/Summer-and-midnight-sun-in-Rovaniemi-Lapland-Finland-7-800x450.jpg"

const allowedMimetypes = ['image/jpeg', 'image/png']

async function getImageFromUrl() {
    
    const response = await fetch(imageUrl)
    
    const data = await response.blob()

    if(!allowedMimetypes.includes(data.type)){
        throw new Error("Not allowed mimetype")
    }
    
    return data

    //await writeFile('test.jpg', data.stream())

}

getImageFromUrl()