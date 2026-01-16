import {propertyForSaleArr} from './properties/propertyFolSaleArr.js'
import {placeholderPropertyObj} from './properties/placeholderPropertyObj.js'

function getPropertyHtml() {
    const htmlStrings = propertyForSaleArr.map(({propertyLocation, priceGBP, comment, roomsM2, image}) => {
        return `
            <section class="card">
            <img src="/images/${image}">
                <div class="card-right">
                <h2>${propertyLocation}</h2>
                <h3>${priceGBP}</h3>
                <p>${comment}</p>
                <h3>${getTotalSize(roomsM2)}</h3>
            </div>
            </section>
        `
    })
        const elseHtmlStrings = placeholderPropertyObj.map(({propertyLocation, priceGBP, comment, roomsM2, image}) => {
           return `
            <section class="card">
            <img src="/images/${image}">
                <div class="card-right">
                <h2>${propertyLocation}</h2>
                <h3>${priceGBP}</h3>
                <p>${comment}</p>
                <h3>${getTotalSize(roomsM2)}</h3>
            </div>
            </section>
        ` 
        })
}

function getTotalSize(meter){
    return meter.reduce((acc, curr) => {
        return acc + curr
    },0)
}

document.getElementById('container').innerHTML = getPropertyHtml()
