const statusRef = document.querySelector('.status')

const videoRef = document.querySelector('.video')

function getSubsStatus () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("VIP")
        }, 2000);
    })
}


function getVideo () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("VIP")
        }, 2000);
    })
}



function getVideo(subscriptionstatus) {
    return new Promise((resolve, reject) => {

        if (subscriptionstatus === 'VIP') {
            resolve('show video')
        }
        else if (subscriptionstatus === 'FREE') {
            resolve('show trailer')
        } else  {
            reject('no video')
        }
    })
}

async function main() {
    const status = await getSubsStatus();
    statusRef.innerHTML = status;
    console.log(await getVideo(status))
}

main()