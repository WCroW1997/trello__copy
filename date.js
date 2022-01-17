const setDate = () => {
    let today = new Date()
    let dd = today.getDate();
    let mm = today.getMonth()+1; 
    let yyyy = today.getFullYear();
    let dateNow = `${dd}-${mm}-${yyyy} ` 
    return dateNow
}