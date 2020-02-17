
console.log('start');
document.querySelector('#one').onclick=(e)=>{
    e.preventDefault();
    window.appex.fire();
};


document.querySelector('#two').onclick = e=>{
    e.preventDefault();
    window.appex.onRefresh=()=>{
        console.log('another test');
    }
}
// window.appex.onRefresh=()=>{
//     console.log('refresh');
// }

// ipcRenderer.on('close-eccp',()=>{
//     console.log('close eccp');
// })