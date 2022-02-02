function ListManipulation (list){ // funcao de ordenacao e remocao de duplicatas
	list = list.sort((a,b) => a-b);
	list = list.filter((num,idx) => {
		return list.indexOf(num) === idx;
	})
	return list
}
module.exports = ListManipulation;