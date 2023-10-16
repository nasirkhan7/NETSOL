let icon = document.querySelector('.icon');
        let l1 = document.querySelector('.line1');
        let l2 = document.querySelector('.line2');
        let l3 = document.querySelector('.line3');
        let menu = document.querySelector('.lines');
        let over = document.querySelector('.overlay');
        let lan = document.querySelector('.languages');
        let list = document.querySelectorAll('li')
        icon.addEventListener('click', () => {
            lan.classList.toggle('show')
        })
        menu.addEventListener('click', () => {
            over.classList.toggle('show-overlay');
            l1.classList.toggle('l1_move')
            l3.classList.toggle('l3_move')
            l2.classList.toggle('l2_move')
            list.forEach((li, index) => {
                setTimeout(() => {
                    li.classList.toggle('animate')
                }, 500 * index)
            })
        })
        // setInterval(()=>{
        //     console.log('hello')
        // },1000)