let arr = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и','й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т','у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
let b = 'Съешь ещё этих мягких французских булок, да выпей же чаю'
b = b.toLowerCase()
let count = 0

for(let i = 0; i < arr.length; i++){
    if(b.indexOf(arr[i]) != -1){
        count++
    }
}
if(count == 33){
    console.log("панограмма")
} else{
    console.log("не панограмма")
}
