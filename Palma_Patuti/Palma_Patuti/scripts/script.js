$(function () {

    the_game = function () {

        if (check_bullet_hits_floor_right(bullet_1) || check_bullet_hits_player_right(bullet_1)) {
            set_bullet_to_initial_position_right(bullet_1);
        } else {
            bullet_right(bullet_1);
        }

        if (check_bullet_hits_floor_right(bullet_2) || check_bullet_hits_player_right(bullet_2)) {
            set_bullet_to_initial_position_right(bullet_2);
        } else {
            bullet_right(bullet_2);
        }

        if (check_bullet_hits_floor_right(bullet_3) || check_bullet_hits_player_right(bullet_3)) {
            set_bullet_to_initial_position_right(bullet_3);
        } else {
            bullet_right(bullet_3);
        }
		
        if (check_bullet_hits_floor_down(bullet_4) || check_bullet_hits_player_down(bullet_4)) {
            set_bullet_to_initial_position_down(bullet_4);
        } else {
            bullet_down(bullet_4);
        }		
		
        if (check_bullet_hits_floor_down(bullet_5) || check_bullet_hits_player_down(bullet_5)) {
            set_bullet_to_initial_position_down(bullet_5);
        } else {
            bullet_down(bullet_5);
        }

        if (check_bullet_hits_floor_down(bullet_6) || check_bullet_hits_player_down(bullet_6)) {
            set_bullet_to_initial_position_down(bullet_6);
        } else {
            bullet_down(bullet_6);
        }

        if (life > 0) {
            anim_id = requestAnimationFrame(the_game);
        } else {
            stop_the_game();
        }
    };

    anim_id = requestAnimationFrame(the_game);

});