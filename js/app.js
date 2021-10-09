const togle = document.querySelector('.fa-bars');
        const body = document.querySelector('body');
        const header = document.querySelector('.header');
        const leftb = document.querySelector('.left-bar');


        const show = () => {
            leftb.classList.toggle('show');
            body.classList.toggle('body');
            header.classList.toggle('togle-show')
        }

        var ctx = document.getElementById('graph').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Salary', 'Traffic', 'Purchase', 'Page', 'Likes'],
                datasets: [{
                    label: '# of Votes',
                    data: [662, 490, 378, 700 , 800],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                resposive: true,


            }
        });


        var nex = document.getElementById('data').getContext('2d');
        var mChart = new Chart(nex, {
            type: 'polarArea',
            data: {
                labels: ['Salary', 'Traffic', 'Purchase', 'Page', 'Likes',],
                datasets: [{
                    label: '# of Votes',
                    data: [662, 490, 378, 700, 458, 800,],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                resposive: true,
            }
        });

        var nx = document.getElementById('datax').getContext('2d');
        var Chart = new Chart(nx, {
            type: 'line',
            data: {
                labels: ['Salary', 'Traffic', 'Purchase', 'Page', 'Likes','Salary', 'Traffic', 'Purchase', 'Page', 'Likes'],
                datasets: [{
                    label: '# of Votes',
                    data: [662, 490, 378, 700, 458, 800,662, 490, 378, 700, 458, 800],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                resposive: true,
            }
        });


        togle.addEventListener('click', show);