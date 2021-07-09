
    const counter=document.querySelectorAll('.counter');
        counter.forEach((counter) => {
            counter.innerHTML=0;
            const update = () => {
                const target = +counter.getAttribute('data-taeget');
                const initial = +counter.innerHTML;
                const incer = target/100;
                if(initial<target){
                    counter.innerHTML= `${initial + incer}`;
                    setTimeout(update,70);
                }
            } 
            update();
        });




