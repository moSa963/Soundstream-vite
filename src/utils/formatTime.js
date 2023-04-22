

/**
 * 
 * @param {int} seconds 
 * @returns time string hh:mm:ss
 */
const formatTime = (seconds) => {
    if (!seconds) return "0:00";

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - (hours * 3600)) / 60);
    const remainingSeconds = Math.floor(seconds - (hours * 3600) - (minutes * 60));
  
    var res = "";

    if (hours > 0)
    {
        res +=  hours.toString() + ':';
    }

    return res + `${minutes.toString()}:${remainingSeconds.toString().padStart(2, 0)}`;
}

export default formatTime;