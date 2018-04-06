const opt = {
    color: '#FCB03C',
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
    return (value * 100).toFixed(8).toString().substring(0, 9);
}

window.onload = function () {
    const year  = new ProgressBar.Circle('#year', opt);
    const month = new ProgressBar.Circle('#month', opt);
    const week  = new ProgressBar.Circle('#week', opt);
    const day   = new ProgressBar.Circle('#day', opt);
    const hour  = new ProgressBar.Circle('#hour', opt);

    function draw() {
        const year_value  = value('year');
        const month_value = value('month');
        const week_value  = value('week');
        const day_value   = value('day');
        const hour_value  = value('hour');

        year   .animate(year_value);
        month  .animate(month_value);
        week   .animate(week_value);
        day    .animate(day_value);
        hour   .animate(hour_value);

        year   .setText('<p class="caption">year: '  + moment().format('Y')  + '</p>' + percent(year_value));
        month  .setText('<p class="caption">month: ' + moment().format('MM') + '</p>' + percent(month_value));
        week   .setText('<p class="caption">week: '  + moment().format('WW') + '</p>' + percent(week_value));
        day    .setText('<p class="caption">day: '   + moment().format('DD') + '</p>' + percent(day_value));
        hour   .setText('<p class="caption">hour: '  + moment().format('HH') + '</p>' + percent(hour_value));
    };

    setInterval(draw, 1000);
    draw();
};
