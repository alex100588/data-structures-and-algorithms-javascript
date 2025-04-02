const nemo = ["alex", 'nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'bloat', 'nigel', 'squirt', 'darla']

const large = new Array(1000000).fill('Alex')

// O(n) --> linear time
const findNemo = (array) =>{
    // let time0 = performance.now()
    for (let i = 0; i < array.length; i++) {
        if(array[i] === 'nemo') console.log(`Found ${array[i]}`);
    }
    // let time1 = performance.now()
    // console.log(`Call to find nemo took ${time1 - time0} miliseconds`);
    
}

// findNemo(nemo)
// findNemo(everyone)
findNemo(large) 