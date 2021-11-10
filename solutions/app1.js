const removeDuplicatesFromArray = (arr) => {
    return arr.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })
};





export default removeDuplicatesFromArray;

// export default removeDuplicatesFromArray
