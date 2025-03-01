function drawUI() {
    let cellWidth = (w - time_display_offset) / 7;
    for (let i = 0; i < 7; i++) line(time_display_offset + i * cellWidth, 0, time_display_offset + i * cellWidth, table_end_pos);
    line(time_display_offset, table_start_pos, w, table_start_pos);
    line(time_display_offset, table_end_pos, w, table_end_pos);

    for (let i = 1; i < 8; i++) {
		push();
		textAlign(CENTER, CENTER);
		textSize(24);
		text(weekDays[i], time_display_offset + cellWidth / 2 + cellWidth * (i-1), table_start_pos / 2);
		pop();
	}

    push();
	textAlign(CENTER, CENTER);
	textSize(16);

	text("06:30", time_display_offset / 2, table_start_pos);
	line(time_display_offset - 4, table_start_pos, time_display_offset, table_start_pos);

	text("11:45", time_display_offset / 2, map(11*60 + 45, start_of_the_day, end_of_the_day, table_start_pos, table_end_pos));
	line(time_display_offset - 4, map(11*60 + 45, start_of_the_day, end_of_the_day, table_start_pos, table_end_pos), w, map(11*60 + 45, start_of_the_day, end_of_the_day, table_start_pos, table_end_pos));

    text("12:30", time_display_offset / 2, map(12*60 + 30, start_of_the_day, end_of_the_day, table_start_pos, table_end_pos));
    line(time_display_offset - 4, map(12*60 + 30, start_of_the_day, end_of_the_day, table_start_pos, table_end_pos), w, map(12*60 + 30, start_of_the_day, end_of_the_day, table_start_pos, table_end_pos));

	text("17:30", time_display_offset / 2, map(17*60 + 30, start_of_the_day, end_of_the_day, table_start_pos, table_end_pos));
	line(time_display_offset - 4, map(17*60 + 30, start_of_the_day, end_of_the_day, table_start_pos, table_end_pos), w, map(17*60 + 30, start_of_the_day, end_of_the_day, table_start_pos, table_end_pos));

    text("23:00", time_display_offset / 2, table_end_pos);
	line(time_display_offset - 4, table_end_pos, time_display_offset, table_end_pos);

	pop();
}