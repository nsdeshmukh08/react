class utility {
    getTimeFromDateObject = (date) => {
        return date.toString().split(' ').find((str)=>{
            return str.split('').indexOf(':') > -1;
        }).split(':').join('')
    } 

    returnSessionExpiry = (oldTime, currentTime) => {
        if(oldTime && currentTime){
            return (currentTime - oldTime) /1000 > 600 ? false : true;
        }else{
            return false;
        }
       
    }
}

export default utility;