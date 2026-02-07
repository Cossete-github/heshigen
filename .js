(() => {
    const arr = [
document.querySelector('[seed="510"]'),
document.querySelector('[seed="511"]'),
document.querySelector('[seed="512"]'),
document.querySelector('[seed="513"]'),
document.querySelector('[seed="514"]'),
document.querySelector('[seed="515"]'),
document.querySelector('[seed="516"]'),
document.querySelector('[seed="517"]'),
document.querySelector('[seed="518"]'),
document.querySelector('[seed="519"]'),
document.querySelector('[seed="520"]'),
document.querySelector('[seed="521"]'),
document.querySelector('[seed="522"]'),
document.querySelector('[seed="523"]'),
document.querySelector('[seed="524"]'),
document.querySelector('[seed="525"]'),
document.querySelector('[seed="526"]'),
document.querySelector('[seed="527"]'),
document.querySelector('[seed="528"]'),
document.querySelector('[seed="529"]'),
document.querySelector('[seed="530"]'),
document.querySelector('[seed="531"]'),
document.querySelector('[seed="532"]'),
document.querySelector('[seed="533"]'),
document.querySelector('[seed="534"]'),
document.querySelector('[seed="535"]'),
document.querySelector('[seed="536"]'),
document.querySelector('[seed="537"]'),
document.querySelector('[seed="538"]'),
document.querySelector('[seed="539"]'),
document.querySelector('[seed="540"]'),
document.querySelector('[seed="541"]'),
document.querySelector('[seed="542"]'),
document.querySelector('[seed="543"]'),
document.querySelector('[seed="544"]'),
document.querySelector('[seed="545"]'),
document.querySelector('[seed="546"]'),
document.querySelector('[seed="547"]'),
document.querySelector('[seed="548"]'),
document.querySelector('[seed="549"]'),
document.querySelector('[seed="550"]'),
    ];
    const a = document.getElementById('arrows');
    const e1 = (i, m) => arr[i].className = a.value == m || a.value == '' ? 'show' : '';
    const evaluate = () => {
        e1(0, '↑↓↑');
        e1(1, '↓');
        e1(2, '←');
        e1(3, '↓←');
        e1(4, '↓→↑');
        e1(5, '→←');
        e1(6, '←→↓');
        e1(7, '←↑');
        e1(8, '←→');
        e1(9, '↑↓');
        e1(10, '↑↓');
        e1(11, '↑←');
        e1(12, '←↑');
        e1(13, '↓↑');
        e1(14, '↓←');
        e1(15, '→↓');
        e1(16, '→↓');
        e1(17, '→↓');
        e1(18, '←↑→←');
        e1(19, '↓←');
        e1(20, '↑→');
        e1(21, '←↓');
        e1(22, '↑→');
        e1(23, '↓→');
        e1(24, '↓→←');
        e1(25, '↑→');
        e1(26, '→↑');
        e1(27, '→↑');
        e1(28, '←↓');
        e1(29, '↓→');
        e1(30, '←↓');
        e1(31, '↑');
        e1(32, '→↑');
        e1(33, '↑');
        e1(34, '↓←');
        e1(35, '↓');
        e1(36, '←↑');
        e1(37, '→');
        e1(38, '→↓');
        e1(39, '←');
        e1(40, '↑←');
    };
    evaluate();
    document.getElementById('clear-button').addEventListener('click',
        () => {
            a.value = '';
            evaluate();
        }, false);
    const bs = e => {
        const s = a.value;
        if (!s) return;
        a.value = s.substring(0, s.length - 1);
        evaluate();
        e.preventDefault();
    };
    document.getElementById('bs-button').addEventListener('click', bs, false);
    const up = () => {
            a.value += '↑';
            evaluate();
        }
    const right = () => {
            a.value += '→';
            evaluate();
        };
    const down = () => {
            a.value += '↓';
            evaluate();
        };
    const left = () => {
            a.value += '←';
            evaluate();
        };
    document.getElementById('arrow-up').addEventListener('click', up, false);
    document.getElementById('arrow-right').addEventListener('click', right, false);
    document.getElementById('arrow-down').addEventListener('click', down, false);
    document.getElementById('arrow-left').addEventListener('click', left, false);
    window.addEventListener('keyup',
        e => {
            switch (e.key)
            {
                case 'ArrowUp': up(); return;
                case 'ArrowRight': right(); return;
                case 'ArrowDown': down(); return;
                case 'ArrowLeft': left(); return;
                case 'Backspace': bs(); return; 
            }
        }, false);
})();