/*Bullets Right*/
function bullet_right(bullet) {
    bullet_current_position = parseInt(bullet.css('right'));
    bullet.css('right', bullet_current_position + speed);
}

function check_bullet_hits_floor_right(bullet) {
    if (collision(bullet, floor)) {
        show_bulls_eye_right(bullet);
        return true;
    }
    return false;
}

function set_bullet_to_initial_position_right(bullet) {
    bullet.css('right', bullet_initial_position);
}

function show_bulls_eye_right(bullet) {
    bullseye_num = bullet.attr('data-bullseye');
    $('#bullseye' + bullseye_num).show();
    hide_bulls_eye_right(bullseye_num);
}

function hide_bulls_eye_right(bullseye_num) {
    setTimeout(function () {
        $('#bullseye' + bullseye_num).hide();
    }, 800);
}

function check_bullet_hits_player_right(bullet) {
    if (collision(bullet, player)) {
        bullet_top = parseInt(bullet.css('right'));
        if (bullet_top < player_top) {
            decrement_life();
            return true;
        }
    }
    return false;
}

/*Bullets Top*/
function bullet_down(bullet) {
    bullet_current_position1 = parseInt(bullet.css('top'));
    bullet.css('top', bullet_current_position1 + speed);
}

function check_bullet_hits_floor_down(bullet) {
    if (collision(bullet, floor1)) {
        show_bulls_eye_down(bullet);
        return true;
    }
    return false;
}

function set_bullet_to_initial_position_down(bullet) {
    bullet.css('top', bullet_initial_position1);
}

function show_bulls_eye_down(bullet) {
    bullseye_num = bullet.attr('data-bullseye');
    $('#bullseye' + bullseye_num).show();
    hide_bulls_eye_down(bullseye_num);
}

function hide_bulls_eye_down(bullseye_num) {
    setTimeout(function () {
        $('#bullseye' + bullseye_num).hide();
    }, 800);
}

function check_bullet_hits_player_down(bullet) {
    if (collision(bullet, player)) {
        bullet_top1 = parseInt(bullet.css('top'));
        if (bullet_top1 < player_top1) {
            decrement_life();
            return true;
        }
    }
    return false;
}

/*Restart the Game*/
function stop_the_game() {
    cancelAnimationFrame(anim_id);
    restart.slideDown();
}

restart.click(function () {
    location.reload();
});

/*Life of the Player*/
function decrement_life() {
    life--;
    life_span.text(life);
}

