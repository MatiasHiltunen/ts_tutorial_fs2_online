import {writeFile} from 'fs/promises'


const allowedMimetypes = ['image/jpeg', 'image/png']

async function getImageFromUrl(url:URL) {
    
    const response = await fetch(url)
    
    const data = await response.blob()

    if(!allowedMimetypes.includes(data.type)){
        throw new Error("Not allowed mimetype")
    }
    
    return data

    
}

async function writeImage(imageName:string, imageData: Blob) {
    
    await writeFile(imageName, imageData.stream(), {
        flush: true,

    })
}

async function init() {

    //const imageUrl = new URL("https://www.visitrovaniemi.fi/wp-content/uploads/Summer-and-midnight-sun-in-Rovaniemi-Lapland-Finland-7-800x450.jpg")
    const imageUrl = new URL("https://www.visitrovaniemi.fi/wp-content/uploads/Santa-Claus-Village-in-Rovaniemi-Lapland-Finland-photo-by-Tommi-Lappalainen-SantaTV.jpg")


    const imageName = imageUrl.pathname.split('/').at(-1) ?? imageUrl.pathname

    const imageData = await getImageFromUrl(new URL(imageUrl))


    await writeImage(imageName, imageData)



}

init()