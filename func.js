document.addEventListener('DOMContentLoaded', () => {

    //step 2
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
    });
    document.getElementById('dirxml').addEventListener('click',()=>{
        console.dirxml(document);
    });
    document.getElementById('start').addEventListener('click',()=>{
        console.group('Console Group');
    });
    document.getElementById('end').addEventListener('click',()=>{
        console.groupEnd();
    });
    document.getElementById('table').addEventListener('click',()=>{
        console.table([{ name: 'CSE', num: '110' }, { name: 'CSE', num: '101' }]);
    });
    document.getElementById('startTimer').addEventListener('click',()=>{
        console.time('Timer');
    });
    document.getElementById('endTimer').addEventListener('click',()=>{
        console.timeEnd('Timer');
    });
    document.getElementById('trace').addEventListener('click',()=>{
        console.trace('trace');
    });
    document.getElementById('globalError').addEventListener('click',()=>{
        let nonExistent = document.querySelector('#no-exist');
        nonExistent.click();
    });
    

})
