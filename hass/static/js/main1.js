const inputs = document.querySelectorAll('.input');

function focusFunc()
{
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
    
}

function blurFunc()
{
    let parent = this.parentNode.parentNode;
    if(this.value == "")
    {
        parent.classList.remove('focus');
       
    }

    $('h5').css('width','100px');
}

inputs.forEach(input =>
    {   
        input.addEventListener('focus', focusFunc);
        input.addEventListener('blur', blurFunc);
        
    });

