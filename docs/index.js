const opt = {
    color: '#FCB03C',
    trailColor: '#AAA',
    strokeWidth: 20,
    trailWidth: 20,
    duration: 1000,
    easing: 'easeInOut',
    text: {
        className: 'calendar-text',
        style: {},
    },
};

function value(type) {
    return (moment().diff(moment().startOf(type)) / moment().endOf(type).diff(moment().startOf(type)));
};

function percent(value) {
    return (value * 100).toFixed(6);
}

window.onload = function () {
    const year    = new ProgressBar.Circle('#year', opt);
    const month   = new ProgressBar.Circle('#month', opt);
    const day     = new ProgressBar.Circle('#day', opt);

    moment.updateLocale(moment.locale(), {
        week : {
            dow : 1, // Monday is the first day of the week
        },
    });

    function draw() {
        const year_p    = value('year');
        const month_p   = value('month');
        const day_p     = value('day');

        year    .animate(year_p);
        month   .animate(month_p);
        day     .animate(day_p);

        year    .setText(`<p class="caption">${moment().format('Y' )}</p><p class="percent">${percent(year_p)}</p>`);
        month   .setText(`<p class="caption">${moment().format('MM')}</p><p class="percent">${percent(month_p)}</p>`);
        day     .setText(`<p class="caption">${moment().format('DD')}</p><p class="percent">${percent(day_p)}</p>`);
        setTimeout(draw, 1000 - Date.now() / 1000 % 1 * 1000);
    };

    draw();
};
