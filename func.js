document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('log').addEventListener('click',()=>{
        console.log("Console Log Demo");
    });
    document.getElementById('error').addEventListener('click',()=>{
        console.error('Console Error Demo');
    });
    document.getElementById('count').addEventListener('click',()=>{
        console.count('Count');
    });
    document.getElementById('warn').addEventListener('click',()=>{
        console.warn('Console Warn Button');
    });
    document.getElementById('assert').addEventListener('click',()=>{
        console.assert(false, 'Console assert message.');
    });
    document.getElementById('clear').addEventListener('click',()=>{
        console.clear();
    });
    document.getElementById('dir').addEventListener('click',()=>{
        console.dir(document.body);
        // break;
        
    });
    document.getElementById('dirxml').addEventListener('click',()=>{
        console.count('Count');
    });
    document.getElementById('start').addEventListener('click',()=>{
        console.count('Count');
    });
    document.getElementById('end').addEventListener('click',()=>{
        console.count('Count');
    });
    document.getElementById('table').addEventListener('click',()=>{
        console.count('Count');
    });
    document.getElementById('startTimer').addEventListener('click',()=>{
        console.count('Count');
    });
    document.getElementById('endTimer').addEventListener('click',()=>{
        console.count('Count');
    });
    document.getElementById('trace').addEventListener('click',()=>{
        console.count('Count');
    });
    document.getElementById('globalError').addEventListener('click',()=>{
        console.count('Count');
    });


})
