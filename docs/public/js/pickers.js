function selectThis(color) {
    document.querySelector('.selected').classList.remove('selected');
    document.querySelector('.bg-' + color).classList.add('selected');
}
