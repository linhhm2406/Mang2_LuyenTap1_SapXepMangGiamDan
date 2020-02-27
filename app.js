let array = [];
for (let i = 0; i < 10; i++) {
    array[i] = parseInt(prompt('Nhap vao gia tri phan tu ' + i));
}

let temp = array[0];
for (let i = 0 ; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] < array[j]) {
            temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
    }
}

alert('Mang sau khi duoc sap xep la '+array);
