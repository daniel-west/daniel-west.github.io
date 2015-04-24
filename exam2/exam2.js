$(document).ready(function () {
	$.getJSON("https://hivelab.org/static/exam2.json", function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + json[i].ItemNo + "</td>");
            tr.append("<td>" + json[i].A + "</td>");
            tr.append("<td>" + json[i].B + "</td>");
            tr.append("<td>" + json[i].C + "</td>");
            tr.append("<td>" + json[i].D + "</td>");
            tr.append("<td>" + json[i].E + "</td>");
            tr.append("<td>" + json[i].F + "</td>");
            tr.append("<td>" + json[i].G + "</td>");
	}
	});
});
