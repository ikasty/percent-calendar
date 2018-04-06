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
    const year  = new ProgressBar.Circle('#year', opt);
    const month = new ProgressBar.Circle('#month', opt);
    const week  = new ProgressBar.Circle('#week', opt);
    const day   = new ProgressBar.Circle('#day', opt);
    const hour  = new ProgressBar.Circle('#hour', opt);

    function draw() {
        const year_p  = value('year');
        const month_p = value('month');
        const week_p  = value('week');
        const day_p   = value('day');
        const hour_p  = value('hour');

        year  .animate(year_p);
        month .animate(month_p);
        week  .animate(week_p);
        day   .animate(day_p);
        hour  .animate(hour_p);

        year  .setText(`<p class="caption">year:  ${moment().format('Y' )}</p><p class="percent">${percent(year_p)}</p>`);
        month .setText(`<p class="caption">month: ${moment().format('MM')}</p><p class="percent">${percent(month_p)}</p>`);
        week  .setText(`<p class="caption">week:  ${moment().format('WW')}</p><p class="percent">${percent(week_p)}</p>`);
        day   .setText(`<p class="caption">day:   ${moment().format('DD')}</p><p class="percent">${percent(day_p)}</p>`);
        hour  .setText(`<p class="caption">hour:  ${moment().format('HH')}</p><p class="percent">${percent(hour_p)}</p>`);
    };

    setInterval(draw, 1000);
    draw();
};
