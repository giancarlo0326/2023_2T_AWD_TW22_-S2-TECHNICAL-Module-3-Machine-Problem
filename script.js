function moveBox(day) {
    var box = document.getElementById('box');
    box.style.transform = 'translateX(0)';
    switch (day) {
        case 'Monday':
            box.style.backgroundColor = '#8A2BE2'; 
            break;
        case 'Tuesday':
            box.style.backgroundColor = '#FFC0CB'; 
            break;
        case 'Wednesday':
            box.style.backgroundColor = '#2196F3'; 
            break;
        case 'Thursday':
            box.style.backgroundColor = '#4CAF50'; 
            break;
        case 'Friday':
            box.style.backgroundColor = '#FFEB3B'; 
            break;
        case 'Saturday':
            box.style.backgroundColor = '#FFA500';
            break;
        case 'Sunday':
            box.style.backgroundColor = '#f44336'; 
            break;
        default:
            box.style.backgroundColor = '#FFFFFF'; 
    }
}
