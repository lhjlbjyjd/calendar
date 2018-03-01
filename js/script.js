var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var monthDelta = 0;

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function loadCalendar(events) {
    var d  = new Date();
    console.log(monthDelta === 0);
    $('#days').empty();
    for(i = 1; i <= daysInMonth((parseInt(d.getMonth().toString()) + monthDelta + 1) % 12, (parseInt(d.getFullYear().toString()) + Math.floor(monthDelta/12))); i++) {
        z = $('<span class="no-event">' + i + '</span>');
        if(events.indexOf(i) !== -1)
            z.attr("class", "event");
        x = $('<div class="day-outline"></div>');
        if( i === d.getDate() && monthDelta === 0)
            x.attr("class", "active day-outline");
        x.append(z);
        $('#days').append($('<li></li>').append(x));
    }
    $(".day-outline").each(function (index, value) {
        console.log();
        $(value).css("width", $(value).css("height"));
    });
    $("#month-name").empty().html(monthNames[(parseInt(d.getMonth().toString()) + monthDelta) % 12] + " " + (parseInt(d.getFullYear().toString()) + Math.floor(monthDelta/12)));
}

$(document).ready(function () {
    var events = [3, 12];

    loadCalendar(events);

    $('#next').click(function () {
        monthDelta++;
        loadCalendar(events);
    });
    $('#prev').click(function () {
        monthDelta--;
        loadCalendar(events);
    });
});