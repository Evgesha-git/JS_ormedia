/**
 * @author chico
 */

var term = {
	Austria: 15,
	Belize: 22,
	Bolivia: 34,
	Germany: 2,
	Spain: 35,
	Italia: 33,
	Dominica: 35,
	Greenland: -14,
	Egypt: 37,
	Indonesia: 30
}

function avgTerm(obj){
	var sum = 0;
	var i = 0;
	var avgValue = 0;
	
	for (var key in obj) {
		sum += obj[key];
		i++;
	}
	
	avgValue = Math.round(sum/i);
	return avgValue;
}

function maxTerm(obj){
	var maxValue = 0;
	
	for (var key in obj){
		if (obj[key]>maxValue){
			maxValue = obj[key];
		}
	}
	
	return maxValue;
}

document.getElementById('js1').innerHTML = avgTerm(term);
document.getElementById('js2').innerHTML = maxTerm(term);
