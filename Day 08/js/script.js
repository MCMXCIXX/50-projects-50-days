const formLabelWithWaveEffect = document.querySelectorAll('.form-control label');


formLabelWithWaveEffect.forEach((label)=> {
    label.innerHTML = label.innerText.split('').map((letter, index) =>{ return `<span style="transition-delay:${index * 40}ms;">${letter}</span>`}).join('');
})
