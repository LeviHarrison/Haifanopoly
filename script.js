// JavaScript Document
var player1s = 750;
var player2s = 750;
var player3s = 750;
var player4s = 750;
var player5s = 750;
var player6s = 750;
var player1c = 1;
var player2c = 1;
var player3c = 1;
var player4c = 1;
var player5c = 1;
var player6c = 1;
function load() {
document.getElementById('amount1s').innerHTML = String(player1s);
document.getElementById('amount2s').innerHTML = String(player2s);
document.getElementById('amount3s').innerHTML = String(player3s);
document.getElementById('amount4s').innerHTML = String(player4s);
document.getElementById('amount5s').innerHTML = String(player5s);
document.getElementById('amount6s').innerHTML = String(player6s);
document.getElementById('amount1c').innerHTML = String(player1c);
document.getElementById('amount2c').innerHTML = String(player2c);
document.getElementById('amount3c').innerHTML = String(player3c);
document.getElementById('amount4c').innerHTML = String(player4c);
document.getElementById('amount5c').innerHTML = String(player5c);
document.getElementById('amount6c').innerHTML = String(player6c);
}
function player1S() {
	var x = document.getElementById('player1s').value;
	player1s = player1s + parseInt(x);
	document.getElementById('amount1s').innerHTML = String(player1s);
}
function player2S() {
	var x = document.getElementById('player2s').value;
	player2s = player2s + parseInt(x);
	document.getElementById('amount2s').innerHTML = String(player2s);
}
function player3S() {
	var x = document.getElementById('player3s').value;
	player3s = player3s + parseInt(x);
	document.getElementById('amount3s').innerHTML = String(player3s);
}
function player4S() {
	var x = document.getElementById('player4s').value;
	player4s = player4s + parseInt(x);
	document.getElementById('amount4s').innerHTML = String(player4s);
}
function player5S() {
	var x = document.getElementById('player5s').value;
	player5s = player5s + parseInt(x);
	document.getElementById('amount5s').innerHTML = String(player5s);
}
function player6S() {
	var x = document.getElementById('player6s').value;
	player6s = player6s + parseInt(x);
	document.getElementById('amount6s').innerHTML = String(player6s);
}
function player1C() {
	var x = document.getElementById('player1c').value;
	player1c = player1c + parseInt(x);
	document.getElementById('amount1c').innerHTML = String(player1c);
}
function player2C() {
	var x = document.getElementById('player2c').value;
	player2c = player2c + parseInt(x);
	document.getElementById('amount2c').innerHTML = String(player2c);
}
function player3C() {
	var x = document.getElementById('player3c').value;
	player3c = player3c + parseInt(x);
	document.getElementById('amount3c').innerHTML = String(player3c);
}
function player4C() {
	var x = document.getElementById('player4c').value;
	player4c = player4c + parseInt(x);
	document.getElementById('amount4c').innerHTML = String(player4c);
}
function player5C() {
	var x = document.getElementById('player5c').value;
	player5c = player5c + parseInt(x);
	document.getElementById('amount5c').innerHTML = String(player5c);
}
function player6C() {
	var x = document.getElementById('player6c').value;
	player6c = player6c + parseInt(x);
	document.getElementById('amount6c').innerHTML = String(player6c);
}